import { get } from "svelte/store"
import { init_project_context, new_project, new_task, type Task, type Project, context_project_use, context_project_init } from "../../api/project"
import { time_entry_context_init_v2, time_entry_context_use_v2, Time_Entry_State, type Time_Entry } from "../../api/time_entry"
import { date_format_iso, date_add_days } from "../../api/x/date"

export function init_mocks () {
    //
    // Context
    //
    time_entry_context_init_v2()
    init_project_context()
    context_project_init()
    const ctx_projects = context_project_use()

    const yesterday: string = date_format_iso(date_add_days(new Date(), -1))
    const today: string = date_format_iso(new Date())
    const tomorrow: string = date_format_iso(date_add_days(new Date(), +1))

    ctx_projects.create_project(
        yesterday,
        new_project(0, "first", [new_task(0, "1.1"), new_task(1, "1.2"), new_task(2, "1.3")])
    )
    ctx_projects.create_project(
        yesterday,
        new_project(1, "second", [new_task(3, "2.1"), new_task(4, "2.2"), new_task(5, "2.3")])
    )
    ctx_projects.create_project(
        today,
        new_project(0, "first", [new_task(0, "1.1"), new_task(1, "1.2"), new_task(2, "1.3")])
    )
    ctx_projects.create_project(
        today,
        new_project(1, "second", [new_task(3, "2.1"), new_task(4, "2.2"), new_task(5, "2.3")])
    )
    ctx_projects.create_project(
        tomorrow,
        new_project(0, "first", [new_task(0, "1.1"), new_task(1, "1.2"), new_task(2, "1.3")])
    )
    ctx_projects.create_project(
        tomorrow,
        new_project(1, "second", [new_task(3, "2.1"), new_task(4, "2.2"), new_task(5, "2.3")])
    )
    console.log({ level: "dev", msg: "projects", projects: get(ctx_projects.store) })
    const yesterday_projects = get(ctx_projects.store).get(yesterday) ?? []
    const today_projects = get(ctx_projects.store).get(today) ?? []
    const tomorrow_projects = get(ctx_projects.store).get(tomorrow) ?? []

    console.log({ level: "dev", msg: "today projects", today_projects, tomorrow_projects, yesterday_projects })

    const time_entries = time_entry_context_use_v2()
    time_entries.create_time_entry({
        start:       new Date(today + " 08:00"),
        end:         new Date(today + " 09:30"),
        project:     today_projects[0],
        task:        today_projects[0].tasks[0],
        state:       Time_Entry_State.Saving,
        description: "this was already here 1"
    })

    time_entries.create_time_entry({
        start:       new Date(tomorrow + " 10:00"),
        end:         new Date(tomorrow + " 11:30"),
        project:     tomorrow_projects[1],
        task:        tomorrow_projects[1].tasks[1],
        state:       Time_Entry_State.Stable,
        description: "this was already here 2"
    })
    time_entries.create_time_entry({
        start:       new Date(yesterday + " 12:00"),
        end:         new Date(yesterday + " 12:30"),
        project:     yesterday_projects[1],
        task:        yesterday_projects[1].tasks[1],
        state:       Time_Entry_State.Stable,
        description: "this was already here 2"
    })

    //
    // API Mocks
    //
    time_entries.store_to_save.subscribe(async (time_entries_to_save: Time_Entry[]) => {
    // console.log({level: "dev", msg: "entries to save", time_entries_to_save})
        await new Promise(resolve => setTimeout(resolve, 2_000))
        for (const te of time_entries_to_save) {
            // sync task with project
            const date = date_format_iso(te.start)
            console.log({ level: "dev", msg: "date", date })
            const project = find_project_of_task(te.task, get(ctx_projects.store)[date] ?? [])
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
        await new Promise(resolve => setTimeout(resolve, 2_000))
        for (const te of time_entries_to_delete) {
            time_entries.delete(te.id)
        }
    })
}

function find_project_of_task (task: Task | undefined, projects: Project[]): Project | undefined {
    if (task == null) { return }
    return projects.find(p => p.tasks.includes(task))
}
