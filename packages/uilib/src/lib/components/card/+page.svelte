<script lang="ts">
	import { Example } from "$lib/components/internal/example"
  import { Time_Entry_State, use_project_context, init_project_context, new_project, new_task, new_time_entry} from "@heimtime/api";
	import Card from "./card.svelte"

	// 
	// Context
	// 
	init_project_context()
	const { add_project, store_projects } = use_project_context()
	add_project(
		new_project(
			0,
			"first",
			[
				new_task(0, "1.1"),
				new_task(1, "1.2"),
				new_task(2, "1.3"),
			]
		),
		new_project(
			1,
			"second",
			[
				new_task(3, "2.1"),
				new_task(4, "2.2"),
				new_task(5, "2.3"),
			]
		)
	)

	// 
	// Component
	// 

	let container_width = 400;
	let container_height = 100;

	let date_start = new Date("2000-01-01 13:30")
	let date_end = new Date("2000-01-01 14:15")
	$: time_entry = new_time_entry(
		undefined,
		date_start,
		date_end,
		state,
		$store_projects[0],
		$store_projects[0].tasks[0],
	)
	$: project = $store_projects[0]
	$: task = project.tasks[0]
	let description = "building card component"
	let state: Time_Entry_State = Time_Entry_State.Stable

</script>

<Example name="Card">
	<div><label for="container_width">Container width</label></div>
	<div><input id="container_width" type="range" min=100 max=800 bind:value={container_width} /></div>

	<div><label for="container_width">Container height</label></div>
	<div><input id="container_width"  type="range" min=30 max=400 bind:value={container_height} /></div>

	<div>
		<select bind:value={state}>
			<option value={Time_Entry_State.Stable}>	  Stable </option>
			<option value={Time_Entry_State.In_Progress}> In Progress </option>
			<option value={Time_Entry_State.Saving}> 	  Saving </option>
			<option value={Time_Entry_State.Error}> 	  Error </option>
			<option value={Time_Entry_State.Deleting}> 	  Deleting </option>
		</select>
	</div>
	
	<div class="container" style={`width:${container_width}px; height:${container_height}px`}>
		<Card 
			date_start={date_start}
			date_end={date_end}
			time_entry={time_entry}
		/>
	</div>
</Example>


<style>
	.container{
		border: gray solid thin;
		padding: 1rem;
	}
</style>