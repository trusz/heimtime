<script lang="ts">
	import { Example } from "$lib/components/internal/example"
	import Card from "./card.svelte"

	let container_width = 400;
	let container_height = 100;

	let date_start = new Date("2000-01-01 13:30")
	let date_end = new Date("2000-01-01 14:15")
	let project = "Heimtime"
	let task = "development"
	let description = "building card component"

</script>

<Example name="Card">
	<div><label for="container_width">Container width</label></div>
	<div><input id="container_width" type="range" min=100 max=800 bind:value={container_width} /></div>

	<div><label for="container_width">Container height</label></div>
	<div><input id="container_width"  type="range" min=30 max=400 bind:value={container_height} /></div>
	
	<div class="container" style={`width:${container_width}px; height:${container_height}px`}>
		<Card 
			date_start={date_start}
			date_end={date_end}
			project={project}
			task={task}
			description={description}
		/>
	</div>
</Example>


<style>
	.container{
		border: gray solid thin;
		padding: 1rem;
	}
</style>