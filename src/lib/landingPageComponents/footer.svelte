<script>
	import { Button } from "$lib/components/ui/button";
	import Logo from "$lib/Logo/Logo.svelte";
</script>

<footer class="border-t border-gray-200 py-12 dark:border-neutral-800">
	<div class="container mx-auto px-4">
		<div class="grid gap-8 md:grid-cols-3">
			<div class="space-y-4">
				<Logo />
				<p class="text-sm text-gray-600">
					Revolutionizing organization management with seamless, efficient solutions for communities of all sizes.
				</p>
			</div>

			<div>
				<h3 class="mb-4 font-semibold">Product</h3>
				<ul class="space-y-2 text-sm text-gray-600">
					<li><a href="/#early-access" class="hover:text-gray-900">Early Access</a></li>
					<li><a href="/#services" class="hover:text-gray-900">Services</a></li>
					<li><a href="/#about" class="hover:text-gray-900">About</a></li>
				</ul>
			</div>

			<!-- <div>
				<h3 class="mb-4 font-semibold">Company</h3>
				<ul class="space-y-2 text-sm text-gray-600">
					<li><a href="/privacy" class="hover:text-gray-900">Privacy Policy</a></li>
					<li><a href="/terms" class="hover:text-gray-900">Terms of Service</a></li>
				</ul>
			</div> -->

			<div>
				<h3 class="mb-4 font-semibold">Get in touch</h3>
				<ul class="space-y-2 text-sm text-gray-600">
					<li>
						<a href="mailto:aoztanir25@gmail.com" class="hover:text-gray-900">Contact Us</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-8 pt-8 text-center">
			<p class="text-sm text-gray-600">&copy; {new Date().getFullYear()} Klubspace. All rights reserved.</p>
		</div>
	</div>
</footer>
