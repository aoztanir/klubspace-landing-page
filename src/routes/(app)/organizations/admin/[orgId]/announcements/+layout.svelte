<script lang="ts">
	import { page } from "$app/stores";

	let { data, children } = $props();
	let { organization } = $derived(data);
	let current = $derived($page.route.id?.split("/").pop());
</script>

<div class="tabs">
	<a href="/organizations/admin/{organization.id}/announcements/new" class:active={current === "new"}>New Announcement</a>
	<a href="/organizations/admin/{organization.id}/announcements" class:active={current === "announcements"}>Manage Announcements</a>
</div>

{@render children()}

<style lang="postcss">
	.tabs {
		@apply mx-auto flex w-[350px] justify-center;

		a {
			@apply bg-slate-200 px-3 py-2 text-center text-sm font-medium;

			&.active {
				@apply bg-slate-300;
			}

			&:first-child {
				@apply rounded-l;
			}

			&:last-child {
				@apply rounded-r;
			}
		}
	}
</style>
