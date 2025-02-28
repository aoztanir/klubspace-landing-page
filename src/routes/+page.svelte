<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";
	import Header from "$lib/landingPageComponents/header.svelte";
	import * as Card from "$lib/components/ui/card";
	import * as Form from "$lib/components/ui/form";
	import { toast } from "svelte-sonner";
	import { Input } from "$lib/components/ui/input";
	import { fade, fly, scale } from "svelte/transition";
	import { spring } from "svelte/motion";

	import {
		ArrowRight,
		Calendar,
		ChatCircle,
		Circle,
		Users,
		Rocket,
		Heart,
		Lightbulb,
		Target,
		Buildings,
		Sparkle,
		Code,
		Briefcase,
	} from "phosphor-svelte";
	import { page } from "$app/stores";

	import "./global.css";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import Footer from "$lib/landingPageComponents/footer.svelte";
	import Logo from "$lib/Logo/Logo.svelte";

	import KlubSpaceAmbassadorSection from "$lib/landingPageComponents/KlubSpaceAmbassadorSection.svelte";

	let name = "";
	let email = "";
	let orgName = "";
	let visible = true;

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const { supabase } = $page.data;

		try {
			const { error } = await supabase.from("email_signups").insert([
				{
					name,
					email,
					organization_name: orgName,
				},
			]);

			if (error) throw error;

			name = "";
			email = "";
			orgName = "";

			toast.success("Thanks for signing up!", {
				description: "We'll be in touch soon.",
			});
		} catch (error) {
			console.error("Error:", error);
			alert("Something went wrong. Please try again.");
		}
	}
</script>

