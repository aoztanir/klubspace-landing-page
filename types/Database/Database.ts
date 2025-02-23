import type { Database as SupabaseDatabase } from "./supabase";

declare global {
	namespace Database {
		export type Database = SupabaseDatabase;

		export type User = Database["public"]["Tables"]["users"]["Row"];

		namespace Enums {
			export type AnnouncementPriority = Database["public"]["Enums"]["ANNOUNCEMENT_PRIORITY"];
			export type AnnouncementPlatform = Database["public"]["Enums"]["ANNOUNCEMENT_PLATFORMS"];
		}
	}
}
