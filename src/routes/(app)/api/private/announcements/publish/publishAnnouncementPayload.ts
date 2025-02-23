import { z } from "zod";

export const announcement_payload_schema = z.object({
	content: z.string(),
	priority: z.enum<
		Database.Enums.AnnouncementPriority,
		[Database.Enums.AnnouncementPriority, Database.Enums.AnnouncementPriority, Database.Enums.AnnouncementPriority]
	>(["LOW", "MEDIUM", "HIGH"]),
	attachments: z.array(
		z.object({
			filename: z.string(),
			path: z.string(),
		}),
	),
});

export const discord_announcement_payload_schema = announcement_payload_schema.extend({});

export const email_announcement_payload_schema = announcement_payload_schema.extend({
	title: z.string().optional(),
	emails: z.array(z.string()).optional(),
});
