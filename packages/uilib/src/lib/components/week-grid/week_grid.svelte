<script lang="ts">
  import { context_card_use } from "$lib/components/card";
  	import { date_add_days, date_format_date_local, date_format_iso, date_is_today, Time_Entry_Action, time_entry_context_use, time_entry_execute_action, type CMD_Update_Time_Entry_By_Id, type Project, type Time_Entry } from "@heimtime/api";
	import { DayGrid } from "../day-grid"

	// 
	// Input Props
	// 
	export let project_sets: Project[][]
	export let start_date = new Date()

	// 
	// Config
	// 
	const NR_DAYs_TO_SHOW = 6

	// 
	// Setup
	// 
	let dates: Date[] = [start_date]
	$: (function(d: Date){
		dates = [start_date]
		for(let di=1; di<NR_DAYs_TO_SHOW; di++){
			const new_date = date_add_days(new Date(start_date.getTime()),di)
			dates.push(new_date)
		}
	}(start_date))

	const card_context = context_card_use()
	const { 
		update_time_entry_by_id,
		update_time_entry_by_id_batch,
		store_time_entry,
	 } = time_entry_context_use()


	function delete_card_by_ids(ids: number[]){
		if(ids.length === 0 ){ return }

		const cmds: CMD_Update_Time_Entry_By_Id[] = []
		for(const id of ids){
			const time_entry_to_delete = $store_time_entry.find(te => te.id === id)
			if(!time_entry_to_delete){
				console.log({level:"warn", msg:"could not find time entry to delete, stopping", id})
				return
			}
			const modified_te = time_entry_execute_action(time_entry_to_delete, Time_Entry_Action.Delete)
			cmds.push({
				id:id,
				time_entry: modified_te,
			})

		}

		update_time_entry_by_id_batch(cmds)
	}


	function handle_backspace(event: KeyboardEvent){
		const has_all_keys = event.key === "Backspace" && event.metaKey
		if(!has_all_keys){
			return
		}
		const selected_card_ids = card_context.get_selected_card_ids()
		delete_card_by_ids(selected_card_ids)
	}


	function handle_copy(event:ClipboardEvent){
		const selected_card_ids = card_context.get_selected_card_ids()
		if(selected_card_ids.length === 0){ return }
		
		const time_entries: Time_Entry[] = []
		for(const id of selected_card_ids){
			const te = $store_time_entry.find(te => te.id === id)
			if(!te){ continue }

			time_entries.push(te)
		}

		event.clipboardData?.setData('text/json', JSON.stringify(time_entries));
    	event.preventDefault();
	}

</script>

<svelte:body 
	on:keydown={handle_backspace}
	on:copy={handle_copy}
/>

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