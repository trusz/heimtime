<script lang="ts">
  import { Example } from "../internal";
	import Popup from "./popup.svelte"

	let anchor: HTMLElement
	let is_open = false

</script>

<h1>Overflow Menu</h1>

<Example name="Default Icon">
	<label for="is_open">Is Open?</label>
	<input id="is_open" type="checkbox" bind:checked={is_open} />
	{is_open}


	<div class="anchor" bind:this={anchor}>&nbsp;</div>
	<Popup is_open={is_open} anchor_el={anchor}>
		<span>hello: {is_open}</span>
	</Popup>
</Example>


<style>
	.anchor {
		background-color: gray;
		width: 50px;
		height: 50px;
	}
</style>