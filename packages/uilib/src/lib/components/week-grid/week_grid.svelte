<script lang="ts">
  	import { date_add_days, date_format_date_local, date_format_iso, date_is_today, type Project, type Time_Entry } from "@heimtime/api";
	import { DayGrid } from "../day-grid"

	// 
	// Input Props
	// 
	export let project_sets: Project[][]
	export let start_date = new Date()

	// 
	// Config
	// 
	const NR_DAYs_TO_SHOW = 7

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
</script>

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