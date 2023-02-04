import type { Event_Detail_Delete } from "$lib/components/card/card_events";
import type { Event_Save } from "$lib/components/event_form/events";
import { type Time_Entry, date_to_slot, type Project, type Task } from "@heimtime/api"

export type Item = {
	start: 	   number;
	end:   	   number;
	component: SvelteComp;
	props: 	   ComponentProps
}

export type SvelteComp 	   = new (...a: any[]) => any
export type ComponentProps = {[key: string]: unknown}

export function time_entry_to_item(
	time_entry:		 Time_Entry, 
	start_hour: 	 number, 
	step_in_minutes: number,
	comp: 			 SvelteComp,
	on_save: 		 (event: CustomEvent<Event_Save>) => void,
	on_delete: 		 (event: CustomEvent<Event_Detail_Delete>) => void,
): Item {


	let start_date = time_entry.start
	let end_date = time_entry.end
	
	if(start_date.getTime() > end_date.getTime()){
		[end_date, start_date] = [start_date, end_date]
	}

	const item: Item = {
		start: date_to_slot(start_date, start_hour, step_in_minutes),
		end:   date_to_slot(end_date, start_hour, step_in_minutes),
		component: comp,
		props: {
			date_start:  start_date,
			date_end: 	 end_date,
			time_entry:  time_entry,
			onsave: 	 on_save,
			ondelete:    on_delete,
		},
	}

	return item
}



