<script>
	import { Button } from "$lib/components/ui/button";
	import Logo from "$lib/Logo/Logo.svelte";

	const productLinks = [
		{ href: "/#early-access", label: "Early Access" },
		{ href: "/ambassador-program", label: "Ambassador Program" },
		{ href: "/#services", label: "Services" },
		{ href: "/#about", label: "About" },
		{ href: "/#impact", label: "Our Impact" },
		{ href: "/#pitch", label: "For Investors" },
	];

	const contactLinks = [
		{ href: "mailto:aoztanir25@gmail.com", label: "Contact Us" },
		// { href: "https://twitter.com/klubspace", label: "Twitter" },
		// { href: "https://linkedin.com/company/klubspace", label: "LinkedIn" },
		// { href: "https://instagram.com/klubspace", label: "Instagram" },
	];

	const companyLinks = [
		{ href: "/privacy", label: "Privacy Policy" },
		{ href: "/terms", label: "Terms of Service" },
		{ href: "/team", label: "Meet the Team" },
		{ href: "/careers", label: "Careers" },
	];
</script>

<footer class="border-t border-gray-200 py-12 dark:border-neutral-800">
	<div class="container mx-auto px-4">
		<div class="grid gap-8 md:grid-cols-3">
			<div class="space-y-4">
				<Logo />
				<p class="text-sm dark:text-neutral-400">
					Revolutionizing organization management with seamless, efficient solutions for communities of all sizes.
				</p>
			</div>

			<div>
				<h3 class="mb-4 font-semibold">Product</h3>
				<ul class="space-y-2 text-sm">
					{#each productLinks as { href, label }}
						<li>
							<a {href} class="hover:text-gray-900 dark:text-neutral-400 dark:hover:text-neutral-200">{label}</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- <div>
				<h3 class="mb-4 font-semibold">Company</h3>
				<ul class="space-y-2 text-sm text-gray-600 dark:text-neutral-400">
					{#each companyLinks as { href, label }}
						<li><a {href} class="hover:text-gray-900 dark:hover:text-neutral-200">{label}</a></li>
					{/each}
				</ul>
			</div> -->

			<div>
				<h3 class="mb-4 font-semibold">Get in touch</h3>
				<ul class="space-y-2 text-sm">
					{#each contactLinks as { href, label }}
						<li>
							<a {href} class="hover:text-gray-900 dark:text-neutral-400 dark:hover:text-neutral-200">{label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="mt-8 pt-8 text-center">
			<p class="text-sm dark:text-neutral-400">&copy; {new Date().getFullYear()} Klubspace. All rights reserved.</p>
		</div>
	</div>
</footer>
