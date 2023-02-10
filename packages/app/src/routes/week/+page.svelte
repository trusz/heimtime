<script lang="ts">
	import { context_api_get } from "../../api"
	import {onMount} from "svelte"
  	import { 
		date_week_frames, 
		type Project, 
		date_add_days, 
		time_entry_context_init,
        time_entry_context_use,
	} from "@heimtime/api";
	import { WeekGrid, context_card_init, WeekSwitcher } from "@heimtime/uilib"
	import { time_entry_sync } from "./time_entry_sync"
	
	// 
	// Config
	// 
	export const ssr = false;
	export const prerender = false;
	const api = context_api_get()
	
	// 
	// Setup
	// 
	context_card_init()
	console.log({level:"dev", msg:"time_entry_context_init"})
	time_entry_context_init()

	let [date_start, date_end] = date_week_frames()
	const time_entry_context = time_entry_context_use()
	const { create_time_entry_v2, store_time_entry } = time_entry_context

	let project_sets: Project[][] = []
 
	$: load_project_sets(date_start, date_end)
	time_entry_sync(api)



	// 
	// Functions
	// 
	async function load_project_sets(start: Date, end: Date){
		let project_promises: Promise<Project[]>[] = []
		for(let di=0; di<7; di++){
			const d = date_add_days(start, di)
			const prom = api.fetch_projects(d)
			project_promises.push(prom)
		}

		project_sets = await Promise.all(project_promises)
		const time_entires = await api.fetch_time_entires(start, end)
		store_time_entry.set([])
		for(const te of time_entires){
			create_time_entry_v2(te)
		}

		// return sets
	}

	function handle_week_change(event: CustomEvent<{start: Date, end: Date}>){
		const {start, end} = event.detail
		date_start = start
		date_end = end
	}
	


</script>

<week>
	<h1>Heimtime</h1>
	<WeekSwitcher on:weekchanged={handle_week_change} />
	<WeekGrid project_sets={project_sets} start_date={date_start} />
</week>

<style>
	week{
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>