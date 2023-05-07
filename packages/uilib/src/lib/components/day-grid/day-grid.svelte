<script lang="ts">time_entry_to_item
	import DayGridLayout from "./day-grid-layout.svelte"
	import { slot_to_minutes, type Time_Entry, time_entry_context_use, use_project_context, type Project, init_project_context, Time_Entry_State, time_entry_execute_action, Time_Entry_Action, date_format_iso, new_time_entry, date_to_slot, date_format_time } from "@heimtime/api"
	import { time_entry_to_item } from "./item"
	import { Card, context_card_use } from "../card"
  	import { minutes_to_date } from "../../x/date"
	import type { Event_Save } from "../event_form/events";
	import type { Event_Detail_Move, Event_Detail_Delete } from "../card/card_events";
	
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
	$: set_projects(projects)
	const card_context = context_card_use()

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
	$: no_of_slots = shown_hours * (an_hour_in_minutes/step_in_minutes) + 1
	$: given_days_time_entries = $store_time_entry.filter((te) => date_format_iso(te.start) === date_format_iso(date))
	$: items = given_days_time_entries.map((te ,tei) => 
			time_entry_to_item(
				te, 
				start_hour_24, 
				step_in_minutes, 
				Card,
				(event:CustomEvent<Event_Save>) => handle_save(tei, event),
				handle_delete,
				(event: CustomEvent) => handle_move_start(te),
				(event: CustomEvent<Event_Detail_Move>) => handle_move(te, event),
				(event: CustomEvent) => handle_move_done(te),
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
		delete_card_by_id(id)

	}

	function delete_card_by_id(id: number){
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
	function handle_resize_progress(e: CustomEvent<{index:number, id:number, up:boolean}>){
		const {index, id, up} = e.detail
		const time_entry = $store_time_entry.find(te => te.id === id )
		console.log({level:"dev", msg:"handling resize", index, id, time_entry, $store_time_entry, up})
		if(!time_entry){
			console.log({level:"error", msg:"could not find time entry by id, stopping", id})
			return
		}
		let new_time_entry = {...time_entry}

		let new_minutes = slot_to_minutes(index + 1, start_hour_24, step_in_minutes)
		let new_date = minutes_to_date(new_minutes, date)
		
		const is_dragging_bottom_to_top = time_entry.start.getTime() > new_date.getTime()
		if( is_dragging_bottom_to_top ){
			new_minutes = slot_to_minutes(index , start_hour_24, step_in_minutes)
			new_date = minutes_to_date(new_minutes, date)
		}
		
		if(up){
			new_time_entry.start = new_date
		}else{
			new_time_entry.end = new_date
		}
		new_time_entry = time_entry_execute_action(new_time_entry,Time_Entry_Action.Form_Or_Time_Changes)
		console.log({level:"dev", msg:"handle_resize_progress", new_time_entry})
		update_time_entry_by_id(id, new_time_entry)
		
	}

	function handle_resize_done(e:CustomEvent<number>){
		const id = e.detail
		const time_entry = $store_time_entry.find(te => te.id === id )

		if(!time_entry){
			console.log({level:"error", msg:"could not find time entry by id, stopping", id})
			return
		}

		const new_time_entry = time_entry_execute_action(time_entry, Time_Entry_Action.Form_Finished)
		console.log({level:"dev", msg:"handle_resize_done", new_time_entry})
		update_time_entry_by_id(id, new_time_entry)
	}

	function handle_create_stop(e: CustomEvent<number>){
		// Note: getting the last time entry could be dangerous later
		const time_entry = last_time_entry()
		card_context.open_form(time_entry.id)
	}


	let original_start_slot: number
	let original_end_slot: number
	function handle_move_start(time_entry: Time_Entry){
		const current_start_slot = date_to_slot(time_entry.start, start_hour_24, step_in_minutes)
		const current_end_slot = date_to_slot(time_entry.end, start_hour_24, step_in_minutes)

		original_start_slot = current_start_slot
		original_end_slot = current_end_slot
	}

	let moved = false
	let current_slot_diff:number
	function handle_move(time_entry:Time_Entry, e: CustomEvent<Event_Detail_Move>){
		const slot_diff = e.detail.slot_diff
		if(slot_diff===0){ return }
		if(current_slot_diff === slot_diff){ return }

		moved = true

		current_slot_diff = slot_diff

		console.log({level:"dev", msg:"handle move", slot_diff})

		// const current_start_slot = date_to_slot(time_entry.start, start_hour_24, step_in_minutes)
		// const current_end_slot = date_to_slot(time_entry.end, start_hour_24, step_in_minutes)
		
		const new_start_slot = original_start_slot + slot_diff
		const new_end_slot = original_end_slot + slot_diff

		let new_start_minutes = slot_to_minutes(new_start_slot + 1, start_hour_24, step_in_minutes)
		let new_end_minutes = slot_to_minutes(new_end_slot + 1, start_hour_24, step_in_minutes)
		
		let new_start_date = minutes_to_date(new_start_minutes, date)
		let new_end_date = minutes_to_date(new_end_minutes, date)
	
		const modified_time_entry = time_entry_execute_action(time_entry,Time_Entry_Action.Form_Or_Time_Changes)
		modified_time_entry.start = new_start_date
		modified_time_entry.end = new_end_date
		console.log({
			level:"dev", 
			msg:"handle_move", 
			original_start_slot,
			original_end_slot,
			new_start_slot,
			new_end_slot,
			new_start_minutes,
			new_end_minutes,
			new_start_date,
			new_end_date,
			slot_diff,
			new_time_entry: modified_time_entry,
		})
		update_time_entry_by_id(time_entry.id, modified_time_entry)
	}

	function handle_move_done(time_entry:Time_Entry){
		if(!moved){ return }
		moved = false
		current_slot_diff = 0
		const modified_time_entry = time_entry_execute_action(time_entry, Time_Entry_Action.Form_Finished)
		console.log({level:"dev", msg:"_handle move done", time_entry, modified_time_entry})
		update_time_entry_by_id(time_entry.id, modified_time_entry)
	}
	function handle_paste(event:ClipboardEvent){
		if(!is_active_for_pasting){return}
		const text = event.clipboardData?.getData('text/json');
		if(!text){ return }
		let time_entries = JSON.parse(text) as Time_Entry[]
		const time_entries_to_create: Partial<Time_Entry>[] = time_entries.map(te => {
			const start = new Date(te.start)
			const end = new Date(te.end)
			const new_start = new Date( `${date_format_iso(date)} ${date_format_time(start)}` )
			const new_end = new Date( `${date_format_iso(date)} ${date_format_time(end)}` )
			te.start = new_start
			te.end = new_end
			te = time_entry_execute_action(te, Time_Entry_Action.Form_Finished)
			return {
				...te,
				id: undefined,
			}
		})	
		create_time_entry_v2(...time_entries_to_create)
	}

	let is_active_for_pasting = false
	function handle_mouseover(){
		is_active_for_pasting = true
	}
	function handle_mouseout(){
		is_active_for_pasting = false
	}
	
</script>

<svelte:body 
	on:paste={handle_paste}
/>

<day-grid 
	on:mouseover={handle_mouseover}	
	on:mouseout={handle_mouseout}	
	on:focus
	on:blur
>
	<DayGridLayout 
		no_of_slots={no_of_slots}
		items={items}
		show_hours={show_hours}
		on:createstart={handle_create_start}
		on:createprogress={handle_create_progress}
		on:createstop={handle_create_stop}
		on:resizeprogress={handle_resize_progress}
		on:resizedone={handle_resize_done}
	/>
</day-grid>