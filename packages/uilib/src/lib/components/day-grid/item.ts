import { type Event, date_to_slot } from "@heimtime/api"

export type Item = {
	start: 	   number;
	end:   	   number;
	component: SvelteComp;
	props: 	   ComponentProps
}

export type SvelteComp 	   = new (...a: any[]) => any
export type ComponentProps = {[key: string]: unknown}

export function event_to_item(
	e: 				 Event, 
	start_hour: 	 number, 
	step_in_minutes: number,
	comp: 			 SvelteComp,
): Item {


	let start_date = e.start
	let end_date = e.end
	
	if(start_date.getTime() > end_date.getTime()){
		[end_date, start_date] = [start_date, end_date]
	}

	const item: Item = {
		start: date_to_slot(start_date, start_hour, step_in_minutes),
		end:   date_to_slot(end_date, start_hour, step_in_minutes),
		component: comp,
		props: {
			date_start: start_date,
			date_end: end_date,
			project: "todo",
			task: "todo",
			description: "todo",
			state: e.state,
		},
	}

	return item
}



