import { Project, Task } from "../project";

export type Time_Entry = {
	id:   	      number;
	start:        Date;
	end:          Date;
	state:        Time_Entry_State;
	project?:     Project,
	task?: 	      Task,
	description?: string
}

export function new_time_entry(
	id = -1* (Math.random()*10000|0),
	start = new Date(),
	end = new Date(),
	state = Time_Entry_State.In_Progress,
	project?: Project,
	task?: Task,
	description?: string
): Time_Entry {

	return {
		id,
		start,
		end,
		state,
		project,
		task,
		description,
	}

}

export function time_entry_overlap(a: Time_Entry, b: Time_Entry): boolean{
	return Math.max(a.start.getTime(), b.start.getTime()) < Math.min(a.end.getTime(), b.end.getTime())
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

export enum Time_Entry_State {
	In_Progress = "In_Progress",
	Saving 		= "Saving",
	Error 		= "Error",
	Stable 		= "Stable",
	Deleting    = "Deleting"
}

export enum Time_Entry_Action {
	Creation_Progression = "Creation_Progression",
	Form_Changes 	     = "Form_Changes",
	Form_Finished 	     = "Form_Finished",
	Form_Or_Time_Changes = "Form_Or_Time_Changes",
	Save_Success 		 = "Save_Success",
	Save_Error 			 = "Save_Error",
}

type State_Machine = {
	[key in Time_Entry_State]: {
		[key in Time_Entry_Action]?: Time_Entry_State
	}
}
const state_machine: State_Machine = {
	[Time_Entry_State.In_Progress]: {
		[Time_Entry_Action.Creation_Progression]: Time_Entry_State.In_Progress,
		[Time_Entry_Action.Form_Changes]: 		  Time_Entry_State.In_Progress,
		[Time_Entry_Action.Form_Finished]: 		  Time_Entry_State.Saving,
	},
	[Time_Entry_State.Saving]: {
		[Time_Entry_Action.Save_Success]: Time_Entry_State.Stable,
		[Time_Entry_Action.Save_Error]:   Time_Entry_State.Error,
	},
	[Time_Entry_State.Stable]: {
		[Time_Entry_Action.Form_Or_Time_Changes]: Time_Entry_State.In_Progress,
	},
	[Time_Entry_State.Error]: {
		[Time_Entry_Action.Form_Or_Time_Changes]: Time_Entry_State.In_Progress,
	}
}

export function time_entry_execute_action(
	time_entry:  Time_Entry, 
	action: 	 Time_Entry_Action,
): Time_Entry {
	const mutated_time_entry = {...time_entry}
	const possible_actions = state_machine[time_entry.state]
	const new_state = possible_actions[action]

	if(!new_state){
		return time_entry
	}

	mutated_time_entry.state = new_state
	return mutated_time_entry
}