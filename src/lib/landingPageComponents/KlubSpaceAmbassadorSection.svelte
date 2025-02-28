<script lang="ts">
	import { page } from "$app/stores";
	import { toast } from "svelte-sonner";

	import { Badge } from "$lib/components/ui/badge";
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";
	import { ArrowRight, Briefcase, Target, Users } from "phosphor-svelte";
	import Card from "$lib/components/ui/card/card.svelte";
	import { universities } from "./universities.js";

	let name = "";
	let email = "";
	let school = "";
	let resume: File | null = null;
	let isDragging = false;
	let fileInput: HTMLInputElement;

	const colleges = universities;
	let filteredColleges = colleges;
	let showCollegeDropdown = false;

	function filterColleges(searchTerm: string) {
		school = searchTerm;
		filteredColleges = colleges.filter((college) => college.toLowerCase().includes(searchTerm.toLowerCase()));
		showCollegeDropdown = true;
	}

	function selectCollege(college: string) {
		school = college;
		showCollegeDropdown = false;
	}

	function handleDragOver(e: DragEvent) {
		e.preventDefault();
		isDragging = true;
	}

	function handleDragLeave() {
		isDragging = false;
	}

	function handleDrop(e: DragEvent) {
		e.preventDefault();
		isDragging = false;
		const files = e.dataTransfer?.files;
		if (files && files[0]) {
			handleFileSelection(files[0]);
		}
	}

	function handleFileSelection(file: File) {
		if (
			file.type === "application/pdf" ||
			file.type === "application/msword" ||
			file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
		) {
			resume = file;
		} else {
			toast.error("Invalid file type", {
				description: "Please upload a PDF, DOC, or DOCX file",
			});
		}
	}

	function deleteResume() {
		resume = null;
		if (fileInput) {
			fileInput.value = "";
		}
	}

	function handleDropzoneClick() {
		fileInput?.click();
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const { supabase } = $page.data;

		try {
			if (!name || !email || !school || !resume) {
				throw new Error("Please fill in all fields and upload your resume");
			}

			// Validate that school is in the list
			if (!colleges.includes(school)) {
				throw new Error("Please select a valid US university from the list");
			}

			const fileExt = resume.name.split(".").pop();
			const fileName = `${Math.random()}.${fileExt}`;
			const filePath = `resumes/${fileName}`;

			const { error: uploadError } = await supabase.storage.from("ambassador-resumes").upload(filePath, resume);

			if (uploadError) throw uploadError;

			const {
				data: { publicUrl },
			} = supabase.storage.from("ambassador-resumes").getPublicUrl(filePath);

			const { error } = await supabase.from("ambassador_applications").insert([
				{
					name,
					email,
					school,
					resume_url: publicUrl,
				},
			]);

			if (error) throw error;

			name = "";
			email = "";
			school = "";
			resume = null;
			if (fileInput) fileInput.value = "";

			toast.success("Application submitted!", {
				description: "We'll review your application and get back to you soon.",
			});
		} catch (error) {
			console.error("Error:", error);
			toast.error("Something went wrong", {
				description: error instanceof Error ? error.message : "Please try again or contact support if the issue persists.",
			});
		}
	}
</script>

