import type { API } from "./api"
import { time_entry_context_use_v2, type Time_Entry, type CMD_Update_Time_Entry_By_Id, time_entry_execute_action, Time_Entry_Action } from "./api/time_entry"
import { date_format_time, date_format_iso, date_first_day_of_week } from "./api/x/date"

export function time_entry_sync (api: API) {
  const ctx_time_entries = time_entry_context_use_v2()

  ctx_time_entries.store_to_save.subscribe(async (time_entries_to_save: Time_Entry[]) => {
    if (time_entries_to_save.length === 0) { return }

    const update_cmds: CMD_Update_Time_Entry_By_Id[] = []

    //
    // Trying to save
    //
    const update_promises = time_entries_to_save.map(async (te) => {
      console.log({ level: 'dev', msg: 'saving time entry', te })
      const not_yet_on_server = te.id < 0
      if (not_yet_on_server) {
        await api.save_time_entry(te)
      } else {
        await api.update_time_entry(te)
      }
    })

    const results = await Promise.allSettled(update_promises)
    // results.forEach( (result, ri) => {
    // 	const te = time_entries_to_save[ri]

    // 	if(result.status === "rejected"){
    // 		console.log({level:"error", msg:"could not save time entry", te, err: result})
    // 		const errd_te = time_entry_execute_action(te, Time_Entry_Action.Save_Error)
    // 		update_cmds.push({
    // 			id: te.id,
    // 			time_entry: errd_te
    // 		})
    // 	}
    // })

    //
    // Update Saved Entries From server
    //
    // const {start,end} = find_biggest_date_range(time_entries_to_save)
    const { start, end } = find_week_range(time_entries_to_save[0].start)
    const saved_time_entires = await api.fetch_time_entires(start, end)
    // console.log({level:"dev", msg:"saved time entries", saved_time_entires})
    // for(const te of time_entries_to_save){
    // 	const modified_te = time_entry_execute_action(te, Time_Entry_Action.Save_Success)
    // 	const saved_entry = find_matching_time_entry(te, saved_time_entires)
    // 	if(saved_entry){
    // 		console.log({level:"dev", msg:"found matching entry", saved_entry})
    // 		modified_te.id = saved_entry.id
    // 		update_cmds.push({
    // 			id: te.id,
    // 			time_entry: modified_te
    // 		})
    // 	}
    // }

    // //
    // // Update rest of entires
    // //
    // for(const saved_te of saved_time_entires){
    // 	update_cmds.push({
    // 		id:saved_te.id,
    // 		time_entry: saved_te
    // 	})
    // }
    // ctx_time_entries.update_by_batch(update_cmds)
    // update_time_entry_by_id_batch(update_cmds)
    ctx_time_entries.clear()
    for (const te of saved_time_entires) {
      ctx_time_entries.create_time_entry(te)
    }
  })

  ctx_time_entries.store_to_delete.subscribe(async (time_entries_to_delete: Time_Entry[]) => {
    // store_time_entry_to_delete.subscribe(async (time_entries_to_delete: Time_Entry[])=>{
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
        console.log({ level: 'error', msg: 'could not delete time entry', te, err: result })
        const errd_te = time_entry_execute_action(te, Time_Entry_Action.Save_Error)
        update_cmds.push({
          id: te.id,
          time_entry: errd_te
        })
      } else {
        deleted_ids.push(te.id)
      }
    })

    ctx_time_entries.update_by_batch(update_cmds)
    ctx_time_entries.delete_batch(deleted_ids)
    // delete_time_entry_batch(deleted_ids)
    // update_time_entry_by_id_batch(update_cmds)
  })
}

function find_matching_time_entry (local_time_entry: Time_Entry, existing_time_entires: Time_Entry[]): Time_Entry | undefined {
  const server_time_entry = existing_time_entires.find(ete => is_same_time_entry_expect_id(local_time_entry, ete))

  return server_time_entry
}

function is_same_time_entry_expect_id (t1: Time_Entry, t2: Time_Entry): boolean {
  let is_same = t1.description === t2.description
  is_same = is_same && date_format_time(t1.start) === date_format_time(t2.start)
  is_same = is_same && date_format_time(t1.end) === date_format_time(t2.end)
  is_same = is_same && t1.task?.id === t2.task?.id

  return is_same
}

function find_biggest_date_range (time_entries: Time_Entry[]): { start: Date, end: Date } {
  if (time_entries.length === 0) {
    throw new Error("we need time entires")
  }

  let min_start = time_entries[0].start
  let max_end = time_entries[0].end

  for (const te of time_entries) {
    if (date_format_iso(te.start) < date_format_iso(min_start)) {
      min_start = te.start
    }

    if (date_format_iso(te.end) > date_format_iso(max_end)) {
      max_end = te.end
    }
  }

  return {
    start: min_start,
    end: max_end
  }
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
