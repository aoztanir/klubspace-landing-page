<script>
	import { Badge } from "$lib/components/ui/badge";
	import { Download, TrendingUp, Target, Users, DollarSign } from "lucide-svelte";
	import * as Card from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
</script>

<section class="my-16 pt-20 sm:my-20" id="pitch">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 text-center">
			<Badge
				class="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
			>
				For Investors
			</Badge>
			<h2
				class="mx-auto bg-gradient-to-r bg-clip-text text-4xl font-black leading-tight dark:from-red-400 dark:from-red-500 dark:to-red-600 dark:to-red-700 dark:text-transparent sm:text-7xl sm:leading-tight"
			>
				Join Our Growth Journey
			</h2>
			<p class="mx-auto mb-7 mt-4 max-w-2xl text-base text-neutral-500 dark:text-neutral-400">
				KlubSpace is revolutionizing campus club management with a scalable SaaS platform poised for nationwide expansion.
			</p>

			<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<!-- Market Opportunity Card -->
				<Card.Root class="relative overflow-hidden rounded-[20px] transition-all duration-300 hover:shadow-lg">
					<Card.Content class="flex h-full flex-col p-6">
						<div class="absolute right-4 top-4 rounded-full bg-red-100 p-3 dark:bg-red-900/20">
							<Target class="h-6 w-6 text-red-500" />
						</div>
						<h3 class="mt-8 text-2xl font-bold dark:text-white">Market Opportunity</h3>
						<p class="mt-2 text-base text-neutral-500 dark:text-neutral-400">
							Targeting 20M+ college students across 4,000+ US institutions managing over 600,000 student organizations.
						</p>
						<div class="mt-auto pt-4">
							<div class="h-1 w-16 rounded bg-red-500"></div>
						</div>
					</Card.Content>
				</Card.Root>

				<!-- Traction Card -->
				<Card.Root class="relative overflow-hidden rounded-[20px] transition-all duration-300 hover:shadow-lg">
					<Card.Content class="flex h-full flex-col p-6">
						<div class="absolute right-4 top-4 rounded-full bg-red-100 p-3 dark:bg-red-900/20">
							<TrendingUp class="h-6 w-6 text-red-500" />
						</div>
						<h3 class="mt-8 text-2xl font-bold dark:text-white">Proven Traction</h3>
						<p class="mt-2 text-base text-neutral-500 dark:text-neutral-400">
							500+ active users at UNC with 100% satisfaction rate and expanding to 5+ universities in the next phase.
						</p>
						<div class="mt-auto pt-4">
							<div class="h-1 w-16 rounded bg-red-500"></div>
						</div>
					</Card.Content>
				</Card.Root>

				<!-- Revenue Model Card -->
				<Card.Root class="relative overflow-hidden rounded-[20px] transition-all duration-300 hover:shadow-lg">
					<Card.Content class="flex h-full flex-col p-6">
						<div class="absolute right-4 top-4 rounded-full bg-red-100 p-3 dark:bg-red-900/20">
							<DollarSign class="h-6 w-6 text-red-500" />
						</div>
						<h3 class="mt-8 text-2xl font-bold dark:text-white">Revenue Model</h3>
						<p class="mt-2 text-base text-neutral-500 dark:text-neutral-400">
							Subscription-based SaaS with pricing for clubs and potential institutional partnerships for campus-wide adoption.
						</p>
						<div class="mt-auto pt-4">
							<div class="h-1 w-16 rounded bg-red-500"></div>
						</div>
					</Card.Content>
				</Card.Root>
			</div>

			<div class="rounded-3xl bg-neutral-50 p-8 dark:bg-neutral-900 md:p-12">
				<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
					<div>
						<h3 class="mb-4 text-2xl font-bold dark:text-white md:text-3xl">Our Investment Opportunity</h3>
						<p class="mb-6 text-neutral-600 dark:text-neutral-300">
							We're seeking strategic partners to fuel our expansion across campuses nationwide. Our team combines technical expertise
							with deep understanding of the student organization ecosystem.
						</p>
						<ul class="mb-8 space-y-3">
							<li class="flex items-start">
								<div class="mr-3 mt-1 flex-shrink-0 text-red-500">
									<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<p class="text-neutral-600 dark:text-neutral-300">Scalable SaaS platform with proven product-market fit</p>
							</li>
							<li class="flex items-start">
								<div class="mr-3 mt-1 flex-shrink-0 text-red-500">
									<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<p class="text-neutral-600 dark:text-neutral-300">Clear expansion roadmap to 50+ universities by 2025</p>
							</li>
							<li class="flex items-start">
								<div class="mr-3 mt-1 flex-shrink-0 text-red-500">
									<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<p class="text-neutral-600 dark:text-neutral-300">Multiple revenue streams with high retention potential</p>
							</li>
						</ul>
						<Button class="flex items-center gap-2" href="/klubspace_pitch_deck.pdf" target="_blank">
							<Download class="h-4 w-4" />
							See Pitch Deck
						</Button>
					</div>
					<div class="hidden md:block">
						<div class="relative h-80 w-full rounded-xl bg-white p-4 shadow-lg dark:bg-neutral-900">
							<div class="absolute bottom-12 left-12 right-12 top-12 flex items-end">
								<!-- Y-axis label -->
								<div class="absolute -left-10 bottom-0 top-0 flex items-center">
									<span class="rotate-270 text-sm text-neutral-500 dark:text-neutral-400">Growth</span>
								</div>

								<!-- X-axis label -->
								<div class="absolute -bottom-8 left-0 right-0 text-center">
									<span class="text-sm text-neutral-500 dark:text-neutral-400">Time</span>
								</div>

								<!-- Grid lines -->
								<div class="absolute inset-0 grid grid-cols-4 grid-rows-4">
									{#each Array(5) as _, i}
										<div class="border-b border-neutral-200 dark:border-neutral-700"></div>
									{/each}
									{#each Array(5) as _, i}
										<div class="border-l border-neutral-200 dark:border-neutral-700"></div>
									{/each}
								</div>

								<!-- Animated hockey stick chart with smoother, thicker, rounded lines -->
								<div class="relative h-full w-full">
									<svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
										<path
											d="M0,100 C20,98 40,95 60,90 S75,80 80,70 S85,55 90,40 S95,15 100,0"
											fill="none"
											stroke="url(#gradient)"
											stroke-width="5"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="path-animation"
										/>
										<defs>
											<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
												<stop offset="0%" stop-color="#ef4444" />
												<stop offset="100%" stop-color="#f97316" />
											</linearGradient>
										</defs>
									</svg>

									<!-- Animated dot at the end -->
									<div class="absolute right-0 top-0 h-4 w-4 animate-pulse rounded-full bg-red-500"></div>
								</div>
							</div>

							<!-- Chart labels -->
							<div class="absolute bottom-2 left-12 text-sm font-medium text-neutral-700 dark:text-neutral-300">Current</div>
							<div class="absolute bottom-2 right-12 text-sm font-medium text-red-500">Projected</div>
						</div>

						<style>
							.rotate-270 {
								transform: rotate(-90deg);
							}

							.path-animation {
								stroke-dasharray: 1000;
								stroke-dashoffset: 1000;
								animation: dash 3s ease-in-out forwards infinite;
							}

							@keyframes dash {
								0% {
									stroke-dashoffset: 1000;
								}
								70% {
									stroke-dashoffset: 0;
								}
								100% {
									stroke-dashoffset: 0;
								}
							}
						</style>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
