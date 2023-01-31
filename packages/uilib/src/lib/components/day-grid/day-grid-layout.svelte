	
<script lang="ts">
	import { createEventDispatcher } from "svelte"
	import type { Item } from "./item"

	const dispatch 				 = createEventDispatcher()
	const dispatchCreateStart    = (index:number) => dispatch("createstart", index)
	const dispatchCreateProgress = (index:number) => dispatch("createprogress", index)
	const dispatchCreateStop     = (index:number) => dispatch("createstop", index)

	export let no_of_slots = 0;
	export let items: Item[] = []

	$: slots = new Array(no_of_slots).fill(null,0, no_of_slots)

	let creating = false

	function handle_mouse_down(index:number){
		dispatchCreateStart(index);
		creating = true
	}

	function handle_mouse_over(index:number){
		if(!creating){ return }

		dispatchCreateProgress(index)
	}
	
	function handle_mouse_up(index:number){
		if(!creating){ return }

		dispatchCreateStop(index)
		creating = false
	}

	function zeroPadding(n:number): string {
		return String(n).padStart(2,"0")
	}

</script>

<day-grid-layout style={`--no-of-slots:${no_of_slots}`}>
	{#each slots as slot, si}
		<div 
			class="slot"
			class:full={si%4===0}
			style={`--row-end:${si+2}`}
			data-hour={Math.floor((si/4)+6)}
			data-minutes={zeroPadding((si%4)*15)}
			on:focus
			on:mousedown={() => handle_mouse_down(si)}
			on:mouseup={() => handle_mouse_up(si)}
			on:mouseover={() => handle_mouse_over(si)}
		>
			&nbsp;
		</div>
	{/each}

	{#each items as item }
		<div 
			class="event" 
			class:dont-interact={creating}
			style={`--event-start:${item.start+1}; --event-end:${item.end+1};`}
		>
			<svelte:component this={item.component} {...item.props} />
		</div>
	{/each}
</day-grid-layout>

<style>
	day-grid-layout{

		--left-margin: 2rem;

		height:  100%;
		width:   calc(100% - var(--left-margin));
		margin-left: var(--left-margin);
		display: grid;
		/* gap: 1px; */
		/* grid-template-rows: repeat( calc(var(--no-of-slots)-1), 25px); */
		grid-auto-rows: 1rem;
		/* border: red thin solid; */
	}

	.slot {
		/* border-top: thin solid var(--color-blue-1); */
		/* background-color: var(--color-blue-4); */
		user-select: 	  none;

		transition: all 10ms;

		grid-row-start:    calc( var(--row-end) - 1 );
		grid-row-end: 	   var(--row-end);
		grid-column-start: 1;
		grid-column-end:   2;
	}
	.slot:hover{
		background-color: var(--color-gray-6);
	}
	.slot::before{
		content: " ";
		
	}

	.slot.full {
		border-top: thin solid var(--color-gray-5);
	}


	.slot::after,
	.slot::before{
		position: relative;
		right: calc(var(--left-margin) + 0.5rem);
		bottom: 0.5rem;
		text-align: right;
		width: 2ch;
		display: inline-block;
	}

	.slot::after,
	.slot:not(.full)::after{
		content: ":" attr(data-minutes);
		right: calc(var(--left-margin) + 1rem - 2px);

		width: 3ch;
		opacity: 0;
		color: var(--color-gray-4);

		transition: all 50ms ease-in-out;
	}

	.slot.full:hover::after,
	/* .slot:not(.full):hover + .slot::after, */
	.slot:hover + .slot::after,
	.slot:not(.full):hover::after{
		opacity: 1;
	}

	.slot.full::before{
		content: attr(data-hour);
		
	}

	.event {
		display: block;

		grid-row-start:    var(--event-start);
		grid-row-end: 	   var(--event-end);
		grid-column-start: 1;
		grid-column-end:   2;
	}

	.event.dont-interact{
		pointer-events: none;
	}
</style>