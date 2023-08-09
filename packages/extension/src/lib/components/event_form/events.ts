import type { Task } from "../../api/project"

export type Event_Save = {
	task: 		 Task | undefined
	description: string
}