<section class="mx-2 mb-8 mt-4 sm:mx-4 sm:mb-16 sm:mt-8">
	<div class="flex justify-center">
		<Badge
			class="mb-7 inline-block rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
			>Join us</Badge
		>
	</div>
	<div class="mb-8 text-center sm:mb-12">
		<h2
			class="mx-auto bg-gradient-to-r bg-clip-text text-4xl font-black leading-tight dark:from-red-400 dark:from-red-500 dark:to-red-600 dark:to-red-700 dark:text-transparent sm:text-7xl sm:leading-tight"
		>
			24-25' Cohort Ambassadors
		</h2>
		<p class="mt-2 text-base text-neutral-600 dark:text-neutral-400 sm:mt-4 sm:text-lg">
			Join our mission to transform campus organizations
		</p>
	</div>

	<div class="grid gap-4 sm:gap-8 md:grid-cols-2">
		<div class="space-y-4 sm:space-y-8">
			<div class="relative">
				<div
					class="absolute -left-2 -top-2 h-full w-full rounded-2xl border border-red-500/20 bg-red-50/5 sm:-left-4 sm:-top-4 sm:rounded-3xl"
				></div>
				<Card class="relative space-y-3 rounded-xl p-4 sm:space-y-4 sm:rounded-2xl sm:p-6">
					<div class="inline-flex rounded-lg bg-red-50 p-2 dark:bg-red-500/10 sm:rounded-xl sm:p-3">
						<Target weight="fill" size={24} class="text-red-500 sm:h-8 sm:w-8" />
					</div>
					<h3 class="text-xl font-bold sm:text-2xl">Program Benefits</h3>
					<ul class="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 sm:space-y-3 sm:text-base">
						<li class="flex items-center gap-2">
							<ArrowRight class="h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
							Earn 20% commission <span class="italic">(subject to change)</span>
						</li>
						<li class="flex items-center gap-2">
							<ArrowRight class="h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
							Gain sales experience
						</li>
						<li class="flex items-center gap-2">
							<ArrowRight class="h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
							Flexible remote work
						</li>
					</ul>
				</Card>
			</div>

			<div class="relative hidden sm:block">
				<div
					class="absolute -left-2 -top-2 h-full w-full rounded-2xl border border-red-500/20 bg-red-50/5 sm:-left-4 sm:-top-4 sm:rounded-3xl"
				></div>
				<Card class="relative space-y-3 rounded-xl p-4 sm:space-y-4 sm:rounded-2xl sm:p-6">
					<div class="inline-flex rounded-lg bg-red-50 p-2 dark:bg-red-500/10 sm:rounded-xl sm:p-3">
						<Briefcase weight="fill" size={24} class="text-red-500 sm:h-8 sm:w-8" />
					</div>
					<h3 class="text-xl font-bold sm:text-2xl">What We Look For</h3>
					<ul class="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 sm:space-y-3 sm:text-base">
						<li class="flex items-center gap-2">
							<ArrowRight class="h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
							Strong communication
						</li>
						<li class="flex items-center gap-2">
							<ArrowRight class="h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
							Campus involvement
						</li>
						<li class="flex items-center gap-2">
							<ArrowRight class="h-3 w-3 text-red-500 sm:h-4 sm:w-4" />
							Self-motivated
						</li>
					</ul>
				</Card>
			</div>
		</div>

		<div class="relative h-full">
			<div
				class="absolute -left-2 -top-2 h-full w-full rounded-2xl border border-red-500/20 bg-red-50/5 sm:-left-4 sm:-top-4 sm:rounded-3xl"
			></div>
			<Card class="relative flex h-full flex-col rounded-xl p-4 sm:rounded-2xl sm:p-6">
				<h3 class="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">Apply Now</h3>
				<form class="flex h-full flex-col" on:submit={handleSubmit}>
					<div class="flex-grow space-y-3 sm:space-y-4">
						<div>
							<Input
								type="text"
								placeholder="Full Name"
								class="h-10 rounded-lg bg-gray-50 text-sm dark:bg-neutral-800 sm:h-12 sm:rounded-xl sm:text-base"
								bind:value={name}
								required
							/>
						</div>
						<div>
							<Input
								type="email"
								placeholder="Email Address"
								class="h-10 rounded-lg bg-gray-50 text-sm dark:bg-neutral-800 sm:h-12 sm:rounded-xl sm:text-base"
								bind:value={email}
								required
							/>
						</div>
						<div class="relative">
							<Input
								type="text"
								placeholder="Your University"
								class="h-10 rounded-lg bg-gray-50 text-sm dark:bg-neutral-800 sm:h-12 sm:rounded-xl sm:text-base"
								bind:value={school}
								on:input={(e) => filterColleges(e.currentTarget.value)}
								on:focus={() => (showCollegeDropdown = true)}
								required
							/>
							{#if showCollegeDropdown && filteredColleges.length > 0}
								<div
									class="absolute z-50 mt-1 max-h-48 w-full overflow-auto rounded-lg border bg-white p-1 shadow-lg dark:bg-neutral-800 sm:max-h-60 sm:rounded-xl sm:p-2"
								>
									{#each filteredColleges as college}
										<button
											type="button"
											class="w-full rounded-md p-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-neutral-700 sm:rounded-lg sm:text-base"
											on:click={() => selectCollege(college)}
										>
											{college}
										</button>
									{/each}
								</div>
							{/if}
						</div>
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<div
							class="relative min-h-[120px] cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-3 text-center dark:border-neutral-700 dark:bg-neutral-800 sm:min-h-[150px] sm:rounded-xl sm:p-4"
							class:border-red-500={isDragging}
							on:dragover={handleDragOver}
							on:dragleave={handleDragLeave}
							on:drop={handleDrop}
							on:click={handleDropzoneClick}
							role="button"
							tabindex="0"
						>
							<input
								type="file"
								bind:this={fileInput}
								accept=".pdf,.doc,.docx"
								class="hidden"
								on:change={(e) => handleFileSelection(e.currentTarget.files?.[0] || null)}
								required
							/>

							{#if resume}
								<div class="flex items-center justify-between">
									<div class="flex items-center gap-2 sm:gap-3">
										<div class="rounded-md bg-neutral-200 p-1.5 dark:bg-neutral-700 sm:rounded-lg sm:p-2">
											<svg class="h-4 w-4 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path d="M13 2V9H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										</div>
										<div class="text-left">
											<p
												class="max-w-[75px] truncate text-xs font-medium text-neutral-900 dark:text-neutral-100 sm:text-sm md:max-w-[200px]"
											>
												{resume.name}
											</p>
											<p class="text-[10px] text-neutral-500 sm:text-xs">{(resume.size / 1024 / 1024).toFixed(2)} MB</p>
										</div>
									</div>
									<Button
										type="button"
										variant="ghost"
										class="h-8 px-2 text-xs text-red-500 hover:text-red-600 sm:h-10 sm:px-4 sm:text-sm"
										on:click={(e) => {
											e.stopPropagation();
											deleteResume();
										}}
									>
										Delete
									</Button>
								</div>
							{:else}
								<div class="flex flex-col items-center justify-center space-y-2">
									<p class="text-xs text-neutral-600 dark:text-neutral-300 sm:text-sm">Drag and drop resume or click to browse</p>
									<Button
										type="button"
										variant="outline"
										class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs sm:text-base"
									>
										Choose File
									</Button>
								</div>
							{/if}
						</div>
						<p class="text-xs text-neutral-500 sm:text-sm">Upload your resume (PDF, DOC, or DOCX)</p>
					</div>
					<Button type="submit" variant="default" class="mt-3 w-full sm:mt-4">
						Submit Application
						<ArrowRight class="ml-1 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4" weight="bold" />
					</Button>
				</form>
			</Card>
		</div>
	</div>
</section>
