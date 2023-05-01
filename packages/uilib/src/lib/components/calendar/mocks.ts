import { date_add_days, date_format_iso, date_week_frames, new_project, new_task, Time_Entry_Action, time_entry_context_init, time_entry_context_use, time_entry_execute_action, Time_Entry_State, type Time_Entry, init_project_context, use_project_context } from "@heimtime/api";
import { context_card_init } from "../card"
import {get} from "svelte/store"

export function initMocks(){
	
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

	init_project_context()
	// context_card_init()
	const { add_project, store_projects } = use_project_context()
	add_project(
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
	)

	create_time_entry_v2({
		start:       new Date(date_format_iso(new Date())+" 08:00"),
		end:         new Date(date_format_iso(new Date())+" 09:30"),
		project:     get(store_projects)[0],
		task:        get(store_projects)[0].tasks[0],
		state:       Time_Entry_State.Saving,
		description: "this was already here 1"
	})

	create_time_entry_v2({
		start:       new Date(date_format_iso(date_add_days(new Date(), +1))+" 10:00"),
		end:         new Date(date_format_iso(date_add_days(new Date(), +1))+" 11:30"),
		project:     get(store_projects)[0],
		task:        get(store_projects)[1].tasks[1],
		state:       Time_Entry_State.Stable,
		description: "this was already here 2"
	})

    // 
    // Mockup
    // 
    // 
	// API Mocks
	// 
	store_time_entry_to_save.subscribe(async (time_entries_to_save: Time_Entry[])=>{
		// console.log({level: "dev", msg: "entries to save", time_entries_to_save})
		await new Promise(r => setTimeout(r, 2_000))
		for(const te of time_entries_to_save){
			const modified_te = time_entry_execute_action(te, Time_Entry_Action.Save_Success)
			update_time_entry_by_id(te.id, modified_te)
		}

	})
	store_time_entry_to_delete.subscribe(async (time_entries_to_delete: Time_Entry[])=>{
		await new Promise(r => setTimeout(r, 2_000))
		for(const te of time_entries_to_delete){
			delete_time_entry(te.id)
		}
	})

}