<script lang="ts">
	import { Card } from "$lib/components/ui/card";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	// import { Info } from "phosphor-svelte";
	import { Button, buttonVariants } from "$lib/components/ui/button";
	// import { Dialog } from "$lib/components/ui/dialog";

	let { data } = $props();
	let { user, organization, supabase } = $derived(data);
	console.log(user, organization, supabase);

	// Function to generate a random 4-digit secret code
	function generateSecretCode() {
		return Math.floor(1000 + Math.random() * 9000).toString();
	}

	// Function to get current location coordinates
	function getCurrentLocation() {
		return new Promise<{ latitude: number; longitude: number }>((resolve, reject) => {
			if (navigator.geolocation) {
				const options = {
					enableHighAccuracy: true,
					timeout: 10000, // 10 seconds
					maximumAge: 0,
				};
				navigator.geolocation.getCurrentPosition(
					(position) => {
						resolve({
							latitude: position.coords.latitude,
							longitude: position.coords.longitude,
						});
					},
					(error) => {
						let errorMessage = "";
						switch (error.code) {
							case error.PERMISSION_DENIED:
								errorMessage = "Permission denied";
								break;
							case error.POSITION_UNAVAILABLE:
								errorMessage = "Position unavailable";
								break;
							case error.TIMEOUT:
								errorMessage = "Request timeout";
								break;
							default:
								errorMessage = "An unknown error occurred";
								break;
						}
						reject(new Error(errorMessage));
					},
					options,
				);
			} else {
				reject(new Error("Geolocation is not supported by this browser."));
			}
		});
	}

	// Function to handle opening attendance
	async function openAttendance() {
		console.log("openAttendance");
		try {
			const { latitude, longitude } = await getCurrentLocation();
			const secretCode = generateSecretCode();
			const organizationId = "currentOrgId"; // Replace with actual organization ID logic

			// Logic to create a new row in the attendance_periods table
			// This is a placeholder for the actual database interaction
			const { error } = await supabase.from("attendance_periods").insert({
				latitude: latitude,
				longitude: longitude,
				secret_code: secretCode,
				organization_id: organization.id,
			});
			console.log(error);

			if (error) {
				console.error("Error creating attendance period:", error);
			} else {
				console.log("Attendance period created successfully");
			}
		} catch (error) {
			console.error("Error opening attendance:", error);
		}
	}
</script>

<h2 class="mb-3 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl">Open Events</h2>
<AttendanceCard />
<h2 class="mb-3 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl">Events</h2>
<AttendanceCard />
<Button onclick={openAttendance}>Open</Button>

{#snippet AttendanceCard()}
	<Card class="mb-10 max-w-sm shadow-lg">
		<div class="p-4">
			<h2 class="text-lg font-semibold">Event: Summer Festival</h2>
			<p class="text-sm text-gray-600">Date: June 15, 2023</p>
			<p class="text-sm text-gray-600">Location: Downtown Park</p>
		</div>
	</Card>
{/snippet}
