<script lang="ts">
    import { Example } from "$lib/components/internal"
    import { date_add_days, date_format_iso, date_week_frames, new_project, new_task, Time_Entry_Action, time_entry_context_init, time_entry_context_use, time_entry_execute_action, Time_Entry_State, type Time_Entry } from "@heimtime/api";
	import WeekGrid from "./week_grid.svelte"
	import { context_card_init } from "../card"

    function handleClick(){
        console.log("clicked")
    }

    const [first_day, last_day] = date_week_frames(new Date())


	// 
	// Context
	// 
	time_entry_context_init()
	context_card_init()
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

    const project_sets = [ 
        [...projects],
        [...projects],
        [...projects],
        [...projects],
        [...projects],
        [...projects],
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
    // Mockup
    // 
    // 
	// API Mocks
	// 
	store_time_entry_to_save.subscribe(async (time_entries_to_save: Time_Entry[])=>{
		console.log({level:"dev", msg:"entries to save", time_entries_to_save})
		await new Promise(r => setTimeout(r, 2_000))
		for(let te of time_entries_to_save){
			const modified_te = time_entry_execute_action(te, Time_Entry_Action.Save_Success)
			update_time_entry_by_id(te.id, modified_te)
		}

	})
	store_time_entry_to_delete.subscribe(async (time_entries_to_delete: Time_Entry[])=>{
		await new Promise(r => setTimeout(r, 2_000))
		for(let te of time_entries_to_delete){
			delete_time_entry(te.id)
		}
	})

</script>

<Example name="Week Grid">
    <div class="input-container">
        <input type="date" value={date_format_iso(first_day)} readonly />
        <input type="date" value={date_format_iso(last_day)} readonly  />
    </div>
    <WeekGrid 
        project_sets={project_sets} 
        start_date={first_day}
    />
</Example>

<style>
    .input-container{
        margin-bottom: 2rem;
    }
</style>