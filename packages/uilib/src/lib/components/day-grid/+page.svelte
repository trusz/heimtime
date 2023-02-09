<script lang="ts">
	import { Example } from "$lib/components/internal/example"
	import DayGridLayout from "./day-grid-layout.svelte";
	import DayGrid from "./day-grid.svelte"
	import { 
		time_entry_context_init,
		new_project, 
		new_task,
        time_entry_context_use,
        type Time_Entry,
        time_entry_execute_action,
        Time_Entry_Action,
        date_format_iso,
        Time_Entry_State,
        date_add_days,
	} from "@heimtime/api"
  	import { context_card_init } from "$lib/components/card/card_context";

	let no_of_slots = 20

	// 
	// Context
	// 

	context_card_init()
	time_entry_context_init()
	const { 
		store_time_entry_to_save, 
		store_time_entry_to_delete,
		store_time_entry,
		update_time_entry_by_id, 
		create_time_entry,
		create_time_entry_v2,
		delete_time_entry, 
	 } = time_entry_context_use()

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

	create_time_entry_v2({
	 	start: new Date(date_format_iso(new Date())+" 08:00"),
	 	end: new Date(date_format_iso(new Date())+" 09:30"),
		project: projects[0],
		task: projects[0].tasks[1],
		state: Time_Entry_State.Stable,
		description: "this was already here"
	})
	create_time_entry_v2({
	 	start: new Date(date_format_iso(date_add_days(new Date(), 1))+" 10:00"),
	 	end: new Date(date_format_iso(date_add_days(new Date(), 1))+" 11:30"),
		project: projects[0],
		task: projects[0].tasks[1],
		state: Time_Entry_State.Stable,
		description: "this was already here"
	})

	// 
	// API Mocks
	// 
	store_time_entry_to_save.subscribe(async (time_entries_to_save: Time_Entry[])=>{
		await new Promise(r => setTimeout(r, 2_000))
		for(let te of time_entries_to_save){
			const modified_te = time_entry_execute_action(te, Time_Entry_Action.Save_Success)
			update_time_entry_by_id(te.id, modified_te)
		}

	})
	store_time_entry_to_delete.subscribe(async (time_entries_to_delete: Time_Entry[])=>{
		await new Promise(r => setTimeout(r, 500))
		for(let te of time_entries_to_delete){
			delete_time_entry(te.id)
		}
	})


	let date: Date = new Date()

</script>

<Example name="Events">
	<input type="date" on:change={(e) => date = e.target.valueAsDate} />
	<DayGrid projects={projects} date={date} />
</Example>

<Example name="Grid Layout">
	<input type="range" min=10 max=72 bind:value={no_of_slots} />
	<DayGridLayout 
		no_of_slots={no_of_slots} 
		show_hours={true}
		on:createstart={console.log}
		on:createprogress={console.log}
		on:createstop={console.log}
	/>

</Example>