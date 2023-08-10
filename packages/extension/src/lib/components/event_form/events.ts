import type { Task } from "../../api/project"

export interface Event_Save {
  task: Task | undefined
  description: string
}