<main class=" relative mx-auto max-w-6xl px-5 py-8 sm:py-12">
	<!-- Hero Section with Early Access -->
	<section class=" mb-16 mt-8 sm:mb-20 sm:mt-16" id="early-access">
		{#if visible}
			<div class="mb-[50px] grid grid-cols-1 items-center gap-6 sm:mb-[75px] sm:gap-8 md:grid-cols-2">
				<div>
					<div class="flex flex-row items-center gap-2">
						<Logo size={80} />

						<h1 class="my-0 text-4xl font-black text-black dark:text-white sm:text-7xl md:text-5xl lg:text-6xl">lubSpace</h1>
					</div>
					<p class="font-100 mt-5 text-lg text-neutral-600 dark:text-neutral-400">
						Streamline your organization management with our custom-built platform.
					</p>
				</div>
				<div class="flex justify-center">
					<img
						alt="Organization Management Illustration"
						src="https://media.istockphoto.com/id/625741228/photo/exchanging-ideas-in-the-boardroom.jpg?s=612x612&w=0&k=20&c=_rF9PqS_sggjBVxKLtGk-Hv8_x4GrmWj3HX6VzqcqV8="
						class="hidden w-full max-w-md rounded-xl shadow-lg md:block"
					/>
				</div>
			</div>

			<div>
				<div class="relative">
					<div class="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-red-500/20 bg-red-50/5"></div>
					<Card.Root
						class="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-800 dark:bg-neutral-900 sm:p-8"
					>
						<div class="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
							<form class="space-y-4" on:submit={handleSubmit}>
								<div>
									<Input
										type="text"
										placeholder="Your Name"
										class="h-12 w-full rounded-xl bg-gray-50 text-base dark:bg-neutral-800 dark:text-white sm:h-14 sm:text-lg"
										bind:value={name}
										required
									/>
								</div>
								<div>
									<Input
										type="email"
										placeholder="Your Email"
										class="h-12 w-full rounded-xl bg-gray-50 text-base dark:bg-neutral-800 dark:text-white sm:h-14 sm:text-lg"
										bind:value={email}
										required
									/>
								</div>
								<div>
									<Input
										type="text"
										placeholder="Organization/Club Name"
										class="h-12 w-full rounded-xl bg-gray-50 text-base dark:bg-neutral-800 dark:text-white sm:h-14 sm:text-lg"
										bind:value={orgName}
										required
									/>
								</div>
								<Button
									type="submit"
									variant="default"
									class="w-full text-white transition-opacity hover:opacity-90 dark:bg-red-500 dark:text-white"
									>Request Early Access
									<ArrowRight class="ml-3 h-4 w-4" weight="bold" />
								</Button>
							</form>
							<div class="flex flex-col justify-center">
								<h2 class="mb-4 text-3xl font-black text-black dark:text-white sm:mb-6 sm:text-5xl">Get Early Access</h2>
								<p class="mb-6 text-base text-neutral-600 dark:text-neutral-400 sm:mb-8 sm:text-lg">
									Be among the first to experience Klubspace. Sign up for early access today!
								</p>
							</div>
						</div>
					</Card.Root>
				</div>
			</div>
		{/if}
	</section>

	<!-- Features Section -->
	<section class="relative mb-16 overflow-hidden py-16 sm:mb-20 sm:py-24" id="services">
		<div class="absolute left-0 top-0 -z-10 h-full w-full opacity-30">
			<div class="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-red-50 blur-3xl dark:bg-red-900/20"></div>
			<div class="absolute right-[20%] top-[30%] h-96 w-96 rounded-full bg-red-50 blur-3xl dark:bg-red-900/20"></div>
		</div>

		{#if visible}
			<div class="mb-16 text-center sm:mb-20">
				<Badge
					class="mb-7 inline-block rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
					>Our Services</Badge
				>
				<h2
					class="mx-auto max-w-3xl bg-clip-text text-4xl font-black dark:bg-gradient-to-r dark:from-red-400 dark:from-red-500 dark:to-red-600 dark:to-red-700 dark:text-transparent sm:text-7xl"
				>
					Powerful Features for Your Community
				</h2>
			</div>

			<div class="grid h-full gap-6 sm:gap-8 md:grid-cols-3">
				<div class="h-full transform transition-all duration-300 hover:translate-y-[-4px]">
					<Card.Root class="h-full rounded-[25px] bg-white shadow-lg">
						<Card.Content class="flex h-full flex-col p-6 sm:p-8">
							<div class="mb-6 flex items-center gap-3">
								<div>
									<Users class="h-12 w-12 text-red-500 sm:h-14 sm:w-14" weight="fill" />
								</div>
								<h3 class="text-xl font-bold text-black dark:text-white sm:text-2xl">Organization Management</h3>
							</div>
							<ul class="flex-grow space-y-3">
								<li class="flex items-center gap-2">
									<Circle class="h-2 w-2 text-gray-400" weight="fill" />
									<span class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">Streamlined member management and roles</span>
								</li>
								<li class="flex items-center gap-2">
									<Circle class="h-2 w-2 text-gray-400" weight="fill" />
									<span class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">Resource allocation and tracking</span>
								</li>
								<li class="flex items-center gap-2">
									<Circle class="h-2 w-2 text-gray-400" weight="fill" />
									<span class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">Automated organizational workflows</span>
								</li>
							</ul>
						</Card.Content>
					</Card.Root>
				</div>

				<div class="h-full transform transition-all duration-300 hover:translate-y-[-4px]">
					<Card.Root class="h-full rounded-[25px] bg-white shadow-lg">
						<Card.Content class="flex h-full flex-col p-6 sm:p-8">
							<div class="mb-6 flex items-center gap-3">
								<div>
									<ChatCircle class="h-12 w-12 text-red-500 sm:h-14 sm:w-14" weight="fill" />
								</div>
								<h3 class="text-xl font-bold text-black dark:text-white sm:text-2xl">Member Communication</h3>
							</div>
							<ul class="flex-grow space-y-3">
								<li class="flex items-center gap-2">
									<Circle class="h-2 w-2 text-gray-400" weight="fill" />
									<span class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">Group messaging and announcements</span>
								</li>
								<li class="flex items-center gap-2">
									<Circle class="h-2 w-2 text-gray-400" weight="fill" />
									<span class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">File sharing and collaboration</span>
								</li>
								<li class="flex items-center gap-2">
									<Circle class="h-2 w-2 text-gray-400" weight="fill" />
									<span class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">Discussion forums and threads</span>
								</li>
							</ul>
						</Card.Content>
					</Card.Root>
				</div>

				<div class="h-full transform transition-all duration-300 hover:translate-y-[-4px]">
					<Card.Root class="h-full rounded-[25px] bg-white shadow-lg">
						<Card.Content class="flex h-full flex-col p-6 sm:p-8">
							<div class="mb-6 flex items-center gap-3">
								<div>
									<Calendar class="h-12 w-12 text-red-500 sm:h-14 sm:w-14" weight="fill" />
								</div>
								<h3 class="text-xl font-bold text-black dark:text-white sm:text-2xl">Event Planning</h3>
							</div>
							<ul class="flex-grow space-y-3">
								<li class="flex items-center gap-2">
									<Circle class="h-2 w-2 text-gray-400" weight="fill" />
									<span class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">Intuitive event creation and scheduling</span>
								</li>
								<li class="flex items-center gap-2">
									<Circle class="h-2 w-2 text-gray-400" weight="fill" />
									<span class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">Attendee management and RSVPs</span>
								</li>
								<li class="flex items-center gap-2">
									<Circle class="h-2 w-2 text-gray-400" weight="fill" />
									<span class="text-sm text-gray-600 dark:text-gray-300 sm:text-base">Real-time updates and notifications</span>
								</li>
							</ul>
						</Card.Content>
					</Card.Root>
				</div>
			</div>
		{/if}
	</section>

	<!-- About Section -->
	<section id="about" class="relative mb-12 overflow-hidden py-16 sm:mb-16 sm:py-24">
		<div class="absolute left-0 top-0 -z-10 h-full w-full opacity-30">
			<div class="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-red-50 blur-3xl dark:bg-red-900/20"></div>
			<div class="absolute right-[20%] top-[30%] h-96 w-96 rounded-full bg-red-50 blur-3xl dark:bg-red-900/20"></div>
		</div>

		{#if visible}
			<div class="mb-16 text-center sm:mb-20">
				<Badge
					class="mb-4 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
					>About Us</Badge
				>
				<h2
					class="mx-auto bg-gradient-to-r bg-clip-text text-4xl font-black leading-tight dark:from-red-400 dark:from-red-500 dark:to-red-600 dark:to-red-700 dark:text-transparent sm:text-7xl sm:leading-tight"
				>
					Transforming Community Management
				</h2>
			</div>

			<div class="z-100 mx-4 mb-16 grid gap-8 sm:mb-24 sm:gap-12 md:grid-cols-2">
				<div class="relative h-full">
					<div
						class=" z-100 absolute -left-4 -top-4 h-full w-full rounded-3xl border border-red-500/20 bg-red-50/5"
						style="right: -1rem"
					></div>
					<div
						class="relative h-full space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-800 dark:bg-neutral-900 sm:space-y-6 sm:p-8"
					>
						<div class="inline-flex rounded-xl bg-red-50 p-3 dark:bg-red-500/10">
							<Target weight="fill" size={32} class="text-red-500" />
						</div>
						<h3 class="text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl">Our Mission</h3>
						<p class="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
							Revolutionizing organization management with seamless, efficient solutions for communities of all sizes.
						</p>
						<div class="flex flex-wrap gap-2">
							<Badge class="rounded-lg bg-red-50 px-4 py-1 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-400">
								<p class="text-sm">Innovative</p>
							</Badge>
							<Badge class="rounded-lg bg-red-50 px-4 py-1 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-400">
								<p class="text-sm">Efficient</p>
							</Badge>
							<Badge class="rounded-lg bg-red-50 px-4 py-1 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-400">
								<p class="text-sm">Scalable</p>
							</Badge>
						</div>
					</div>
				</div>

				<div class="relative h-full">
					<div class="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-red-500/20 bg-red-50/5"></div>
					<div
						class="relative h-full space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-800 dark:bg-neutral-900 sm:space-y-6 sm:p-8"
					>
						<div class="inline-flex rounded-xl bg-red-50 p-3 dark:bg-red-500/10">
							<Buildings weight="fill" size={32} class="text-red-500" />
						</div>
						<h3 class="text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl">Our Story</h3>
						<p class="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
							Built by community leaders for community leaders, combining powerful features with intuitive design.
						</p>
						<div class="flex flex-wrap gap-2">
							<Badge class="rounded-lg bg-red-50 px-4 py-1 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-400">
								<p class="text-sm">Experienced</p>
							</Badge>
							<Badge class="rounded-lg bg-red-50 px-4 py-1 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-400">
								<p class="text-sm">User-Focused</p>
							</Badge>
							<Badge class="rounded-lg bg-red-50 px-4 py-1 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-400">
								<p class="text-sm">Passionate</p>
							</Badge>
						</div>
					</div>
				</div>
			</div>

			<div class="relative">
				<div
					class="absolute inset-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800"
				></div>
				<div class="grid gap-6 py-12 sm:gap-8 sm:py-16 md:grid-cols-3">
					<Card.Root
						class="relative flex h-full items-center gap-4 rounded-[20px]  border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 sm:p-6"
					>
						<div
							class="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-red-500 to-red-600 opacity-0 transition duration-300 hover:opacity-5"
						></div>
						<Rocket weight="fill" size={40} class="text-red-500" />
						<div>
							<h4 class="text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">Innovation</h4>
							<p class="text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">Always evolving to meet your needs</p>
						</div>
					</Card.Root>

					<Card.Root
						class="relative flex h-full items-center gap-4 rounded-[20px]  border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 sm:p-6"
					>
						<div
							class="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-red-500 to-red-600 opacity-0 transition duration-300 hover:opacity-5"
						></div>
						<Heart weight="fill" size={40} class="text-red-500" />
						<div>
							<h4 class="text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">Community</h4>
							<p class="text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">Fostering meaningful connections</p>
						</div>
					</Card.Root>

					<Card.Root
						class="relative flex h-full items-center gap-4 rounded-[20px]  border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 sm:p-6"
					>
						<div
							class="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-red-500 to-red-600 opacity-0 transition duration-300 hover:opacity-5"
						></div>
						<Sparkle weight="fill" size={40} class="text-red-500" />
						<div>
							<h4 class="text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">Simplicity</h4>
							<p class="text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">Making the complex feel simple</p>
						</div>
					</Card.Root>
				</div>

				<div
					class="absolute bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800"
				></div>
			</div>
		{/if}
	</section>

	<!-- KlubSpace Ambassador Program Section -->
	<KlubSpaceAmbassadorSection />

	<!-- Meet the Founders Section -->
	<section class="relative mb-16 overflow-hidden py-16 sm:mb-20 sm:py-24">
		<div class="absolute left-0 top-0 -z-10 h-full w-full opacity-30">
			<div class="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-red-50 blur-3xl dark:bg-red-900/20"></div>
			<div class="absolute right-[20%] top-[30%] h-96 w-96 rounded-full bg-red-50 blur-3xl dark:bg-red-900/20"></div>
		</div>

		<div class=" mx-auto">
			{#if visible}
				<div class="mb-16 text-center sm:mb-20">
					<Badge
						class="mb-7 inline-block rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
						>Our Team</Badge
					>
					<h2
						class="mx-auto max-w-3xl bg-clip-text text-4xl font-black dark:bg-gradient-to-r dark:from-red-400 dark:from-red-500 dark:to-red-600 dark:to-red-700 dark:text-transparent sm:text-7xl"
					>
						Meet the Founders
					</h2>
				</div>

				<div class="grid justify-items-center gap-6 sm:gap-8 md:grid-cols-2">
					<div class="mx-auto h-full w-full transform transition-all duration-300 hover:translate-y-[-4px]">
						<Card.Root class="mx-auto h-full w-full max-w-[400px] rounded-[20px] bg-white shadow-lg">
							<div class="relative overflow-hidden">
								<img
									src="/aryah_headshot.jpg"
									alt="Aryah Oztanir"
									class="aspect-square h-[300px] w-full rounded-t-[20px] object-cover sm:h-[400px]"
								/>
								<div
									class="absolute left-0 right-0 top-0 rounded-t-[20px] bg-gradient-to-b from-black/50 to-transparent p-4 text-white sm:p-6"
								>
									<h3 class="text-xl font-black text-white sm:text-2xl">Aryah Oztanir</h3>
									<div class="mt-2 flex items-center gap-2">
										<Briefcase weight="fill" size={20} class="text-white" />
										<p class="sm:text-md text-sm text-white">Business Lead</p>
									</div>
								</div>
							</div>
							<Card.Content class="pt-2">
								<div class="flex items-start gap-4">
									<div class="flex-1 space-y-3">
										<Badge class="rounded-md bg-red-500 px-2.5 py-0.5 text-xs font-medium text-white">
											<p class="text-xs">Business Lead</p>
										</Badge>
										<Badge
											class="rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-white"
										>
											<p class="text-xs">Full Stack Developer</p>
										</Badge>
										<p class="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
											Aryah is a passionate entrepreneur with a vision to revolutionize how organizations operate. With extensive
											experience in software development and a deep understanding of community needs, Aryah brings technical expertise
											and innovative solutions to build a new and effortless form of club management.
										</p>

										<div class="flex gap-4">
											<a
												href="https://linkedin.com/in/aryah-oztanir"
												class="transform transition-transform hover:scale-110"
												target="_blank"
											>
												<svg class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
													/>
												</svg>
											</a>
											<a href="https://aryah.xyz" class="transform transition-transform hover:scale-110" target="_blank">
												<svg class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</Card.Content>
						</Card.Root>
					</div>

					<div class="h-full w-full transform transition-all duration-300 hover:translate-y-[-4px]">
						<Card.Root class="mx-auto h-full w-full max-w-[400px] rounded-[20px] bg-white shadow-lg">
							<div class="relative overflow-hidden">
								<img
									src="/thomas_headshot.png"
									alt="Thomas Bland"
									class="aspect-square h-[300px] w-full rounded-t-[20px] object-cover sm:h-[400px]"
								/>
								<div
									class="absolute left-0 right-0 top-0 rounded-t-[20px] bg-gradient-to-b from-black/50 to-transparent p-4 text-white sm:p-6"
								>
									<h3 class="text-xl font-black text-white sm:text-2xl">Thomas Bland</h3>
									<div class="mt-2 flex items-center gap-2">
										<Code weight="fill" size={20} class="text-white" />
										<p class="sm:text-md text-sm text-white">Technical Lead</p>
									</div>
								</div>
							</div>
							<Card.Content class="pt-2">
								<div class="flex items-start gap-4">
									<div class="flex-1 space-y-3">
										<Badge class="rounded-md bg-red-500 px-2.5 py-0.5 text-xs font-medium text-white">
											<p class="text-xs">Technical Lead</p>
										</Badge>
										<Badge
											class="rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-white"
										>
											<p class="text-xs">Software Architect</p>
										</Badge>
										<p class="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
											Thomas is a highly skilled software architect and developer with experience building production grade apps for
											real clients. After founding AI@UNC, UNC's biggest CS club, he realized the need for a more efficient way to
											manage clubs and organizations. With a proven track record in building scalable systems, he brings deep technical
											knowledge and strategic thinking to the table.
										</p>

										<div class="flex gap-4">
											<a href="https://linkedin.com" class="transform transition-transform hover:scale-110" target="_blank">
												<svg class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
													/>
												</svg>
											</a>
											<a href="https://example.com" class="transform transition-transform hover:scale-110" target="_blank">
												<svg class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
													<path
														d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>
							</Card.Content>
						</Card.Root>
					</div>
				</div>
			{/if}
		</div>
	</section>
</main>
