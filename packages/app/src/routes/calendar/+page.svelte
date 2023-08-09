<script lang="ts">
	import { context_api_get } from "../../api"
  	import { 
		type Project, 
		date_add_days, 
        time_entry_context_init_v2,
        time_entry_context_use_v2,
        context_project_init,
        context_project_use,
        date_format_iso,
	} from "@heimtime/api";
	import { Calendar, type Date_Changed_Info} from "@heimtime/uilib"
  	import { time_entry_sync } from "./time_entry_sync";
	
	// 
	// Config
	// 
	
	//
	// Setup
	//
	const api = context_api_get()

	time_entry_context_init_v2()
	const ctx_time_entires = time_entry_context_use_v2()

	context_project_init()
	const ctx_projects = context_project_use()

	let date_start = new Date()
	let date_end = new Date()
	$: load_project_sets(date_start, date_end)
	$: load_time_entires(date_start, date_end)
	
	time_entry_sync(api)
	
	// 
	// Functions
	// 
	async function load_time_entires(start: Date, end: Date){
		const time_entires = await api.fetch_time_entires(start, end)
		ctx_time_entires.clear()
		for(const te of time_entires){
			ctx_time_entires.create_time_entry(te)
		}
	}

	async function load_project_sets(start: Date, end: Date) {
		let project_promises: Promise<Project[]>[]=[];
		for(let di=0;di<7;di++) {
			const d=date_add_days(start,di);
			const prom=api.fetch_projects(d);
			project_promises.push(prom);
		}

		const project_sets = await Promise.all(project_promises);

		for(let pi=0,pl=project_sets.length; pi<pl; pi++) {
			const d=date_add_days(start,pi);
			const project_set=project_sets[pi];
			ctx_projects.set_projects(date_format_iso(d),project_set);
		}
	}

	function handle_datechanged(event: CustomEvent<Date_Changed_Info>){
		const {start, end} = event.detail
		date_start = start
		date_end = end
	}
	


</script>

<calendar>
	<h1>Heimtime</h1>
	<Calendar on:datechanged={handle_datechanged} />
</calendar>

<style>
	calendar{
		display: 			grid;
		grid-template-rows: auto minmax(0, 1fr);
    	flex-direction: 	column;
		height:  			100%;
	}

	/* :global(calender .ec-day.ec-today){
		background-color: none;
	} */
</style>
