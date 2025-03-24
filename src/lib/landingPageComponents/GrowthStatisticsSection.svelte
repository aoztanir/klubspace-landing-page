<script>
	import { Badge } from "$lib/components/ui/badge";
	import { Users, School, Heart, TrendingUp } from "lucide-svelte";
	import * as Card from "$lib/components/ui/card";
</script>

<section class="my-16 pt-20 sm:my-20" id="impact">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-10 text-center">
			<Badge
				class="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
			>
				Our Impact
			</Badge>
			<h2 class="text-3xl font-black tracking-tight dark:text-white sm:text-6xl">Growing Across Campuses</h2>
			<p class="mx-auto mt-4 max-w-2xl text-base text-neutral-500 dark:text-neutral-400">
				KlubSpace is transforming how student organizations operate, starting at UNC and expanding nationwide.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
			<!-- Students Served Stat -->
			<Card.Root class="relative overflow-hidden rounded-[20px] transition-all duration-300 hover:shadow-lg">
				<Card.Content class="flex h-full flex-col p-6">
					<div class="absolute right-4 top-4 rounded-full bg-red-100 p-3 dark:bg-red-900/20">
						<Users class="h-6 w-6 text-red-500" />
					</div>
					<h3 class="mt-8 text-4xl font-bold dark:text-white">500+</h3>
					<p class="mt-2 text-base font-medium text-neutral-500 dark:text-neutral-400">Students Served</p>
					<div class="mt-auto pt-4">
						<div class="h-1 w-16 rounded bg-red-500"></div>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- UNC Satisfaction Stat -->
			<Card.Root class="relative overflow-hidden rounded-[20px] transition-all duration-300 hover:shadow-lg">
				<Card.Content class="flex h-full flex-col p-6">
					<div class="absolute right-4 top-4 rounded-full bg-red-100 p-3 dark:bg-red-900/20">
						<Heart class="h-6 w-6 text-red-500" />
					</div>
					<h3 class="mt-8 text-4xl font-bold dark:text-white">100%</h3>
					<p class="mt-2 text-base font-medium text-neutral-500 dark:text-neutral-400">Student Satisfaction</p>
					<div class="mt-auto pt-4">
						<div class="h-1 w-16 rounded bg-red-500"></div>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- Campus Expansion Stat -->
			<Card.Root class="relative overflow-hidden rounded-[20px] transition-all duration-300 hover:shadow-lg">
				<Card.Content class="flex h-full flex-col p-6">
					<div class="absolute right-4 top-4 rounded-full bg-red-100 p-3 dark:bg-red-900/20">
						<School class="h-6 w-6 text-red-500" />
					</div>
					<h3 class="mt-8 text-4xl font-bold dark:text-white">5+</h3>
					<p class="mt-2 text-base font-medium text-neutral-500 dark:text-neutral-400">Universities Expanding To</p>
					<div class="mt-auto pt-4">
						<div class="h-1 w-16 rounded bg-red-500"></div>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- Growth Rate Stat -->
			<!-- <Card.Root class="relative overflow-hidden rounded-[20px] transition-all duration-300 hover:shadow-lg">
				<Card.Content class="flex h-full flex-col p-6">
					<div class="absolute right-4 top-4 rounded-full bg-red-100 p-3 dark:bg-red-900/20">
						<TrendingUp class="h-6 w-6 text-red-500" />
					</div>
					<h3 class="mt-8 text-4xl font-bold dark:text-white">200%</h3>
					<p class="mt-2 text-base font-medium text-neutral-500 dark:text-neutral-400">Monthly Growth Rate</p>
					<div class="mt-auto pt-4">
						<div class="h-1 w-16 rounded bg-red-500"></div>
					</div>
				</Card.Content>
			</Card.Root> -->
		</div>
		<div class="mt-12 text-center">
			<p class="text-sm italic text-neutral-500 dark:text-neutral-400">
				Founded at UNC Chapel Hill and rapidly expanding to universities across the nation
			</p>
		</div>

		<div class="mt-16">
			<!-- <h3 class="mb-8 text-center text-2xl font-black dark:text-white">Schools</h3> -->
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-5">
				<!-- UNC -->
				<div class="flex flex-col items-center">
					<div class="relative">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/North_Carolina_Tar_Heels_logo.svg/1200px-North_Carolina_Tar_Heels_logo.svg.png"
							alt="UNC Logo"
							class="h-24 w-24 object-contain"
						/>
					</div>
					<p class="mt-4 font-bold">UNC Chapel Hill</p>
				</div>

				<!-- Duke -->
				<div class="flex flex-col items-center">
					<div class="relative">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_Athletics_logo.svg/1200px-Duke_Athletics_logo.svg.png"
							alt="Duke Logo"
							class="h-24 w-24 object-contain"
						/>
					</div>
					<p class="mt-4 font-bold">Duke University</p>
					<p class="text-xs font-medium text-neutral-500">* Coming Soon</p>
				</div>

				<!-- NC State -->
				<div class="flex flex-col items-center">
					<div class="relative">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/North_Carolina_State_University_Athletic_logo.svg/1200px-North_Carolina_State_University_Athletic_logo.svg.png"
							alt="NC State Logo"
							class="h-24 w-24 object-contain"
						/>
					</div>
					<p class="mt-4 font-bold">NC State University</p>
					<p class="text-xs font-medium text-neutral-500">* Coming Soon</p>
				</div>

				<!-- Berkeley -->
				<div class="flex flex-col items-center">
					<div class="relative">
						<img
							src="https://content.sportslogos.net/logos/30/630/full/california_golden_bears_logo_alternate_1978_sportslogosnet-1385.png"
							alt="UC Berkeley Logo"
							class="h-24 w-24 object-contain"
						/>
					</div>
					<p class="mt-4 font-bold">UC Berkeley</p>
					<p class="text-xs font-medium text-neutral-500">* Coming Soon</p>
				</div>

				<!-- UCLA -->
				<div class="flex flex-col items-center">
					<div class="relative">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/UCLA_Bruins_logo.svg/2560px-UCLA_Bruins_logo.svg.png"
							alt="UCLA Logo"
							class="h-24 w-24 object-contain"
						/>
					</div>
					<p class="mt-4 font-bold">UCLA</p>
					<p class="text-xs font-medium text-neutral-500">* Coming Soon</p>
				</div>
			</div>
		</div>
	</div>
</section>
