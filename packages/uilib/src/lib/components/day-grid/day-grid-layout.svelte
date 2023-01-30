	
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

</script>

<day-grid-layout style={`--no-of-slots:${no_of_slots}`}>
	{#each slots as slot, si}
		<div 
			class="slot"
			style={`--row-end:${si+2}`}
			on:focus
			on:mousedown={() => handle_mouse_down(si)}
			on:mouseup={() => handle_mouse_up(si)}
			on:mouseover={() => handle_mouse_over(si)}
		>
			&nbsp; {si}
		</div>
	{/each}

	{#each items as item }
		<div class="event" style={`--event-start:${item.start+1}; --event-end:${item.end+1};`}>
			<svelte:component this={item.component} {...item.props} />
		</div>
	{/each}
</day-grid-layout>

<style>
	day-grid-layout{
		height:  100%;
		width:   100%;
		display: grid;
		grid-template-rows: repeat( calc(var(--no-of-slots)-1), 10px);
		
		border: red thin solid;
	}

	.slot {
		border-top: 	  thin solid var(--color-blue-3);
		background-color: var(--color-blue-4);
		user-select: 	  none;

		grid-row-start:    calc( var(--row-end) - 1 );
		grid-row-end: 	   var(--row-end);
		grid-column-start: 1;
		grid-column-end:   2;
	}
	.slot:hover{
		background-color: var(--color-blue-5);
	}

	.event {
		background-color: var(--color-blue-1)cc;
		position: relative;
		margin: 0  10px;
		display: block;
		border-radius: var(--border-radius);
		padding: 0 0.5rem;
		backdrop-filter: blur(3px);
		border: black thin solid;


		grid-row-start:    var(--event-start);
		grid-row-end: 	   var(--event-end);
		grid-column-start: 1;
		grid-column-end:   2;
		pointer-events: none;
	}
</style>