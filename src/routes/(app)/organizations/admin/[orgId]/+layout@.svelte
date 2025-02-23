<script lang="ts">
	import type { Component } from "svelte";

	import { ArrowBigLeftDash, House } from "lucide-svelte";
	import CalendarDays from "$lib/icons/CalendarDays.svelte";
	import Megaphone from "$lib/icons/Megaphone.svelte";
	import Users from "$lib/icons/Users.svelte";
	import NotepadText from "$lib/icons/NotepadText.svelte";
	import FilePenLine from "$lib/icons/FilePenLine.svelte";
	import UserCog from "$lib/icons/UserCog.svelte";
	import Images from "$lib/icons/Images.svelte";
	import Database from "$lib/icons/Database.svelte";
	import Table2 from "$lib/icons/Table2.svelte";
	import Layers3 from "$lib/icons/Layers3.svelte";
	import BookUser from "$lib/icons/BookUser.svelte";
	import ChartArea from "$lib/icons/ChartArea.svelte";
	import Workflow from "$lib/icons/Workflow.svelte";
	import CircleDollarSign from "$lib/icons/CircleDollarSign.svelte";
	import Settings from "$lib/icons/Settings.svelte";
	import ClipboardCheck from "$lib/icons/ClipboardCheck.svelte";

	let { data, children } = $props();
	let { organization } = $derived(data);

	let is_nav_expanded = $state(false);
	function toggleIsNavExpanded() {
		is_nav_expanded = !is_nav_expanded;
	}
</script>

