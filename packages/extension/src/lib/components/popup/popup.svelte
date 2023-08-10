<script lang="ts">
  import { tick } from "svelte";

	//
	// INPUT
	// 
	export let is_open = false
	export let anchor_el: HTMLElement | undefined
	export let track_scrolling = false

	const gap_offset = 16;
	let popup: HTMLElement
	
	function handle_body_click(event: MouseEvent){
		if(!is_open){ return }

		const target = event.target as HTMLElement
		if(!anchor_el){ return }

		const is_inside = popup.contains(target)
		const is_anchor = anchor_el.contains(target)

		
		if(is_inside || is_anchor){ return }
		// is_open = false
	}

	$: is_open && set_dropdown_position(anchor_el)
	$: console.log({anchor_el})
	// $: set_dropdown_position(anchor_el)
	async function set_dropdown_position(el?: HTMLElement){
		await tick()
		if(!el){ return }

		// Calculate the positions and dimensions of the elements involved
		const anchor_rect = el.getBoundingClientRect()
		const popup_rect = popup.firstElementChild!.getBoundingClientRect()
		const window_width = window.innerWidth

		const scroll_el = find_closest_scrolling_element(el)

		// Calculate the vertical position of the popup
		const new_top = anchor_rect.top + anchor_rect.height/2 - popup_rect.height/2		
		const scroll_top = scroll_el.getClientRects()[0].top
		const scroll_bottom = scroll_el.getClientRects()[0].bottom
		const scroll_bottom_adjusted = scroll_bottom - popup_rect.height
		y = Math.max(scroll_top, Math.min(new_top, scroll_bottom_adjusted));

		// Calculate the horizontal position of the popup
		x = anchor_rect.left - popup_rect.width - gap_offset
		const pos_x_right = anchor_rect.left + anchor_rect.width + gap_offset
		x = pos_x_right
		const fit_to_the_right = pos_x_right + popup_rect.width < window_width
		if(!fit_to_the_right){
			const pos_x_left  = anchor_rect.left - popup_rect.width - gap_offset
			x = pos_x_left
		}
				
	}
	
	let x = 0;
	let y = 0;
	$: pos_x = `${x}px`;
	$: pos_y = `${y}px`;

	// TODO: remove the listener at some point
	$: scroll_tracking(anchor_el, is_open, track_scrolling)
	function scroll_tracking(node?: HTMLElement, is_open?: boolean, track_scrolling?: boolean){
		if(!is_open) { return }
		if(!track_scrolling){ return }
		if(!node){ return }

		const scroll_el = find_closest_scrolling_element(node)
		scroll_el.removeEventListener("scroll", handle_parent_scroll)
		scroll_el.addEventListener("scroll", handle_parent_scroll)
	}


	function find_closest_scrolling_element(node?: HTMLElement | null): HTMLElement{
		if(!node){ return document.body }

		const node_rect = node.getClientRects()
		const node_height = node_rect[0].height

		if(node.scrollHeight > node.clientHeight && node_height > 0){
			return node;
		}
		if(!node.parentElement){
			console.warn({level:"warn", msg:"finding scrolling element, node does not have parent", node})
		}
		return find_closest_scrolling_element(node.parentNode as HTMLElement);
	}

	function handle_parent_scroll(event: Event){
		set_dropdown_position(anchor_el)
	}

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
		display: inline;
	}
	

	.popup{
		position: relative;
		position: fixed;
		inset: 	  0 auto auto 0;
		z-index:  1000;
		transform: translate3d(var(--pos-x,0), var(--pos-y,0), 0px);

		background: 	 var(--color-dark-glass);
		border: 		 thin solid gray;
		backdrop-filter: blur(30px);
		border-radius: 	 var(--border-radius);
		box-shadow: 	 0 0 7px 1px black;

		display: none;
	}

	.popup.show{
		display: inline;

	}
</style>