<script lang="ts">
	let { data } = $props();
	let { organization } = $derived(data);
</script>

<h1>Manage Existing Announcements</h1>
<div>{JSON.stringify(organization)}</div>
