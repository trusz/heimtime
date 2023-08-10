import type { API } from "./api"
import { time_entry_context_use_v2, type Time_Entry, type CMD_Update_Time_Entry_By_Id, time_entry_execute_action, Time_Entry_Action } from "./api/time_entry"
import { date_first_day_of_week } from "./api/x/date"

export function time_entry_sync (api: API): void {
    const ctx_time_entries = time_entry_context_use_v2()

    ctx_time_entries.store_to_save.subscribe(async (time_entries_to_save: Time_Entry[]) => {
        if (time_entries_to_save.length === 0) { return }

        // const update_cmds: CMD_Update_Time_Entry_By_Id[] = []

        //
        // Trying to save
        //
        // const update_promises = time_entries_to_save.map(async (te) => {
        //     console.log({ level: "dev", msg: "saving time entry", te })
        //     const not_yet_on_server = te.id < 0
        //     if (not_yet_on_server) {
        //         await api.save_time_entry(te)
        //     } else {
        //         await api.update_time_entry(te)
        //     }
        // })

        // const results = await Promise.allSettled(update_promises)

        //
        // Update Saved Entries From server
        //
        // const {start,end} = find_biggest_date_range(time_entries_to_save)
        const { start, end } = find_week_range(time_entries_to_save[0].start)
        const saved_time_entires = await api.fetch_time_entires(start, end)

        ctx_time_entries.clear()
        for (const te of saved_time_entires) {
            ctx_time_entries.create_time_entry(te)
        }
    })

    ctx_time_entries.store_to_delete.subscribe(async (time_entries_to_delete: Time_Entry[]): Promise<void> => {
        if (time_entries_to_delete.length === 0) { return }

        const update_cmds: CMD_Update_Time_Entry_By_Id[] = []
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
                    time_entry: errd_te
                })
            } else {
                deleted_ids.push(te.id)
            }
        })

        ctx_time_entries.update_by_batch(update_cmds)
        ctx_time_entries.delete_batch(deleted_ids)
    })
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
        end
    }
}
