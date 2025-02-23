import type { RequestHandler } from "@sveltejs/kit";

import { error as svelteError, json as svelteJson } from "@sveltejs/kit";
import { discordParser } from "./parser.server";
import { discord_announcement_payload_schema } from "../publishAnnouncementPayload";

export const POST = (async ({ request, fetch, locals }) => {
	const session = await locals.safeGetSession();
	if (!session) svelteError(401);
	const json = await request.json();
	const result = discord_announcement_payload_schema.safeParse(json);
	if (result.success === false) throw svelteError(400, { message: "Invalid or missing request parameters" });

	const {} = locals.supabase.from("announcement");

	const { content, priority, attachments, announcement_role_id, webhook_url } = result.data;

	const message_prefix =
		announcement_role_id == null || priority === "LOW" ? "" : priority === "MEDIUM" ? `<@&${announcement_role_id}>\n` : "@everyone\n";
	const data = new FormData();
	data.append("payload_json", JSON.stringify({ content: `${message_prefix}${discordParser.translate(content)}` }));

	if (attachments.length > 0) {
		const blob = await (await fetch(attachments[0].path)).blob();
		data.set("file", blob, attachments[0].filename);
	}
	const response = await fetch(webhook_url, {
		method: "POST",
		body: data,
	});
	if (response.ok !== true)
		throw svelteError(500, { message: `Error pushing announcement to Discord: ${response.status} ${response.statusText}` });

	return svelteJson({ message_id: (await response.json()).id });
}) satisfies RequestHandler;
