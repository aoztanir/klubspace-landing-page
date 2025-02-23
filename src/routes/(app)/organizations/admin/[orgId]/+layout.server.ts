import { error as kitError } from "@sveltejs/kit";

export async function load({ locals: { supabase }, params: { orgId } }) {
	const { data, error } = await supabase.from("organizations").select("*").eq("id", orgId).limit(1);
	if (error) throw kitError(500);
	if (data.length === 0) throw kitError(404);
	return {
		organization: data[0],
	};
}
