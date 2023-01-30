import type { Item, SvelteComp } from "./item";

export type Event = {
	start: Date;
	end:   Date;
	title: string 		
}

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

const HOUR_IN_MINUTES = 60

export function date_to_slot(
	d: 				 Date, 
	start_hour: 	 number,
	step_in_minutes: number,
): number {

	const hours = d.getHours()
	const minutes = d.getMinutes()
	const diff_minutes = (hours*HOUR_IN_MINUTES)+minutes - start_hour*HOUR_IN_MINUTES
	const diff_steps = Math.floor(diff_minutes/step_in_minutes)
	const slot_number = diff_steps

	return slot_number 
}

export function slot_to_minutes(
	slot: 			 number,
	start_hour: 	 number,
	step_in_minutes: number,
): number {

	const diff_minutes = slot * step_in_minutes
	const start_minutes = start_hour * HOUR_IN_MINUTES
	const minutes = start_minutes + diff_minutes

	return minutes
}