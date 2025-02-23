<script lang="ts">
	import { Editor } from "@tiptap/core";
	import StarterKit from "@tiptap/starter-kit";
	import Link from "@tiptap/extension-link";
	import TipTapUnderline from "@tiptap/extension-underline";
	import CharacterCount from "@tiptap/extension-character-count";
	import { onDestroy, onMount } from "svelte";
	import { Bold, CircleHelp, ImagePlus, Italic, List, ListOrdered, Loader, Underline } from "lucide-svelte";

	let { data } = $props();
	let { user, organization, supabase } = $derived(data);

	// @ts-ignore
	let editor: Editor = $state();
	let editor_element: HTMLElement;
	let html_value: string = $state(
		"<p>Write an announcement.<br>Press Shift + Enter to go to the next line.</p><p>Press Enter to create a break line</p>",
	);
	let is_bold_active = $state(false);
	let is_italic_active = $state(false);
	let is_underline_active = $state(false);
	let is_bulletList_active = $state(false);
	let is_orderedList_active = $state(false);

	let is_loading = $state(false);

	let announcement_title: string = $state("");
	let announcement_priority: Database.Enums.AnnouncementPriority = $state("MEDIUM");

	async function publishAnnouncement() {
		is_loading = true;

		const platforms: Array<Database.Enums.AnnouncementPlatform> = [];

		const {} = await supabase.from("announcements").insert({
			content: html_value,
			created_by: user.id,
			organization_id: organization.id,
			title: announcement_title.length > 0 ? announcement_title : null,
			priority: announcement_priority,
			platforms: platforms,
			public: true,
			active_until: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(),
		});
	}

	onMount(() => {
		if (editor) return;
		editor = new Editor({
			element: editor_element,
			extensions: [
				StarterKit.configure({
					heading: false,
					blockquote: false,
					code: false,
					codeBlock: false,
					horizontalRule: false,
				}),
				TipTapUnderline,
				CharacterCount.configure({
					limit: 2000, //this is for discord which is limited to 2k, maybe could make dynamic truncate for disc only to allow for even longer emails
				}),
				Link.configure({
					autolink: false,
					validate: (url) => {
						return /^https/.test(url);
					},
				}),
			],
			content: html_value,
			editorProps: {
				attributes: {
					class:
						"prose prose-sm overflow-y-auto overflow-x-hidden p-5 px-4 py-5 text-black sm:prose-base lg:prose-lg xl:prose-2xl  focus:outline-none min-w-full !text-base",
				},
			},
			onUpdate: ({ editor }) => {
				html_value = editor.getHTML();
			},
			onTransaction: ({ editor }) => {
				is_bold_active = editor.isActive("bold");
				is_italic_active = editor.isActive("italic");
				is_underline_active = editor.isActive("underline");
				is_bulletList_active = editor.isActive("bulletList");
				is_orderedList_active = editor.isActive("orderedList");
			},
		});
	});
	onDestroy(() => {
		editor?.destroy();
	});
</script>

<h1>Create a New Announcement</h1>
<div>{JSON.stringify(organization)}</div>

<div class="editor_wrapper">
	<fieldset class="toolbar">
		{#if editor}
			<input class="title_input" type="text" bind:value={announcement_title} placeholder="Enter a title (optional)" maxlength="60" />
			<div class="flex gap-x-2">
				<button>
					<label class="h-full w-full cursor-pointer">
						<ImagePlus class="h-full w-full" />
					</label>
				</button>
				<div class="separator"></div>
				<div class="group">
					<button onclick={() => editor.chain().focus().toggleBold().run()} class:active={is_bold_active}>
						<Bold />
					</button>
					<button onclick={() => editor.chain().focus().toggleItalic().run()} class:active={is_italic_active}>
						<Italic />
					</button>
					<button onclick={() => editor.chain().focus().toggleUnderline().run()} class:active={is_underline_active}>
						<Underline />
					</button>
				</div>
				<div class="separator"></div>
				<div class="group">
					<button onclick={() => editor.chain().focus().toggleBulletList().run()} class:active={is_bulletList_active}>
						<List />
					</button>
					<button onclick={() => editor.chain().focus().toggleOrderedList().run()} class:active={is_orderedList_active}>
						<ListOrdered />
					</button>
				</div>
				<div class="separator"></div>
				<button>
					<CircleHelp />
				</button>
			</div>
		{/if}
	</fieldset>

	<div class="editor_element" bind:this={editor_element}></div>

	{#if editor}
		<div class="border-t-[3px] border-solid border-black">
			<button class="create-button" disabled={is_loading || editor.storage.characterCount.words() < 1}>
				{#if is_loading}
					<div class="absolute -left-10 top-1/2 -translate-y-1/2">
						<Loader class="animate-spin-slow text-black" />
					</div>
				{/if}
				Create Announcement
			</button>
		</div>
	{/if}
</div>

<style lang="postcss">
	.editor_wrapper {
		@apply mx-auto flex flex-col rounded-xl border-4 border-solid border-gray-950;
		@apply min-w-[400px] max-w-[90%] sm:w-[600px] md:w-[800px] lg:w-[1400px];
	}
	.editor_element {
		@apply w-full;
	}
	:global(.editor_element a) {
		@apply text-blue-400;
		font-weight: inherit;
	}

	.toolbar {
		@apply sticky top-0 flex bg-gray-950 text-white;
		@apply md:p-1 lg:p-2;

		@apply w-full items-center justify-between;

		.title_input {
			@apply bg-transparent;
			@apply p-2;
			@apply text-xl;
			@apply outline-none;
			flex-grow: 1;
		}

		button {
			@apply flex items-center justify-center rounded-lg;
			@apply p-1.5 lg:h-10 lg:w-10;

			&.active,
			&:hover {
				@apply bg-white/20;
			}
		}

		.group {
			@apply flex grow-0 gap-x-1;
		}

		.separator {
			width: 1.5px;
			background-color: theme(colors.neutral.200);
			align-self: stretch;
		}
	}

	.create-button {
		@apply relative float-right my-2 mr-2 rounded-md bg-black font-medium text-white transition-colors duration-300;
		@apply p-2 text-[14px] md:p-3 md:text-[16px];
		@apply focus:outline-none;

		&:disabled {
			@apply cursor-not-allowed bg-opacity-70 text-opacity-50;
		}
	}
</style>
