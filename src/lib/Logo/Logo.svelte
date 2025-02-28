<script>
	import { mode } from "mode-watcher";
	export let size = 50;
</script>

<a href="/">
	<img
		src={`/klubSpaceLogo${$mode === "dark" ? "Dark" : "Light"}.png`}
		alt="Klubspace Logo"
		style="width: {size}px; height: {size}px; aspect-ratio: 1/1"
	/>
</a>
