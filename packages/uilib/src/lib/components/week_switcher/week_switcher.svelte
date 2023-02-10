<script lang="ts">
	import { date_add_days, date_format_date_local, date_week_frames } from "@heimtime/api";
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()
	const dispatch_week_changed = () => dispatch("weekchanged", {start,end})

	let [start, end] = date_week_frames()


	function today(){
		[start, end] = date_week_frames()
		dispatch_week_changed()
	}

	function next_week(){
		const new_start = date_add_days(start,7)
		const new_end = date_add_days(end,7)
		start = new_start
		end = new_end
		dispatch_week_changed()
	}

	function previous_week(){
		const new_start = date_add_days(start,-7)
		const new_end = date_add_days(end,-7)
		start = new_start
		end = new_end
		dispatch_week_changed()
	}

</script>

<week-switcher>

	<div class="date">
		<div>{date_format_date_local(start)}</div>
		<div> - </div>
		<div>{date_format_date_local(end)}</div>
	</div>

	<div class="controls">
		<button on:click={previous_week}> ◀ </button>
		<button on:click={today}> Today </button>
		<button on:click={next_week}> ▶ </button>
	</div>
</week-switcher>

<style>
	.date{
		display: flex;
		gap: 0.5rem;
	}
</style>