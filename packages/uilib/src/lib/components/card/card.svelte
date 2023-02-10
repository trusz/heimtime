<script lang="ts">
/*
	Layout:
	┌────────────────────────────────────────┐
	│13:00 - 14:00                       WESP│
	│                             Development│
	│                Onboarding Documentation│
	│                                        │
	└────────────────────────────────────────┘
*/

	import { createEventDispatcher } from "svelte"
	import { Time_Entry_State, date_format_time, type Time_Entry } from "@heimtime/api";
	import type { Event_Save } from "$lib/components/event_form/events";
	import type { Event_Detail_Delete } from "$lib/components/card/card_events";
	import { Popup } from "../popup"
	import { EventForm } from "../event_form"
	import { context_card_use } from "./card_context"
  	import { string_to_color } from "$lib/components/card/color-hash";

	// 
	// Input Props
	// 
	export let date_start: Date
	export let date_end: Date
	export let time_entry: Time_Entry
	export let selected: boolean = false


	const transparency_hex_default = "40"
	const transparency_hex_border = "60"
	const transparency_hex_select = "60"
	const transparency_hex_border_select = "40"
	let color = "#ffffff18"
	$: color = string_to_color( time_entry.project?.name??"" )
	$: bg_color = color + transparency_hex_default
	$: bg_color_select = color + transparency_hex_select
	$: border_color = color + transparency_hex_border
	// $: border_color_select = color + transparency_hex_border_select
	$: border_color_select = "#ffffff" + transparency_hex_border_select
	// 
	// Config
	// 
	let anchor: HTMLElement

	// 
	// Setup
	// 
	const context_card = context_card_use()
	const store = context_card.store
	$: state = $store.get(time_entry.id)
	$: selected = state?.is_selected ?? false
	$: is_form_open = state?.is_form_open ?? false


	// 
	// Actions
	// 
	function format_time_span(start: Date, end: Date): string {
		return `${date_format_time(start)} - ${date_format_time(end)}`
	}

	function handle_click(event: MouseEvent){
		const is_addition = event.metaKey || event.ctrlKey
		if(is_addition){
			context_card.select_card_add(time_entry.id)
			return
		}

		context_card.select_card(time_entry.id)
	}

	function handle_dbclick(){
		context_card.open_form(time_entry.id)
	}

	const dispatch = createEventDispatcher()
	function handle_save(e: CustomEvent<Event_Save>){
		dispatch("save", e.detail)
		context_card.close_form(time_entry.id)
	}

	function handle_delete(){
		const detail: Event_Detail_Delete = {id: time_entry.id}
		dispatch("delete", detail)
		context_card.close_form(time_entry.id)
	}

	function handle_close(){
		context_card.close_form(time_entry.id)
	}

	$: project_name = time_entry.project?.name ?? ""
	$: task_name = time_entry.task?.name ?? ""
	$: description = time_entry.description ?? ""

	$: style = [
		`--bg-color:${bg_color}`,
		`--bg-color-select:${bg_color_select}`,
		`--border-color:${border_color}`,
		`--border-color-select:${border_color_select}`,
	].join("; ")

	const rem_in_px = 16
	let dragging = false
	let start_position: {x:number, y:number}
	let current_position: {x:number, y:number}
	function handle_drag_start(event: MouseEvent){
		dragging=true
		start_position = {
			x: event.screenX,
			y: event.screenY,
		}
		// console.log({level:"dev", msg:"drag start", event})
		dispatch("movestart")
	}
	function handle_drag(event: MouseEvent){
		if(!dragging){	return }
		if(event.screenY === 0){ return }
		
		current_position = {
			x: event.screenX,
			y: event.screenY,
		}
		const diff = {
			x: current_position.x - start_position.x,
			y: current_position.y - start_position.y,
		}
		const grid_y = Math.floor(diff.y / rem_in_px)
		dispatch("move", {slot_diff:grid_y})
	}
	function handle_drag_end(event: Event){
		if(!dragging){ return }
		dragging=false
		// console.log({level:"dev", msg:"drag end", event})
		dispatch("movedone")
	}

</script>

