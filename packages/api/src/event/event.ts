export type Event = {
	start: Date;
	end:   Date;
	state: Event_State;
}

const HOUR_IN_MINUTES = 60

// 
// Slot Transformation
// 
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


// 
// State Machine
// 

export enum Event_State {
	In_Progress = "In_Progress",
	Saving 		= "Saving",
	Error 		= "Error",
	Stable 		= "Stable",
}

export enum Event_Action {
	Creation_Progression = "Creation_Progression",
	Form_Changes 	     = "Form_Changes",
	Form_Finished 	     = "Form_Finished",
	Form_Or_Time_Changes = "Form_Or_Time_Changes",
	Save_Success 		 = "Save_Success",
	Save_Error 			 = "Save_Error",
}

type State_Machine = {
	[key in Event_State]: {
		[key in Event_Action]?: Event_State
	}
}
const state_machine: State_Machine = {
	[Event_State.In_Progress]: {
		[Event_Action.Creation_Progression]: Event_State.In_Progress,
		[Event_Action.Form_Changes]: 		Event_State.In_Progress,
		[Event_Action.Form_Finished]: 		Event_State.Saving,
	},
	[Event_State.Saving]: {
		[Event_Action.Save_Success]: Event_State.Stable,
		[Event_Action.Save_Error]:   Event_State.Error,
	},
	[Event_State.Stable]: {
		[Event_Action.Form_Or_Time_Changes]: Event_State.In_Progress,
	},
	[Event_State.Error]: {
		[Event_Action.Form_Or_Time_Changes]: Event_State.In_Progress,
	}
}

export function event_execute_action(
	event:  Event, 
	action: Event_Action,
): Event {
	const mutated_event = {...event}
	const possible_actions = state_machine[event.state]
	const new_state = possible_actions[action]

	if(!new_state){
		return event
	}

	mutated_event.state = new_state
	return mutated_event
}