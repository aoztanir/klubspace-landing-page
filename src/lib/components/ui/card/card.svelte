<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	import { theme, mode } from "mode-watcher";

	export { className as class };
</script>

<div
	class={cn(
		"rounded-lg border bg-white  text-card-foreground shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-white",
		className,
	)}
	{...$$restProps}
>
	<slot />
</div>
