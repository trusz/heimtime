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

	const format_date = Intl.DateTimeFormat("de-DE", {timeStyle:"short"}).format
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
			title: `${format_date(start_date)} - ${format_date(end_date)}`
		},
	}

	return item
}



