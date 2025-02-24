<script>
	import { Button } from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";
	import Logo from "$lib/Logo/Logo.svelte";
	import ColorSchemeToggle from "$lib/ColorSchemeToggle/ColorSchemeToggle.svelte";

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/#early-access", label: "Early Access" },
		{ href: "/#services", label: "Services" },
		{ href: "/#about", label: "About" },

		{ href: "mailto:aoztanir25@gmail.com", label: "Contact" },
	];
</script>

<header class="sticky top-0 z-50 border-b border-neutral-200 bg-white shadow dark:border-neutral-800 dark:bg-black">
	<div class="container mx-auto flex items-center justify-between p-4">
		<Logo />
		<nav class="hidden space-x-4 md:flex">
			<ColorSchemeToggle />

			{#each links as { href, label }}
				<a {href} class="text-gray-700 hover:text-gray-900">
					<Button variant="link">{label}</Button>
				</a>
			{/each}
		</nav>
		<div class="md:hidden">
			<Sheet.Root>
				<Sheet.Trigger aschild>
					<Button variant="outline">Menu</Button>
				</Sheet.Trigger>
				<Sheet.Content side="right">
					<Sheet.Header>
						<Sheet.Title>Menu</Sheet.Title>
					</Sheet.Header>
					<nav class="mt-4 flex flex-col space-y-4">
						{#each links as { href, label }}
							<a {href} class="text-gray-700 hover:text-gray-900">
								<Button variant="link">{label}</Button>
							</a>
						{/each}
					</nav>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>
