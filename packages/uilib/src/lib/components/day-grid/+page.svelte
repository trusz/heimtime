<script lang="ts">
	import { Example } from "$lib/components/internal/example"
	import DayGridLayout from "./day-grid-layout.svelte";
	import DayGrid from "./day-grid.svelte"
	import { init_event_context } from "@heimtime/api"

	let noOfSlots = 20

	init_event_context()

</script>

<Example name="Events">
	<DayGrid />
</Example>

<Example name="Grid Layout">
	<input type="range" min=10 max=72 bind:value={noOfSlots} />
	<DayGridLayout 
		no_of_slots={noOfSlots} 
		on:createstart={console.log}
		on:createprogress={console.log}
		on:createstop={console.log}
	/>

</Example>