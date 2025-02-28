<script>
	import "../app.postcss";
	import { Toaster } from "$lib/components/ui/sonner";
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";

	let { data, children } = $props();
	let { session, supabase } = $derived(data);
	import { ModeWatcher } from "mode-watcher";
	import Header from "$lib/landingPageComponents/header.svelte";
	import Footer from "$lib/landingPageComponents/footer.svelte";

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate("supabase:auth");
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Toaster />
<ModeWatcher />
<Header />
{@render children()}
<Footer />
