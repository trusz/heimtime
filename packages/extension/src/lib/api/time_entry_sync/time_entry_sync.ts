// import type { API } from "./api"
import { Time_Entry_Action, time_entry_execute_action, Time_Entry } from "../time_entry"
import { type CMD_Replace_Time_Entry_By_Id, type Time_Entries } from "../time_entry/time_entries"
import { date_first_day_of_week } from "../x/date"
import { Mutex } from "../x/mutex"
import { type API } from "./api"

const mtx_save = new Mutex()

export function time_entry_sync (
    api: API,
    time_entries: Time_Entries,
): void {
    //
    // Note: not sure which is more understandable and readable the bind or the arrow function
    // There should not be any difference
    //
    // time_entries.entries_to_save$.subscribe(async (time_entries_to_save) => { await save_time_entries(api, time_entries, time_entries_to_save) })
    // time_entries.entries_to_delete$.subscribe(async (time_entries_to_delete) => { await delete_time_entries(api, time_entries, time_entries_to_delete) })
    time_entries.entries_to_save$.subscribe(save_time_entries.bind(undefined, api, time_entries))
    time_entries.entries_to_delete$.subscribe(delete_time_entries.bind(undefined, api, time_entries))
}

async function save_time_entries (api: API, time_entries: Time_Entries, time_entries_to_save: Time_Entry[]) {
    // await mtx_save.lock() // to queue up save requests, not sure if needed

    const has_anything_to_save = time_entries_to_save.length > 0
    if (!has_anything_to_save) { return }

    // const update_cmds: CMD_Update_Time_Entry_By_Id[] = []

    //
    // Trying to save
    //
    const update_promises = time_entries_to_save.map(async (te) => {
        const not_yet_on_server = te.id < 0
        if (not_yet_on_server) {
            await api.save_time_entry(te)
        } else {
            await api.update_time_entry(te)
        }
    })

    await Promise.allSettled(update_promises)

    //
    // Update Saved Entries From server
    //
    const { start, end } = find_week_range(time_entries_to_save[0].start)
    const saved_time_entires = await api.fetch_time_entires(start, end)

    const replacements: CMD_Replace_Time_Entry_By_Id[] = []

    time_entries_to_save.forEach((te_to_save) => {
        const saved_entry = saved_time_entires.find((te_saved) => Time_Entry.Is_Same_Range(te_to_save, te_saved))
        if (!saved_entry) { return }

        replacements.push({
            id:         te_to_save.id,
            time_entry: saved_entry,
        })
    })

    time_entries.replace_time_entries_by_id(replacements)

    // TODO: instead of refetching everything we should update them
    // this of not easy currently but maybe manageable
    // time_entries.clear()
    // for (const te of saved_time_entires) {
    //     time_entries.create_time_entry(te)
    // }
    // await mtx_save.unlock()
}

async function delete_time_entries (api: API, time_entries: Time_Entries, time_entries_to_delete: Time_Entry[]) {
    if (time_entries_to_delete.length === 0) { return }

    const update_cmds: CMD_Replace_Time_Entry_By_Id[] = []
    const delete_promises = time_entries_to_delete.map(async (te) => {
        const is_on_server = te.id > 0
        if (is_on_server) {
            await api.delete_time_entry(te)
        }
    })
    const deleted_ids: number[] = []
    const results = await Promise.allSettled(delete_promises)
    results.forEach((result, ri) => {
        const te = time_entries_to_delete[ri]

        if (result.status === "rejected") {
            console.log({ level: "error", msg: "could not delete time entry", te, err: result })
            const errd_te = time_entry_execute_action(te, Time_Entry_Action.Save_Error)
            update_cmds.push({
                id:         te.id,
                time_entry: errd_te,
            })
        } else {
            deleted_ids.push(te.id)
        }
    })

    // time_entries.replace_time_entries_by_id(update_cmds)
    time_entries.delete_batch(deleted_ids)
    // time_entries.delete_time_entry_batch(deleted_ids)
}

function find_week_range (d: Date): { start: Date, end: Date } {
    const start = date_first_day_of_week(d, 1)
    const end = new Date(start)
    end.setDate(end.getDate() + 6)
    // start.setDate(start.getDate() - start.getDay())

    // const end = new Date(d)
    // end.setDate(end.getDate() + (6 - end.getDay()))

    return {
        start,
        end,
    }
}
