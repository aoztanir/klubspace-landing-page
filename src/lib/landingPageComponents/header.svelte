<script>
	import { Button } from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";
	import Logo from "$lib/Logo/Logo.svelte";
	import ColorSchemeToggle from "$lib/ColorSchemeToggle/ColorSchemeToggle.svelte";
</script>

<header class=" shadow">
	<div class="container mx-auto flex items-center justify-between p-4">
		<!-- <div class="text-xl font-bold">Klubspace</div> -->
		<Logo />
		<nav class="hidden space-x-4 md:flex">
			<ColorSchemeToggle />

			<a href="/" class="text-gray-700 hover:text-gray-900"><Button variant="link">Home</Button></a>
			<a href="/about" class="text-gray-700 hover:text-gray-900"><Button variant="link">About</Button></a>
			<a href="/services" class="text-gray-700 hover:text-gray-900"><Button variant="link">Services</Button></a>
			<a href="/contact" class="text-gray-700 hover:text-gray-900"><Button variant="link">Contact</Button></a>
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
						<a href="/" class="text-gray-700 hover:text-gray-900"><Button variant="link">Home</Button></a>
						<a href="/about" class="text-gray-700 hover:text-gray-900"><Button variant="link">About</Button></a>
						<a href="/services" class="text-gray-700 hover:text-gray-900"><Button variant="link">Services</Button></a>
						<a href="/contact" class="text-gray-700 hover:text-gray-900"><Button variant="link">Contact</Button></a>
					</nav>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>
