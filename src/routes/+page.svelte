<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";
	import Header from "$lib/landingPageComponents/header.svelte";
	import * as Card from "$lib/components/ui/card";
	import * as Form from "$lib/components/ui/form";
	import { toast } from "svelte-sonner";
	import { Input } from "$lib/components/ui/input";

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

	let name = "";
	let email = "";
	let orgName = "";

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

			// Reset form
			name = "";
			email = "";
			orgName = "";

			// alert("Thanks for signing up! We'll be in touch soon.");
			toast.success("Thanks for signing up!", {
				description: "We'll be in touch soon.",
			});
		} catch (error) {
			console.error("Error:", error);
			alert("Something went wrong. Please try again.");
		}
	}
</script>

<Header />

<main class="container mx-auto max-w-6xl px-4 py-12">
	<!-- Hero Section with Early Access -->
	<section class="mb-20 mt-16">
		<div class="mb-[75px] grid grid-cols-1 items-center gap-8 md:grid-cols-2">
			<div>
				<div class="flex flex-row items-center gap-2">
					<img src="/klubSpaceLogo.png" alt="Klubspace Logo" class="h-24 w-24" />
					<h1 class="font-extraextrabold my-0 text-7xl font-black">lubSpace</h1>
				</div>
				<p class="mt-2 text-xl">The go-to platform for managing your organization</p>
			</div>
			<div class="flex justify-center">
				<img
					src="https://media.istockphoto.com/id/1346226355/photo/university-teacher-talking-to-her-asian-female-student-at-campus.jpg?s=612x612&w=0&k=20&c=478mNCgBJpVxaU-ffJedWgSCWA5IgMcglJQObD2mQ0g="
					alt="Organization Management Illustration"
					class="w-full max-w-md rounded-xl shadow-xl"
				/>
			</div>
		</div>

		<div class="mx-auto rounded-xl" id="early-access">
			<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
				<form class="space-y-4" on:submit={handleSubmit}>
					<div>
						<Input type="text" placeholder="Your Name" class="h-14 w-full rounded-xl text-lg" bind:value={name} required />
					</div>
					<div>
						<Input type="email" placeholder="Your Email" class="h-14 w-full rounded-xl text-lg" bind:value={email} required />
					</div>
					<div>
						<Input
							type="text"
							placeholder="Organization/Club Name"
							class="h-14 w-full rounded-xl text-lg"
							bind:value={orgName}
							required
						/>
					</div>
					<Button type="submit" variant="default" class="w-full"
						>Request Early Access
						<ArrowRight class="ml-3 h-4 w-4" weight="bold" />
					</Button>
				</form>
				<div class="flex flex-col justify-center">
					<h2 class="mb-6 text-5xl font-black font-black">Get Early Access</h2>
					<p class="mb-8 text-lg">Be among the first to experience Klubspace. Sign up for early access today!</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="mb-10 grid gap-8 md:grid-cols-3" id="services">
		<Card.Root class="scale-on-hover rounded-[20px] shadow-xl">
			<Card.Content class="p-8">
				<div class="mb-6 flex items-center gap-3">
					<Users class="h-50 w-50 text-blue-600" size={60} weight="fill" />
					<h3 class="text-2xl font-bold">Organization Management</h3>
				</div>
				<ul class="space-y-3">
					<li class="flex items-center gap-2">
						<Circle class="h-2 w-2 text-blue-600" weight="fill" />
						<span>Streamlined member management and roles</span>
					</li>
					<li class="flex items-center gap-2">
						<Circle class="h-2 w-2 text-blue-600" weight="fill" />
						<span>Resource allocation and tracking</span>
					</li>
					<li class="flex items-center gap-2">
						<Circle class="h-2 w-2 text-blue-600" weight="fill" />
						<span>Automated organizational workflows</span>
					</li>
				</ul>
			</Card.Content>
		</Card.Root>

		<Card.Root class="scale-on-hover rounded-[20px] shadow-lg ">
			<Card.Content class="p-8">
				<div class="mb-6 flex items-center gap-3">
					<ChatCircle class="h-50 w-50 text-red-500" size={60} weight="fill" />
					<h3 class="text-2xl font-bold">Member Communication</h3>
				</div>
				<ul class="space-y-3">
					<li class="flex items-center gap-2">
						<Circle class="h-2 w-2 text-red-500" weight="fill" />
						<span>Group messaging and announcements</span>
					</li>
					<li class="flex items-center gap-2">
						<Circle class="h-2 w-2 text-red-500" weight="fill" />
						<span>File sharing and collaboration</span>
					</li>
					<li class="flex items-center gap-2">
						<Circle class="h-2 w-2 text-red-500" weight="fill" />
						<span>Discussion forums and threads</span>
					</li>
				</ul>
			</Card.Content>
		</Card.Root>
		<Card.Root class="scale-on-hover  rounded-[20px] shadow-lg  ">
			<Card.Content class="p-8">
				<div class="mb-6 flex items-center gap-3">
					<Calendar class="h-50 w-50 text-teal-500" size={60} weight="fill" />
					<h3 class="text-2xl font-bold">Event Planning</h3>
				</div>
				<ul class="space-y-3">
					<li class="flex items-center gap-2">
						<Circle class="h-2 w-2 text-teal-500" weight="fill" />
						<span>Intuitive event creation and scheduling</span>
					</li>
					<li class="flex items-center gap-2">
						<Circle class="h-2 w-2 text-teal-500" weight="fill" />
						<span>Attendee management and RSVPs</span>
					</li>
					<li class="flex items-center gap-2">
						<Circle class="h-2 w-2 text-teal-500" weight="fill" />
						<span>Real-time updates and notifications</span>
					</li>
				</ul>
			</Card.Content>
		</Card.Root>
	</section>

	<!-- CTA Section -->
	<!-- <section class="rounded-xl p-12 text-center">
		<h2 class="mb-6 text-3xl font-bold">Ready to Transform Your Organization?</h2>
		<p class="mb-8 text-lg text-gray-600">Join thousands of organizations already using Klubspace</p>
		<Button variant="default" size="lg" href="/#early-access">Sign Up Now</Button>
	</section> -->

	<!-- About Section -->
	<section id="about" class="mb-16 py-16">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-6xl font-black">About</h2>
			<div class="grid gap-8 md:grid-cols-2">
				<div class="flex flex-col items-center text-center">
					<Target weight="fill" size={64} class="mb-4 text-blue-600" />
					<h3 class="mb-3 text-2xl font-semibold">Our Mission</h3>
					<p class="">Revolutionizing organization management with seamless, efficient solutions for communities of all sizes.</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<Buildings weight="fill" size={64} class="mb-4 text-purple-600" />
					<h3 class="mb-3 text-2xl font-semibold">Our Story</h3>
					<p class="">Built by community leaders for community leaders, combining powerful features with intuitive design.</p>
				</div>
			</div>
			<div class="mt-12 grid gap-6 md:grid-cols-3">
				<div class="flex flex-col items-center text-center">
					<Rocket weight="fill" size={48} class="mb-3 text-red-500" />
					<h4 class="mb-2 text-xl font-semibold">Innovation</h4>
					<p class="">Always evolving to meet your needs</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<Heart weight="fill" size={48} class="mb-3 text-pink-500" />
					<h4 class="mb-2 text-xl font-semibold">Community</h4>
					<p class="">Fostering meaningful connections</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<Sparkle weight="fill" size={48} class="mb-3 text-yellow-500" />
					<h4 class="mb-2 text-xl font-semibold">Simplicity</h4>
					<p class="">Making the complex feel simple</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Meet the Founders Section -->
	<section class="py-24">
		<div class="container mx-auto px-4">
			<h2 class="mb-16 text-center text-5xl font-black">Meet the Founders</h2>
			<div class="grid justify-items-center gap-8 md:grid-cols-2">
				<Card.Root class="scale-on-hover max-w-[400px] rounded-[20px] shadow-lg ">
					<div class="relative">
						<img src="/aryah_headshot.jpg" alt="Aryah Oztanir" class="aspect-square h-[400px] w-full rounded-t-[20px] object-cover" />
						<div class="absolute left-0 right-0 top-0 p-6 text-white">
							<h3 class="text-2xl font-black">Aryah Oztanir</h3>
							<div class="mt-2 flex items-center gap-2">
								<Briefcase weight="fill" size={20} class="text-white" />
								<p class="text-md">Business Lead</p>
							</div>
						</div>
					</div>
					<Card.Content class="pt-2">
						<div class="flex items-start gap-4">
							<div class="flex-1 space-y-3">
								<Badge class="rounded-md">
									<p class="text-xs">Business Lead</p>
								</Badge>
								<Badge class="rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 hover:bg-purple-200">
									<p class="text-xs">Full Stack Developer</p>
								</Badge>
								<p class="text-xs leading-relaxed">
									Aryah is a passionate entrepreneur with a vision to revolutionize how organizations operate. With extensive
									experience in software development and a deep understanding of community needs, Aryah brings technical expertise and
									innovative solutions to help organizations thrive in the digital age.
								</p>

								<div class="flex gap-4">
									<a href="https://linkedin.com/in/aryah-oztanir" class="" target="_blank">
										<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
											/>
										</svg>
									</a>
									<a href="https://aryah.xyz" class="" target="_blank">
										<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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

				<Card.Root class="scale-on-hover max-w-[400px] rounded-[20px] shadow-lg">
					<div class="relative">
						<img
							src="https://www.cityheadshots.com/uploads/5/1/2/1/5121840/published/mjb-2089.jpg?1663614946"
							alt="Thomas Bland"
							class="aspect-square h-[400px] w-full rounded-t-[20px] object-cover"
						/>
						<div class="absolute left-0 right-0 top-0 p-6 text-white">
							<h3 class="text-2xl font-black">Second Founder</h3>
							<div class="mt-2 flex items-center gap-2">
								<Code weight="fill" size={20} class="text-white" />
								<p class="text-md">Technical Lead</p>
							</div>
						</div>
					</div>
					<Card.Content class="h-full pt-2">
						<div class="flex h-full items-start gap-4">
							<div class="h-full space-y-3">
								<Badge class="rounded-md">
									<p class="text-xs">Technical Lead</p>
								</Badge>
								<Badge class="rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 hover:bg-purple-200">
									<p class="text-xs">Software Architect</p>
								</Badge>
								<p class="text-xs leading-relaxed">
									An experienced technical leader with a proven track record in building scalable systems. Combining deep technical
									knowledge with strategic thinking, they drive the technical vision and ensure robust, future-proof solutions for our
									platform.
								</p>

								<div class="mb-0 mt-auto flex gap-4">
									<a href="https://linkedin.com" class="" target="_blank">
										<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
											/>
										</svg>
									</a>
									<a href="https://example.com" class="" target="_blank">
										<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
	</section>
</main>

<Footer />
