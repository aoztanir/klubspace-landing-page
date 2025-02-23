<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Card } from "$lib/components/ui/card";
	import { onMount } from "svelte";
	import { getContext } from "svelte";
	import { GoogleLogo } from "phosphor-svelte";

	let supabase: any;

	onMount(() => {
		const layoutContext = getContext<{ data: { supabase: any } }>("layout");
		supabase = layoutContext.data.supabase;
	});

	async function loginWithGoogle() {
		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: {
					redirectTo: `http://localhost:5173/home`,
				},
			});
			if (error) {
				console.error("Error during login:", error.message);
			} else {
				console.log("Login successful, redirecting...");
			}
		} catch (err) {
			console.error("Unexpected error during login:", err);
		}
	}
</script>

<div class="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
	<div class="relative flex h-full flex-col bg-muted p-10 text-white lg:flex">
		<div
			class="absolute inset-0 bg-cover"
			style="
				background-image:
					url(https://plus.unsplash.com/premium_photo-1663047248264-24aa25b1433e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwbGF1Z2hpbmd8ZW58MHx8MHx8fDA%3D);"
		/>
		<div class="relative z-20 flex items-center text-5xl font-extrabold">KlubSpace</div>
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2">
				<p class="text-lg">
					&ldquo;Klubspace has revolutionized the way we manage our club activities. The ease of tracking attendance and managing
					member data has saved us so much time and effort. Highly recommended!&rdquo;
				</p>
				<footer class="text-sm">Alex Johnson, Club President</footer>
			</blockquote>
		</div>
	</div>
	<div class="flex h-full flex-col justify-center lg:p-8">
		<Card class="mx-auto flex w-full flex-col justify-center space-y-6 p-6 shadow-xl sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-left text-2xl font-semibold tracking-tight">Login</h1>
				<p class="text-left text-sm text-muted-foreground">Access your account using Google</p>
			</div>
			<hr class="my-4 border-gray-300" />
			<div class="flex flex-col space-y-4">
				<Button onclick={loginWithGoogle} class="flex items-center justify-center space-x-2">
					<GoogleLogo weight="bold" size={20} />
					<span>Login with Google</span>
				</Button>
			</div>
		</Card>
	</div>
</div>
