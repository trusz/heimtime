<script lang="ts">
  	import type { Event_Save } from "$lib/components/event_form/events";
  	import { use_project_context, type Project, type Task } from "@heimtime/api";
	import { createEventDispatcher } from "svelte"

	export let selected_task: Task | undefined

	const {store_projects} = use_project_context()
	let projects: Project[]
	$: projects = $store_projects

	const dispatch = createEventDispatcher()

	function handle_submit(e:unknown){
		const detail: Event_Save = {
			task: new_selected_task,
			description: new_description,
		}
		dispatch("save", detail)
	}
	
	let new_selected_task: Task | undefined = selected_task

	let new_description = ""

</script>

<event-form>
	<form on:submit={handle_submit}>
	<label>
		<span>Task</span>
		<select bind:value={new_selected_task}>
			{#each projects as project}
				<optgroup label={project.name}>
					{#each project.tasks as task}
						<option value={task}>{task.name}</option>
					{/each}
				</optgroup>
			{/each}
		</select>
	</label>

	<label>
		<span>Description</span>
		<textarea rows=5 bind:value={new_description} />
	</label>

	<button type="submit">save</button>
</form>
</event-form>

<style>

	

	form{
		display: flex;
		flex-direction: column;
		gap:0.5rem;
		padding: 1rem;
	}

	select,
	textarea {
		padding:0.2rem 0.3rem;
		background-color: black;
		color: white;
		border-radius: var(--border-radius);
	}

	label{
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}
</style>