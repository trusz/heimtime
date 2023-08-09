<script lang="ts">
	import EventForm from "./event_form.svelte";
	import { Example } from "../internal";
	import type { Event_Save } from "./events";
    import { 
		init_project_context, 
		use_project_context, 
		new_project, 
		new_task, 
		type Task, 
		type Project,
	} from "../../api/project";

	init_project_context()
	const {store_projects, add_project} = use_project_context()

	// 
	// Setup context
	// 
	// store_projects.set([])
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
	let selected_task: Task | undefined
	$: (function init_selection(projects: Project[]){
		if(projects.length < 0){ return }
		selected_task = projects[0].tasks[0]
	}($store_projects))

	function handle_save(e: CustomEvent<Event_Save>){
	}

</script>


<Example name="Event Form" >
	<div class="ex-1">
		<EventForm 
			selected_task={selected_task}
			projects={$store_projects}
			on:save={handle_save}
		/>
	</div>
</Example>


<style>
	.ex-1{
		width: 300px;
	}

</style>