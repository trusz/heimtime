<script lang="ts">
	import { minutes_to_date } from "$x/date"
	import DayGridLayout from "./day-grid-layout.svelte"
	import { slot_to_minutes, type Event, use_event_context } from "@heimtime/api"
	import { event_to_item } from "./item"
	import { Card } from "../card"
	
	// 
	// Input Props
	// 
	export let start_hour_24   = 6
	export let end_hour_24     = 22
	export let step_in_minutes = 15
	
	// 
	// Derived
	// 
	const an_hour_in_minutes = 60
	$: shown_hours = end_hour_24 - start_hour_24
	$: no_of_slots = shown_hours * (an_hour_in_minutes/step_in_minutes)
	$: items = $store_events.map((event) => event_to_item(event, start_hour_24, step_in_minutes, Card))
	$: console.log({level:"dev", msg:"items", items})
	
	// 
	// Events
	// 
	let events: Event[] = []
	const { 
		create_event, 
		last_event, 
		update_last_event,
		store_events,
	 } = use_event_context()
	
	function handle_create_start(event:CustomEvent<number>){
		const index = event.detail
		
		const start_minutes = slot_to_minutes(index, start_hour_24, step_in_minutes)
		let start_date = minutes_to_date(start_minutes)

		const end_minutes = slot_to_minutes(index + 1, start_hour_24, step_in_minutes)
		let end_date = minutes_to_date(end_minutes)
		
		console.log({level:"dev", msg:"create::start", index, start_minutes, start_date, end_minutes, end_date})
		
		create_event(start_date, end_date)
	}
	function handle_create_progress(e: CustomEvent<number>){
		const event = last_event()
		const new_event = {...event}
		
		let index = e.detail
		let end_minutes = slot_to_minutes(index + 1, start_hour_24, step_in_minutes)
		let end_date = minutes_to_date(end_minutes)
		
		// dragging bottom to top
		if( event.start.getTime() > end_date.getTime() ){
			end_minutes = slot_to_minutes(index , start_hour_24, step_in_minutes)
			end_date = minutes_to_date(end_minutes)
		}
		
		new_event.end = end_date
		update_last_event(new_event)
	}
	
	
	
</script>


<DayGridLayout 
	no_of_slots={no_of_slots}
	items={items}
	on:createstart={handle_create_start}
	on:createprogress={handle_create_progress}
	on:createstop={console.log}
/>