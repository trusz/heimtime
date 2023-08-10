<script lang="ts">
	import { createEventDispatcher } from "svelte"
  	import type { Event_Save } from "./events";
    import type { Task, Project } from "../../api/project";

	// 
	// Input Props
	// 
	export let selected_task: Task | undefined
	export let is_open = false
	export let description: string | undefined = undefined
	export let projects: Project[]

	// 
	// Context
	// 
	// const ctx_projects = context_project_use()
	// const {store_projects} = use_project_context()

	// 
	// Setup
	// 
	const dispatch = createEventDispatcher()
	// let projects: Project[]
	let anchor: HTMLElement 
	// const project_sets = ctx_projects.store
	// $: projects = $project_sets.get(date_format_iso())
	// $: console.log({level:"dev", msg:"event_form", projects, store_projects: $store_projects})
	let new_selected_task: Task | undefined = selected_task || projects[0].tasks[0]
	let new_description = description

	// 
	// Actions
	// 
	function handle_task_change(e: Event){
		const target = e.target as HTMLSelectElement
		const task_id = target.value

		for(const p of projects){
			const t = p.tasks.find( t => String(t.id) === task_id)
			if(t){
				new_selected_task = t
				break;
			}

		}
	}

	function handle_submit(){	
		const detail: Event_Save = {
			task: new_selected_task,
			description: new_description ?? "", 
		}
		console.log({level:"dev", msg:"submitting", detail })
		dispatch("save", detail)
	}

	function handle_delete(){
		dispatch("delete")
	}

	function handle_cmd_enter(event:KeyboardEvent){
		const has_all_keys = event.code === "Enter" && (event.metaKey || event.ctrlKey)
		if(!has_all_keys){ return }
		if(!is_open) { return }

		handle_submit()
	}

	function handle_escape(event:KeyboardEvent){
		const has_all_keys = event.code === "Escape"
		if(!has_all_keys){ return }
		if(!is_open){ return }

		dispatch("close")
	}

	// TODO: fix this
	// if we have this enabled we cannot open the form on creation-end
	// because we "clicking" outside of the form
	// async function handle_outside_click(event: MouseEvent){
	// 	const clicked_inside_form = anchor.contains(event.target as HTMLElement)
	// 	console.log({level:"dev", msg:"clicked inside?", clicked_inside_form, is_open})
	// 	if(clicked_inside_form){ return }
	// 	if(!is_open){ return }

	// 	dispatch("close")
	// }
	
</script>

<svelte:body 
	on:keydown={handle_cmd_enter} 
	on:keydown={handle_escape}
/> 

<event-form bind:this={anchor}>
	<form on:submit|preventDefault={handle_submit}>
	<label>
		<span>Task</span>
		<select on:change={handle_task_change}>
			{#each projects as project}
				<optgroup label={project.name}>
					{#each project.tasks as task}
						<option selected={selected_task?.id === task.id} value={task.id}>
							{task.id} | 
							{task.name}
						</option>
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
	<button on:click|preventDefault={handle_delete}>delete</button>
</form>
</event-form>

<style>

	

	form{
		display: 		flex;
		flex-direction: column;
		gap:			0.5rem;
		padding: 		1rem;
	}

	select,
	textarea {
		padding:		  0.2rem 0.3rem;
		background-color: black;
		color: 			  white;
		border-radius: 	  var(--border-radius);
	}

	label{
		display: 		flex;
		flex-direction: column;
		gap: 			0.2rem;
	}
</style>