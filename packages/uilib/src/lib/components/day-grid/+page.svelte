<script lang="ts">
	import { Example } from "$lib/components/internal/example"
	import DayGridLayout from "./day-grid-layout.svelte";
	import DayGrid from "./day-grid.svelte"
	import { 
		time_entry_context_init, 
		init_project_context, 
		use_project_context, 
		new_project, 
		new_task,
        time_entry_context_use,
        type Time_Entry,
        Time_Entry_State,
	} from "@heimtime/api"

	let noOfSlots = 20

	// 
	// Context
	// 
	time_entry_context_init()
	const { store_time_entry_to_save, update_time_entry_by_id } = time_entry_context_use()
	const projects = [
		new_project(
			0,
			"first",
			[
				new_task(0, "1.1"),
				new_task(1, "1.2"),
				new_task(2, "1.3"),
			]
		),
		new_project(
			1,
			"second",
			[
				new_task(3, "2.1"),
				new_task(4, "2.2"),
				new_task(5, "2.3"),
			]
		)
	]

	// 
	// Mocks
	// 
	store_time_entry_to_save.subscribe(async (time_entries_to_save: Time_Entry[])=>{
		await new Promise(r => setTimeout(r, 5_000))
		for(let te of time_entries_to_save){
			const modified_te = {
				...te,
				state: Time_Entry_State.Stable,
			}
			update_time_entry_by_id(te.id, modified_te)
		}

	})

</script>

<Example name="Events">
	<DayGrid projects={projects} />
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