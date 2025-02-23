<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
		nav?: Snippet; //override default nav, used for admin nav
	};
	let { children, nav }: Props = $props();
</script>

<div class="shell">
	<header>
		<a class="logo_wrapper" href="/">
			<div class="logo_image_wrapper"><img src="/klubs.png" alt="Logo" /></div>
			<div class="logo_text">KLUBHUB</div>
		</a>
		<div class="search search_bar search_bar_wrapper"></div>
		<div class="user_menu">
			<div class="user_profile_picture"></div>
		</div>
	</header>
	<div class="navigation sidebar">
		{#if nav}
			{@render nav()}
		{:else}
			<nav>
				<ul>
					<li>Test</li>
				</ul>
			</nav>
		{/if}
	</div>
	<main>
		{@render children()}
	</main>
</div>

<style lang="postcss">
	.shell {
		@apply grid;

		grid-template-columns: 200px auto;
		grid-template-rows: 75px auto;
		grid-template-areas: "header header" "nav main" "nav main";

		@apply min-h-screen;
	}

	header {
		grid-area: header;
		@apply sticky top-0;

		@apply flex;

		.logo_wrapper {
			@apply flex items-center;

			.logo_image_wrapper {
				@apply square-12 py-1.5;

				img {
					@apply mx-auto h-full;
				}
			}
			.logo_text {
				font-family: "Klubs";
				@apply text-3xl;
				@apply tracking-wider;
			}
		}
	}
	.navigation.sidebar {
		grid-area: nav;

		order: 2;
	}

	main {
		@apply bg-green-300;
		grid-area: main;

		@apply p-2 pl-6 pt-6;
	}
</style>
