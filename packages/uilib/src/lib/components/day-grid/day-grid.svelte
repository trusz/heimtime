<script lang="ts">time_entry_to_item
	import DayGridLayout from "./day-grid-layout.svelte"
	import { slot_to_minutes, type Time_Entry, time_entry_context_use, use_project_context, type Project, init_project_context, Time_Entry_State } from "@heimtime/api"
	import { time_entry_to_item } from "./item"
	import { Card } from "../card"
  	import { minutes_to_date } from "../../x/date"
  	import type { Event_Save } from "$lib/components/event_form/events";
	
	// 
	// Input Props
	// 
	export let start_hour_24       = 6
	export let end_hour_24         = 22
	export let step_in_minutes     = 15
	export let projects :Project[] = []

	// 
	// Context
	// 
	init_project_context()
	const { set_projects, store_projects } = use_project_context()
	set_projects(projects)
	
	// 
	// Derived
	// 
	const an_hour_in_minutes = 60
	$: shown_hours = end_hour_24 - start_hour_24
	$: no_of_slots = shown_hours * (an_hour_in_minutes/step_in_minutes)
	$: items = $store_time_entry.map((te ,tei) => 
		time_entry_to_item(
			te, 
			start_hour_24, 
			step_in_minutes, 
			Card,
			(event:CustomEvent<Event_Save>) => handle_save(tei, event)
		)
	)

	function handle_save(index:number, event: CustomEvent<Event_Save>){

		const task = event.detail.task
		if(!task){ return }

		const project = $store_projects.find(p => p.tasks.indexOf(task) >= 0)
		
		const new_entry = {...$store_time_entry[index]}
		new_entry.task = task
		new_entry.project = project
		new_entry.description = event.detail.description
		new_entry.state = Time_Entry_State.Saving
		update_time_entry(index,new_entry)
	}

	
	// 
	// Time Entries
	// 
	let time_entries: Time_Entry[] = []
	const { 
		create_time_entry,
		last_time_entry, 
		update_last_time_entry,
		update_time_entry,
		store_time_entry,
	 } = time_entry_context_use()
	
	function handle_create_start(event:CustomEvent<number>){
		const index = event.detail
		
		const start_minutes = slot_to_minutes(index, start_hour_24, step_in_minutes)
		let start_date = minutes_to_date(start_minutes)

		const end_minutes = slot_to_minutes(index + 1, start_hour_24, step_in_minutes)
		let end_date = minutes_to_date(end_minutes)
		
		
		create_time_entry(start_date, end_date)
	}
	function handle_create_progress(e: CustomEvent<number>){
		const time_entry = last_time_entry()
		const new_time_entry = {...time_entry}
		
		let index = e.detail
		let end_minutes = slot_to_minutes(index + 1, start_hour_24, step_in_minutes)
		let end_date = minutes_to_date(end_minutes)
		
		// dragging bottom to top
		if( time_entry.start.getTime() > end_date.getTime() ){
			end_minutes = slot_to_minutes(index , start_hour_24, step_in_minutes)
			end_date = minutes_to_date(end_minutes)
		}
		
		new_time_entry.end = end_date
		update_last_time_entry(new_time_entry)
	}
	
	
	
</script>


<DayGridLayout 
	no_of_slots={no_of_slots}
	items={items}
	on:createstart={handle_create_start}
	on:createprogress={handle_create_progress}
	on:createstop={console.log}
/>