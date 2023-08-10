import { get } from "svelte/store";
import { init_project_context, use_project_context, new_project, new_task, type Task, type Project } from "../../api/project";
import { time_entry_context_init_v2, time_entry_context_use_v2, Time_Entry_State, type Time_Entry } from "../../api/time_entry";
import { date_format_iso, date_add_days } from "../../api/x/date";

export function init_mocks () {
  //
  // Context
  //
  time_entry_context_init_v2()
  init_project_context()

  const { add_project, store_projects } = use_project_context()
  add_project(
    new_project(
      0,
      'first',
      [
        new_task(0, "1.1"),
        new_task(1, "1.2"),
        new_task(2, "1.3")
      ]
    ),
    new_project(
      1,
      'second',
      [
        new_task(3, "2.1"),
        new_task(4, "2.2"),
        new_task(5, "2.3")
      ]
    )
  )

  const time_entries = time_entry_context_use_v2()
  time_entries.create_time_entry({
    start: new Date(date_format_iso(new Date()) + ' 08:00'),
    end: new Date(date_format_iso(new Date()) + ' 09:30'),
    project: get(store_projects)[0],
    task: get(store_projects)[0].tasks[0],
    state: Time_Entry_State.Saving,
    description: "this was already here 1"
  })

  time_entries.create_time_entry({
    start: new Date(date_format_iso(date_add_days(new Date(), +1)) + ' 10:00'),
    end: new Date(date_format_iso(date_add_days(new Date(), +1)) + ' 11:30'),
    project: get(store_projects)[1],
    task: get(store_projects)[1].tasks[1],
    state: Time_Entry_State.Stable,
    description: "this was already here 2"
  })

  //
  // API Mocks
  //
  time_entries.store_to_save.subscribe(async (time_entries_to_save: Time_Entry[]) => {
    // console.log({level: "dev", msg: "entries to save", time_entries_to_save})
    await new Promise(r => setTimeout(r, 2_000))
    for (const te of time_entries_to_save) {
      // sync task with project
      const project = find_project_of_task(te.task, get(store_projects))
      time_entries.delete(te.id)
      time_entries.create_time_entry({
        ...te,
        state: Time_Entry_State.Stable,
        project
      })
      // time_entries.set_state(te.id, Time_Entry_State.Stable)
    }
  })

  time_entries.store_to_delete.subscribe(async (time_entries_to_delete: Time_Entry[]) => {
    await new Promise(r => setTimeout(r, 2_000))
    for (const te of time_entries_to_delete) {
      time_entries.delete(te.id)
    }
  })
}

function find_project_of_task (task: Task | undefined, projects: Project[]): Project | undefined {
  if (!task) { return }
  return projects.find(p => p.tasks.includes(task))
}
