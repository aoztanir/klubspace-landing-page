import { error as kitError } from "@sveltejs/kit";

export async function load({ parent }) {
	const { user, supabase } = await parent();

	async function getUser() {
		const { data, error } = await supabase.from("users_to_organizations").select("organization_id").eq("user_id", user.id);
		if (error) throw kitError(500);
		return data;
	}

	return {};
}
