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

	import { Popup } from "../popup"
	import { EventForm } from "../event_form"

	export let date_start: Date
	export let date_end: Date
	export let project: string
	export let task: string
	export let description: string

	let anchor: HTMLElement
	let is_popup_open = false

	const format_time = Intl.DateTimeFormat("de-DE", {timeStyle:"short"}).format
	function format_time_span(start: Date, end: Date): string {
		return `${format_time(start)} - ${format_time(end)}`
	}

	function handle_click(){
		console.log({level:"dev", msg:"clicked"})
		is_popup_open = true
	}




</script>

<card on:dblclick={handle_click} on:keypress bind:this={anchor} >
	<div class="time-span">{format_time_span(date_start, date_end)}</div>
	<div class="project">{project}</div>
	<div class="task">{task}</div>
	<div class="description">{description}</div>
</card>

<Popup bind:is_open={is_popup_open} anchor_el={anchor}>
	<EventForm />
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

		transition: all 100ms;

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
