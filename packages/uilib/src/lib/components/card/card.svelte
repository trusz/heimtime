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
	import { Time_Entry_State, type Project, type Task, date_format_time, type Time_Entry } from "@heimtime/api";
	import type { Event_Save } from "$lib/components/event_form/events";
	import { Popup } from "../popup"
	import { EventForm } from "../event_form"

	// 
	// Input Props
	// 
	export let date_start: Date
	export let date_end: Date
	export let time_entry: Time_Entry


	let anchor: HTMLElement
	let is_popup_open = false

	// const format_time = Intl.DateTimeFormat("de-DE", {timeStyle:"short"}).format

	function format_time_span(start: Date, end: Date): string {
		return `${date_format_time(start)} - ${date_format_time(end)}`
	}

	function handle_click(){
		is_popup_open = true
	}

	const dispatch = createEventDispatcher()
	function handle_save(e: CustomEvent<Event_Save>){
		dispatch("save", e.detail)
		is_popup_open = false
	}

	$: project_name = time_entry.project?.name ?? ""
	$: task_name = time_entry.task?.name ?? ""
	$: description = time_entry.description ?? ""

</script>

<card 
	on:dblclick={handle_click} 
	on:keypress 
	bind:this={anchor} 
	class:stable={time_entry.state === Time_Entry_State.Stable}
	class:in-progress={time_entry.state === Time_Entry_State.In_Progress}
	class:saving={time_entry.state === Time_Entry_State.Saving}
	class:error={time_entry.state === Time_Entry_State.Error}
	class:deleting={time_entry.state === Time_Entry_State.Deleting}
>
	<div class="time-span">{format_time_span(date_start, date_end)}</div>
	<div class="project">{project_name}</div>
	<div class="task">{task_name}</div>
	<div class="description">{description}</div>
</card>

<Popup bind:is_open={is_popup_open} anchor_el={anchor}>
	<EventForm 
		selected_task={time_entry.task}
		on:save={handle_save}
	/>
</Popup>


<style>
	card{

		border:  	      rgba(255,255,255,0.1) solid thin;
		display: 	      grid;
		gap: 			  0px;
		height:  	      100%;
		border-radius:    var(--border-radius);
		background-color: rgba(255,255,255,0.1);
		backdrop-filter:  blur(3px);

		padding: 0.3rem 0.5rem;
		margin:  0 1rem;
		grid-template-columns: 1fr auto;
		grid-auto-rows: 1rem;
		overflow: hidden;

		transition: all 1000ms;

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
	
	card.deleting {
		opacity: 0.5;
	}
	

	@keyframes border-dance {
			0% {
				background-position: left top, right bottom, left bottom, right top;
			}
			100% {
				background-position: left 15px top, right 15px bottom , left bottom 15px , right   top 15px;
			}
		}

	.project{
		justify-self: end;
	}
	.task,
	.description{
		justify-self: end;
		grid-column-start: 1;
		grid-column-end: 3;
	}

	card > div {
		display: inline-block;
		width: auto;
	}

</style>
