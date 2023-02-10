<script lang="ts">
	import { Example } from "$lib/components/internal/example"
  	import { Time_Entry_State, use_project_context, init_project_context, new_project, new_task, new_time_entry2} from "@heimtime/api";
	import Card from "./card.svelte"
	import { context_card_init } from "./card_context"

	// 
	// Context
	// 
	init_project_context()
	context_card_init()
	const { add_project, store_projects } = use_project_context()
	add_project(
		new_project(
			0,
			"a project with a long name",
			[
				new_task(0, "1.1 and a similarly long task name"),
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
	$: time_entry = new_time_entry2(
		{
			start: date_start,
			end: date_end,
			state,
			project: $store_projects[0],
			task: $store_projects[0].tasks[0],
			description: "a maybe even longer description of a task"
		}
	)
	$: project = $store_projects[0]
	$: task = project.tasks[0]
	let description = "building card component"
	let state: Time_Entry_State = Time_Entry_State.Stable
	let selected = false

</script>

<Example name="Card">
	<div class="example-container">
		<div>
			<div><label for="container_width">Container width</label></div>
			<div><input id="container_width" type="range" min=100 max=800 bind:value={container_width} /></div>
		</div>

		<div>
			<div><label for="container_width">Container height</label></div>
			<div><input id="container_width"  type="range" min=30 max=400 bind:value={container_height} /></div>
		</div>

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
				selected={selected}
				on:click={() => selected = true}
			/>
		</div>
	</div>
</Example>


<style>
	.container{
		border: gray solid thin;
		padding: 1rem;
	}

	.example-container{ 
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>