<script lang="ts">
  import { tick } from "svelte";

	export let is_open = false
	export let anchor_el: HTMLElement

	const gap_offset = 16;
	let popup: HTMLElement
	
	function handle_body_click(event: MouseEvent){

		const target = event.target as HTMLElement
		if(!anchor_el){ return }
		// const is_inside = anchor_el.contains(target)
		const is_inside = popup.contains(target)
		console.log({level:"dev", msg:"body click", is_open, target, is_inside})
				

		if(!is_open){ return }
		if(is_inside){ return }
		is_open = false
	}

	$: is_open && set_dropdown_position()
	async function set_dropdown_position(){
		await tick()
		const anchor_rect = anchor_el.getBoundingClientRect()
		const popup_rect = popup.firstElementChild!.getBoundingClientRect()
		const window_width = window.innerWidth

		pos_y = `${anchor_rect.top + anchor_rect.height/2 - popup_rect.height/2}px`
		pos_x = `${anchor_rect.left - popup_rect.width - gap_offset}px` // left

		const pos_x_right = anchor_rect.left + anchor_rect.width + gap_offset
		pos_x = `${pos_x_right}px`
		
		const fit_to_the_right = pos_x_right + popup_rect.width < window_width
		if(!fit_to_the_right){
			const pos_x_left  = anchor_rect.left - popup_rect.width - gap_offset
			pos_x = `${pos_x_left}px`
		}
				
	}
	let pos_x = "0px";
	let pos_y = "0px";

</script>

<svelte:body on:click|capture={handle_body_click} />

<popup>
	<div 
		class="popup" 
		class:show={is_open}
		style={ `--pos-x:${pos_x}; --pos-y:${pos_y};`} 
		bind:this={popup}
	>
		<slot></slot>
	</div>
</popup>

<style>
	popup{
		display: inline-block;
	}
	

	.popup{
		position: relative;
		position: fixed;
		inset: 	  0 auto auto 0;
		z-index:  1000;
		transform: translate3d(var(--pos-x,0), var(--pos-y,0), 0px);

		background: var(--color-dark-glass);
		border: thin solid black;
		backdrop-filter: blur(3px);
		border-radius: var(--border-radius);
		/* box-shadow: 0 0 7px 1px black; */

		display: none;
	}

	.popup.show{
		display: inline-block;

	}
</style>