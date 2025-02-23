<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";
	import Header from "$lib/landingPageComponents/header.svelte";
	import * as Card from "$lib/components/ui/card";
	import * as Form from "$lib/components/ui/form";
	import { toast } from "svelte-sonner";
	import { Input } from "$lib/components/ui/input";
	import { ArrowRight, Calendar, ChatCircle, Circle, Users } from "phosphor-svelte";
	import { page } from "$app/stores";

	import "./global.css";

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
	<section class="mb-16">
		<div class="mb-[75px] text-center">
			<div class="mx-auto mt-[75px] flex flex-row items-center justify-center gap-2">
				<img src="/klubSpaceLogo.png" alt="Klubspace Logo" class="h-24 w-24" />
				<h1 class="my-0 text-7xl font-extrabold">lubSpace</h1>
			</div>
			<p class="mb-8 mt-2 text-xl text-gray-600">The go-to platform for managing your organization</p>
		</div>

		<div class="mx-auto rounded-xl">
			<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
				<div class="flex flex-col justify-center">
					<h2 class="mb-6 text-5xl font-bold font-extrabold">Get Early Access</h2>
					<p class="mb-8 text-lg text-gray-600">Be among the first to experience Klubspace. Sign up for early access today!</p>
				</div>

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
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="mb-16 grid gap-8 md:grid-cols-3">
		<Card.Root class="scale-on-hover rounded-[20px] shadow-lg transition-shadow hover:shadow-xl">
			<Card.Content class="p-8">
				<div class="mb-6 flex items-center gap-3">
					<Users class="h-50 w-50 text-blue-600" size={60} weight="fill" />
					<h3 class="text-2xl font-extrabold">Organization Management</h3>
				</div>
				<ul class="space-y-3 text-gray-600">
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

		<Card.Root class="scale-on-hover rounded-[20px] shadow-lg transition-shadow hover:shadow-xl">
			<Card.Content class="p-8">
				<div class="mb-6 flex items-center gap-3">
					<ChatCircle class="h-50 w-50 text-red-500" size={60} weight="fill" />
					<h3 class="text-2xl font-extrabold">Member Communication</h3>
				</div>
				<ul class="space-y-3 text-gray-600">
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
		<Card.Root class="scale-on-hover rounded-[20px] shadow-lg transition-shadow hover:shadow-xl">
			<Card.Content class="p-8">
				<div class="mb-6 flex items-center gap-3">
					<Calendar class="h-50 w-50 text-teal-500" size={60} weight="fill" />
					<h3 class="text-2xl font-extrabold">Event Planning</h3>
				</div>
				<ul class="space-y-3 text-gray-600">
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
	<section class="rounded-xl p-12 text-center">
		<h2 class="mb-6 text-3xl font-bold">Ready to Transform Your Organization?</h2>
		<p class="mb-8 text-lg text-gray-600">Join thousands of organizations already using Klubspace</p>
		<Button variant="default" size="lg">Sign Up Now</Button>
	</section>
</main>

<footer class=" mt-16 py-8">
	<div class="container mx-auto px-4 text-center text-gray-600">
		<p>&copy; 2024 Klubspace. All rights reserved.</p>
	</div>
</footer>
