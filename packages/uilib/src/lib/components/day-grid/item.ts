import { type Time_Entry, date_to_slot, type Project, type Task } from "@heimtime/api"
import type { Event_Detail_Delete, Event_Detail_Move } from "../card/card_events";
import type { Event_Save } from "../event_form/events";

export type Item = {
	start: 	   number;
	end:   	   number;
	component: SvelteComp;
	props: 	   ComponentProps
}

export type SvelteComp 	   = new (...a: any[]) => any
export type ComponentProps = {id:number} & {[key: string]: unknown}

export function time_entry_to_item(
	time_entry:		 Time_Entry, 
	start_hour: 	 number, 
	step_in_minutes: number,
	comp: 			 SvelteComp,
	on_save: 		 (event: CustomEvent<Event_Save>) => void,
	on_delete: 		 (event: CustomEvent<Event_Detail_Delete>) => void,
	on_move_start: 	 (event: CustomEvent) => void,
	on_move: 		 (event: CustomEvent<Event_Detail_Move>) => void,
	on_move_done:    (event: CustomEvent) => void,
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
			id: 		 time_entry.id,
			date_start:  start_date,
			date_end: 	 end_date,
			time_entry:  time_entry,
			onsave: 	 on_save,
			ondelete:    on_delete,
			onmove:		 on_move,
			onmovedone:  on_move_done,
			onmovestart: on_move_start,
		},
	}

	return item
}



