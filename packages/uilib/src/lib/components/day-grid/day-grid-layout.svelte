	
<script lang="ts">
	import { createEventDispatcher } from "svelte"
	import type { Item } from "./item"
	
	// 
	// Input Props
	// 
	export let no_of_slots 	 	  = 0;
	export let items: 	   Item[] = []
	export let show_hours: boolean

	// 
	// Setup
	// 
	const dispatch 				   = createEventDispatcher()
	const dispatch_create_start    = (index:number) => dispatch("createstart", index)
	const dispatch_create_progress = (index:number) => dispatch("createprogress", index)
	const dispatch_resize 		   = (index:number, id:number, up:boolean) => dispatch("resizeprogress", {index,id,up})
	const dispatch_resize_done 	   = (id:number) => dispatch("resizedone", id)
	const dispatch_create_stop     = (index:number) => dispatch("createstop", index)
	$: slots = new Array(no_of_slots).fill(null,0, no_of_slots)

	// 
	// Actions
	// 
	let creating = false
	function handle_mouse_down(index:number){
		dispatch_create_start(index);
		creating = true
	}

	function handle_mouse_over(index:number){
		if(!creating){ return }
		if(resizing_id !== -1 ){
			dispatch_resize(index, resizing_id, resizing_up)
			return
		}
		dispatch_create_progress(index)
	}
	
	function handle_mouse_up(index:number){
		if(!creating){ return }

		if(resizing_id !== -1){
			dispatch_resize_done(resizing_id)
			resizing_id = -1
			creating = false
			return
		}
		
		dispatch_create_stop(index)
		creating = false
	}

	let resizing_id = -1
	let resizing_up = false
	function handle_resize_mouse_down(id: number, up = false){
		resizing_id = id
		resizing_up = up
		console.log({level:"dev", msg:"resizing", id})
		creating = true
	}

	function handle_resize_mouse_up(id: number){
		console.log({level:"dev", msg:"handle_resize_mouse_up", id})
		resizing_id = -1
		creating = false
		dispatch_resize_done(id)
	}

	function zeroPadding(n:number): string {
		return String(n).padStart(2,"0")
	}

</script>

<day-grid-layout
	style={`--no-of-slots:${no_of_slots}`}
	class:disable-labels={!show_hours}
>
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
			<div 
				class="resizer" 
				on:mousedown={() => handle_resize_mouse_down(item.props.id,true)}
				on:mouseup={() => handle_resize_mouse_up(item.props.id)}
			>
				&nbsp;
			</div>

			<svelte:component 
				this={item.component} 
				{...item.props} 
				on:save={item.props.onsave} 
				on:delete={item.props.ondelete} 
			/>
			<div 
				class="resizer" 
				on:mousedown={() => handle_resize_mouse_down(item.props.id)}
				on:mouseup={() => handle_resize_mouse_up(item.props.id)}
			>
				&nbsp;
			</div>
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

		user-select: none;
	}

	day-grid-layout.disable-labels{
		--left-margin: 4px;
	}

	day-grid-layout.disable-labels .slot::after,
	day-grid-layout.disable-labels .slot::before{
		content: none;
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
		position:   relative;
		right:      calc(var(--left-margin) + 0.5rem);
		bottom:     0.5rem;
		text-align: right;
		width: 		2ch;
		display: 	inline-block;
	}

	.slot::after,
	.slot:not(.full)::after{
		content: ":" attr(data-minutes);
		right:   calc(var(--left-margin) + 1rem - 2px);

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

		resize: vertical;
	}

	.event.dont-interact{
		pointer-events: none;
	}

	.resizer{
		height: 5px;
		/* background-color: red; */
		cursor: row-resize;
	}
</style>