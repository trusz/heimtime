<script lang="ts">
	import { context_api_get } from "../../api"
	import {onMount} from "svelte"
  	import { use_project_context, init_project_context } from "@heimtime/api";
	import { EventForm } from "@heimtime/uilib"
	
	export const ssr = false;
	export const prerender = false;
	const api = context_api_get()
	init_project_context()
	const {add_project, store_projects } = use_project_context()

	onMount(async ()=>{
		const projects = await api.fetch_projects()
		add_project(...projects)

	})


</script>

<h1>Week</h1>

<EventForm />

<ul>
	{#each $store_projects as project }
		<li>{project.name}</li>
	{/each}
</ul>