<card 

	draggable="false"
	on:mousedown={handle_drag_start}

	on:click={handle_click}
	on:dblclick={handle_dbclick}
	on:keypress 
	bind:this={anchor} 
	class:dragging
	class:selected
	class:stable      = {time_entry.state === Time_Entry_State.Stable}
	class:in-progress = {time_entry.state === Time_Entry_State.In_Progress}
	class:saving 	  = {time_entry.state === Time_Entry_State.Saving}
	class:error		  = {time_entry.state === Time_Entry_State.Error}
	class:deleting	  = {time_entry.state === Time_Entry_State.Deleting}

	style={style}

>
	<!-- <div class="time-span">{format_time_span(date_start, date_end)}</div> -->
	<div class="time-span">{date_format_time(date_start)} <br /> {date_format_time(date_end)}</div>
	<div class="project">{project_name}</div>
	<div class="task">{task_name}</div>
	<div class="description">{description}</div>
</card>

<Popup bind:is_open={is_form_open} anchor_el={anchor}>
	<EventForm 
		selected_task={time_entry.task}
		description={time_entry.description}
		is_open={is_form_open}
		on:save={handle_save}
		on:delete={handle_delete}
		on:close={handle_close}
	/>
</Popup>

<svelte:body
	on:mousemove={handle_drag}
	on:mouseup={handle_drag_end}
/>

<style>
	card{

		border:  	      var(--border-color, rgba(255,255,255,0.1)) solid 2px;
		display: 	      grid;
		gap: 			  0.75rem;
		height:  	      100%;
		border-radius:    var(--border-radius);
		background-color: var(--bg-color, #ffffff18);
		
		backdrop-filter:  		 blur(3px);
		-webkit-backdrop-filter: blur(3px);

		padding: 0.3rem 0.5rem;
		margin:  0 0.2rem;
		grid-template-columns: auto auto 1fr;
		grid-auto-rows: min-content;
		overflow: hidden;

		user-select: none;

		transition: opacity 100ms;
	}

	card.dragging{
		/* opacity: 0.9; */
		cursor:grabbing;
	}

	card.in-progress{

		--dash-color: var(--color-orange-1);

		/* https://stackoverflow.com/questions/28365839/dashed-border-animation-in-css3-animation */
		background-image: linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%);
		background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
		background-size: 15px 2px, 15px 2px, 2px 15px, 2px 15px;
		background-position: left top, right bottom, left bottom, right top;
	}

	card.deleting,
	card.saving {
		--dash-color: var(--color-orange-1);

		/* https://stackoverflow.com/questions/28365839/dashed-border-animation-in-css3-animation */
		background-image: linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%);
		background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
		background-size: 15px 2px, 15px 2px, 2px 15px, 2px 15px;
		background-position: left top, right bottom, left bottom, right top;
		animation: border-dance 0.7s infinite linear;
	
	}

	card.error{
		--dash-color: var(--color-red-1);
		background-image: linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%);
		background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
		background-size: 15px 2px, 15px 2px, 2px 15px, 2px 15px;
		background-position: left top, right bottom, left bottom, right top;
		animation: border-bounce 0.7s infinite ease;
		
	}
	
	card.deleting {
		opacity: 0.5;
	}

	card.selected {
		border-color:  	  var(--border-color-select, rgba(255,255,255,0.1));
		background-color: var(--bg-color-select,  rgba(255,255,255,0.3));
	}
	

	@keyframes border-dance {
		0% {
			background-position: left top, right bottom, left bottom, right top;
		}
		100% {
			background-position: left 15px top, right 15px bottom , left bottom 15px , right   top 15px;
		}
	}

	@keyframes border-bounce {
		0% {
			background-position: left top, right bottom, left bottom, right top;
		}
		50% {
			background-position: left 15px top, right 15px bottom , left bottom 15px , right   top 15px;
		}
		100% {
			background-position: left 0 top, right 0 bottom , left bottom 0 , right   top 0;
		}
	}

	
	.time-span{
		grid-area: 1 / 1 / 4 / 2;
		/* grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 4; */
	}

	
	.project,
	.task,
	.description{
		text-align: right;
		justify-self: start;
		grid-column-start: 2;
		grid-column-end: 3;

		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		max-width: 100%;
	}

	card > div {
		display: inline-block;
		width: auto;
	}

</style>
