<!-- <script lang="ts">
	import { Button } from "$lib/shadcn/components/ui/button";
	import { Card } from "$lib/shadcn/components/ui/card";
	import { ArrowLeft } from "phosphor-svelte";
	import { createSvelteTable, FlexRender } from "$lib/shadcn/components/ui/data-table/index.js";
	import { readable } from "svelte/store";
	import * as Table from "$lib/shadcn/components/ui/table";
	import { getCoreRowModel } from "@tanstack/table-core";
	import type { CellContext } from "@tanstack/table-core";

	let data: { attendees: Array<{ first_name: string; last_name: string; check_in_time: string }> } = {
		attendees: [
			{ first_name: "John", last_name: "Doe", check_in_time: "2023-06-15T09:00:00Z" },
			{ first_name: "Jane", last_name: "Smith", check_in_time: "2023-06-15T09:15:00Z" },
			{ first_name: "Alice", last_name: "Johnson", check_in_time: "2023-06-15T09:30:00Z" },
			{ first_name: "Bob", last_name: "Brown", check_in_time: "2023-06-15T09:45:00Z" },
		],
	};
	let attendees = $derived(data?.attendees || []);

	const columns = [
		{
			accessorKey: "first_name",
			header: "First Name",
			cell: ({ getValue }: CellContext<{ first_name: string }, any>) => getValue() || "N/A",
		},
		{
			accessorKey: "last_name",
			header: "Last Name",
			cell: ({ getValue }: CellContext<{ last_name: string }, any>) => getValue() || "N/A",
		},
		{
			accessorKey: "check_in_time",
			header: "Check-In Time",
			cell: ({ getValue }: CellContext<{ check_in_time: string }, any>) => {
				const formatted = new Intl.DateTimeFormat("en-US", {
					year: "numeric",
					month: "numeric",
					day: "numeric",
					hour: "numeric",
					minute: "numeric",
				}).format(new Date(getValue()));
				return formatted;
			},
		},
	];

	const table = createSvelteTable({
		get data() {
			return attendees;
		},
		columns,
		getCoreRowModel: getCoreRowModel(),
	});
</script>

<Button class="mb-4" variant="default">
	<ArrowLeft />
	Back
</Button>

<h1 class="mb-8 text-center text-4xl font-bold">Event Attendance</h1>

<div class="flex flex-col items-center justify-center">
	<Card class="w-full max-w-sm rounded-xl bg-white p-8 shadow-xl">
		<div class="flex flex-col items-center">
			<h2 class="mb-4 text-6xl font-extrabold text-gray-800">1234</h2>
			<p class="text-md text-gray-500">Enter this code to check in</p>
		</div>
	</Card>
</div>

<hr class="my-8 w-full border-t-2 border-gray-300" />

<div class="mx-auto w-full max-w-2xl">
	<div class="rounded-md border">
		<Table.Root>
			<Table.Header>
				{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
					<Table.Row>
						{#each headerGroup.headers as header (header.id)}
							<Table.Head>
								{#if !header.isPlaceholder}
									<FlexRender content={header.column.columnDef.header} context={header.getContext()} />
								{/if}
							</Table.Head>
						{/each}
					</Table.Row>
				{/each}
			</Table.Header>
			<Table.Body>
				{#each table.getRowModel().rows as row (row.id)}
					<Table.Row data-state={row.getIsSelected() && "selected"}>
						{#each row.getVisibleCells() as cell (cell.id)}
							<Table.Cell>
								<FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
							</Table.Cell>
						{/each}
					</Table.Row>
				{:else}
					<Table.Row>
						<Table.Cell colspan={columns.length} class="h-24 text-center">No results.</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</div> -->
