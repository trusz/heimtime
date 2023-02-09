<script lang="ts">time_entry_to_item
	import DayGridLayout from "./day-grid-layout.svelte"
	import { slot_to_minutes, type Time_Entry, time_entry_context_use, use_project_context, type Project, init_project_context, Time_Entry_State, time_entry_execute_action, Time_Entry_Action, date_format_iso } from "@heimtime/api"
	import { time_entry_to_item } from "./item"
	import { Card } from "../card"
  	import { minutes_to_date } from "../../x/date"
  	import type { Event_Save } from "$lib/components/event_form/events";
  	import type { Event_Detail_Delete } from "$lib/components/card/card_events";
	
	// 
	// Input Props
	// 
	export let start_hour_24       = 6
	export let end_hour_24         = 22
	export let step_in_minutes     = 15
	export let show_hours 		   = true
	export let projects: Project[]
	export let date: 	 Date	

	// 
	// Context
	// 
	/**
	 * We create a context for all forms in this day
	*/
	init_project_context()
	const { set_projects, store_projects } = use_project_context()
	set_projects(projects)

	/**
	 * We use the time entry context and filter for the given date
	 */
	const { 
		create_time_entry,
		create_time_entry_v2,
		last_time_entry, 
		update_last_time_entry,
		update_time_entry,
		update_time_entry_by_id,
		store_time_entry,
	 } = time_entry_context_use()
	
	// 
	// Derived
	// 
	const an_hour_in_minutes = 60
	$: shown_hours = end_hour_24 - start_hour_24
	$: no_of_slots = shown_hours * (an_hour_in_minutes/step_in_minutes)
	$: given_days_time_entries = $store_time_entry.filter((te) => date_format_iso(te.start) === date_format_iso(date))
	$: items = given_days_time_entries.map((te ,tei) => 
			time_entry_to_item(
				te, 
				start_hour_24, 
				step_in_minutes, 
				Card,
				(event:CustomEvent<Event_Save>) => handle_save(tei, event),
				handle_delete,
			)
	)

	function handle_save(index:number, event: CustomEvent<Event_Save>){

		const task = event.detail.task
		if(!task){ return }

		const project = $store_projects.find(p => p.tasks.indexOf(task) >= 0)
		
		const time_entry = given_days_time_entries[index]
		const modified_entry = time_entry_execute_action(time_entry, Time_Entry_Action.Form_Finished)
		modified_entry.task = task
		modified_entry.project = project
		modified_entry.description = event.detail.description
		update_time_entry_by_id(modified_entry.id, modified_entry)
	}
	function handle_delete(event: CustomEvent<Event_Detail_Delete>){
		const id = event.detail.id
		const time_entry_to_delete = $store_time_entry.find(te => te.id === id)
		if(!time_entry_to_delete){
			console.log({level:"warn", msg:"could not find time entry to delete, stopping", id})
			return
		}
		const modified_te = time_entry_execute_action(time_entry_to_delete, Time_Entry_Action.Delete)
		update_time_entry_by_id(id, modified_te)

	}

	
	// 
	// Time Entries
	// 
	let time_entries: Time_Entry[] = []
	
	
	function handle_create_start(event:CustomEvent<number>){
		const index = event.detail
		
		const start_minutes = slot_to_minutes(index, start_hour_24, step_in_minutes)
		let start_date = minutes_to_date(start_minutes, date)

		const end_minutes = slot_to_minutes(index + 1, start_hour_24, step_in_minutes)
		let end_date = minutes_to_date(end_minutes, date)
		
		
		// create_time_entry_v2(start_date, end_date)
		create_time_entry_v2({
			start: start_date,
			end: end_date,
			// state: Time_Entry_State.In_Progress
		})
	}
	function handle_create_progress(e: CustomEvent<number>){
		const time_entry = last_time_entry()
		const new_time_entry = {...time_entry}
		
		let index = e.detail
		let end_minutes = slot_to_minutes(index + 1, start_hour_24, step_in_minutes)
		let end_date = minutes_to_date(end_minutes, date)
		
		const is_dragging_bottom_to_top = time_entry.start.getTime() > end_date.getTime()
		if( is_dragging_bottom_to_top ){
			end_minutes = slot_to_minutes(index , start_hour_24, step_in_minutes)
			end_date = minutes_to_date(end_minutes, date)
		}
		
		new_time_entry.end = end_date
		update_last_time_entry(new_time_entry)
	}
	
	
	
</script>


<DayGridLayout 
	no_of_slots={no_of_slots}
	items={items}
	show_hours={show_hours}
	on:createstart={handle_create_start}
	on:createprogress={handle_create_progress}
	on:createstop={console.log}
/>