<script lang="ts">
  import { context_card_use } from "$lib/components/card";
  	import { date_add_days, date_format_date_local, date_format_iso, date_is_today, Time_Entry_Action, time_entry_context_use, time_entry_execute_action, type Project, type Time_Entry } from "@heimtime/api";
	import { DayGrid } from "../day-grid"

	// 
	// Input Props
	// 
	export let project_sets: Project[][]
	export let start_date = new Date()

	// 
	// Config
	// 
	const NR_DAYs_TO_SHOW = 5

	// 
	// Setup
	// 
	let dates: Date[] = [start_date]
	$: (function(d: Date){
		for(let di=1; di<NR_DAYs_TO_SHOW; di++){

			const new_date = date_add_days(new Date(start_date.getTime()),di)
			dates.push(new_date)
		}

		console.log(dates)
	}(start_date))
	const card_context = context_card_use()

	const { 
		update_time_entry_by_id,
		store_time_entry,
	 } = time_entry_context_use()

	function delete_card_by_id(id: number){
		const time_entry_to_delete = $store_time_entry.find(te => te.id === id)
		if(!time_entry_to_delete){
			console.log({level:"warn", msg:"could not find time entry to delete, stopping", id})
			return
		}
		const modified_te = time_entry_execute_action(time_entry_to_delete, Time_Entry_Action.Delete)
		update_time_entry_by_id(id, modified_te)
	}


	function handle_keydown(event: KeyboardEvent){
		const has_all_keys = event.key === "Backspace" && event.metaKey
		if(!has_all_keys){
			return
		}
		const selected_card_ids = card_context.get_selected_card_ids()
		for(const id of selected_card_ids){
			delete_card_by_id(id)
		}
	}
</script>

<svelte:body on:keydown={handle_keydown} />

<week-grid>

	{#each dates as date, di}
		<div class="day-container">
			<div 
				class="date"
				class:today={date_is_today(date)}
			>
				{date_format_date_local(date)}
			</div>
			<DayGrid 
				show_hours={di===0}
				date={date} 
				projects={project_sets[di]} 
			/>
		</div>
	{/each}
	
</week-grid>

<style>
	week-grid{
		display: 		flex;
		flex-direction: row;
		gap:	 		0rem;
	}

	.day-container{
		width:100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.date{
		text-align: center;
		font-size: 1rem;
	}
	.date.today{
		font-weight: bold;
		color: var(--color-orange-2)
	}
</style>