{#snippet nav_link(title: string, link?: string, icon?: Component)}
	{#if is_nav_expanded}
		<li class="nav_link">
			{#if icon}
				<div class="icon_wrapper">
					<!-- svelte-ignore svelte_component_deprecated -->
					<svelte:component this={icon} />
				</div>
			{/if}
			{#if link}
				<a class="nav_text" href="/organizations/admin/{organization.id}/{link}" {title}>{title}</a>
			{:else}
				<span class="nav_text">{title}</span>
			{/if}
		</li>
	{:else if link}
		<li class="nav_link">
			<a class="nav_icon" href="/organizations/admin/{organization.id}/{link}" {title}>
				<!-- svelte-ignore svelte_component_deprecated -->
				<svelte:component this={icon} />
			</a>
		</li>
	{/if}
{/snippet}

<div class="shell" class:not_open={!is_nav_expanded}>
	<header>
		<a class="logo_wrapper" href="/">
			<div class="logo_image_wrapper"><img src="/klubs.png" alt="Logo" /></div>
			<div class="logo_text">KLUBSPACE</div>
		</a>
		<div class="search search_bar search_bar_wrapper"></div>
		<div class="user_menu">
			<div class="user_profile_picture"></div>
		</div>
	</header>
	<div class="navigation sidebar" class:open={is_nav_expanded}>
		<nav class:expanded={is_nav_expanded}>
			<button onclick={toggleIsNavExpanded} class="hamburger-button" aria-label="Toggle Nav">
				<div class="hamburger-button-content" class:open={is_nav_expanded}>
					<span></span>
					<span class="second"></span>
					<span class="third"></span>
					<span></span>
				</div>
			</button>
			<div class="back_to_home_button">
				<a href="/home">
					<House class={is_nav_expanded ? "hidden" : ""} />
					<ArrowBigLeftDash class="icon {is_nav_expanded ? '' : 'hidden'}" />
					<span class:hidden={!is_nav_expanded}>Back To Home</span>
				</a>
			</div>
			<ul class="nav_top_level_list">
				{@render nav_link("Announcements", "announcements/new", Megaphone)}
				<ul class="nav_child_list">
					{@render nav_link("Manage Existing", "announcements")}
					{@render nav_link("Create New", "announcements/new")}
				</ul>

				{@render nav_link("Events", "events", CalendarDays)}

				{@render nav_link("Attendance", undefined, ClipboardCheck)}
				<ul class="nav_child_list">
					{@render nav_link("Check In", "attendance/check-in")}
					{@render nav_link("Requirements", "attendance/requirements")}
				</ul>

				{@render nav_link("Posts", undefined, FilePenLine)}
				<ul class="nav_child_list">
					{@render nav_link("Manage Existing", "posts")}
					{@render nav_link("Create New", "posts/new")}
				</ul>

				{@render nav_link("Gallery", "gallery", Images)}

				<div class="separator"></div>

				<li class="group_label">Membership</li>
				{@render nav_link("Roster", "membership/roster", BookUser)}
				{@render nav_link("Tiers", "membership/tiers", Layers3)}
				{@render nav_link("Groups", "membership/groups", Users)}
				{@render nav_link("Forms", "membership/forms", NotepadText)}
				{@render nav_link("Spreadsheets", "membership/spreadsheets", Table2)}
				{@render nav_link("Custom Member Data", "membership/custom-member-data", Database)}

				<div class="separator"></div>

				{@render nav_link("Statistics", "statistics", ChartArea)}
				{@render nav_link("Roles & Permissions", "roles-and-permissions", UserCog)}
				<!-- {@render nav_link("Integrations", "integrations", Workflow)}
				{@render nav_link("Subscription", "subscription", CircleDollarSign)}
				{@render nav_link("Settings", "settings", Settings)} -->
			</ul>
			<button class="absolute bottom-0">Swap Org: {organization.name}</button>
		</nav>
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

	.shell.not_open {
		grid-template-columns: 80px auto;

		.nav_top_level_list {
			@apply w-full;
		}
		:global(.nav_link) {
			@apply justify-center;
		}

		.group_label {
			@apply hidden;
		}

		.separator {
			@apply my-2;
		}

		.back_to_home_button a :global(.lucide-icon) {
			@apply h-6;
		}
	}

	header {
		grid-area: header;
		@apply sticky top-0;

		/* @apply bg-blue-300; */
		/* @apply bg-gray-50; */

		@apply flex;

		@apply border-b border-solid border-black/10;

		.logo_wrapper {
			@apply flex items-center;

			@apply pl-4;

			.logo_image_wrapper {
				@apply py-1.5 square-12;

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
		height: calc(100vh - 75px);
		@apply sticky top-[75px];

		.hamburger-button {
			@apply p-3;

			@apply mb-3;
		}

		.hamburger-button-content {
			@apply square-8;
			@apply relative;

			&.open span {
				--rotation: 45;
				--translate: 0;
				--scale: 0;
			}

			span {
				@apply w-full;
				@apply bg-gray-400;
				height: 3px;
				@apply absolute left-0;

				--rotation: 0;
				--translate: 5;
				--scale: 1;

				&:first-child {
					top: 0;
					transform: translateY(calc(var(--translate) * 1px)) scale(var(--scale));
					opacity: var(--scale);
				}
				&:last-child {
					bottom: 0;
					transform: translateY(calc(-1 * var(--translate) * 1px)) scale(var(--scale));
					opacity: var(--scale);
				}
				&.second,
				&.third {
					top: 50%;
				}
				&.second {
					transform: translateY(-50%) rotate(calc(var(--rotation) * 1deg));
				}
				&.third {
					transform: translateY(-50%) rotate(calc(-1 * var(--rotation) * 1deg));
				}

				transition:
					transform 300ms,
					opacity 175ms;
			}
		}

		nav {
			@apply h-full w-full;
			@apply bg-gray-50;
			/* @apply bg-orange-400; */

			@apply border-r border-solid border-black/10;

			@apply relative;

			@apply px-4;

			&.expanded {
				width: 300px;
			}

			li {
				@apply text-gray-800;
			}

			&:not(.expanded) {
				ul.nav_child_list {
					@apply hidden;
				}
			}
		}
	}
	.nav_top_level_list {
		@apply pt-4;

		/* @apply bg-blue-500/50; */
		@apply mx-auto w-fit;
	}
	.back_to_home_button a {
		@apply flex items-center justify-center;

		@apply font-bold;
		@apply text-gray-400;

		@apply text-sm;
		@apply gap-x-1;

		:global(.lucide-icon) {
			@apply w-auto stroke-[3];

			@apply h-4;
		}
	}
	.nav_link {
		@apply flex items-center;

		@apply gap-x-1;
		@apply mb-1;
		@apply py-1;

		.icon_wrapper {
			@apply square-5;

			:global(svg) {
				@apply h-full w-full stroke-2;
			}
		}
		.nav_text {
			@apply text-base font-normal;
		}

		&:has(> ul) {
			@apply list-item;
		}
	}
	.nav_child_list {
		@apply ml-2 pl-4;
		@apply mb-3;

		@apply border-l border-solid border-gray-200;

		:global(.nav_link .nav_text) {
			@apply text-sm;
		}
	}
	.group_label {
		@apply mb-1 text-xs !text-opacity-50;
	}
	.separator {
		@apply my-5;

		@apply border-t border-solid border-gray-200;
	}
	nav.expanded .separator {
		transform: scaleX(1.25);
	}

	main {
		/* @apply bg-green-300; */
		grid-area: main;

		@apply p-2 pl-6 pt-6;
	}
</style>
