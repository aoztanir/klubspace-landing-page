import type { Session, SupabaseClient } from "@supabase/supabase-js";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient<Database.Database>;
			safeGetSession: () => Promise<{ session: Session | null }>;
			session: Session | null;
		}
		interface PageData {
			session: Session | null;
			user: Database.User;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
