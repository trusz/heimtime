import { writable, type Writable, derived, get } from "svelte/store"
import { getContext, setContext } from "svelte"
import { new_time_entry2, type Time_Entry, Time_Entry_State } from "./time_entry"
import type { Project, Task } from "../project"
import { Time_Entries } from "./time_entry_store"

// Note: does not make sense to have a context but only one store
// We should create a store when createing the context
const store_time_entry: Writable<Time_Entry[]> = writable([])
const store_time_entry_to_save = derived(store_time_entry, (time_entires: Time_Entry[]) => {
    return time_entires.filter((e) => e.state === Time_Entry_State.Saving)
})
const store_time_entry_to_delete = derived(store_time_entry, (time_entires: Time_Entry[]) => {
    return time_entires.filter((e) => e.state === Time_Entry_State.Deleting)
})

const time_entry_context = {
    store_time_entry,
    store_time_entry_to_save,
    store_time_entry_to_delete,
    create_time_entry,
    create_time_entry_v2,
    last_time_entry,
    update_last_time_entry,
    update_time_entry,
    replace_time_entry_batch,
    update_time_entry_by_id,
    replace_time_entry_by_id_batch,
    delete_time_entry,
    delete_time_entry_batch,
}
export type Time_Entry_Context = typeof time_entry_context
const context_key = {}
const context_key_v2 = {}

export interface CMD_Update_Time_Entry_By_Id {
    id:         number
    time_entry: Partial<Time_Entry>
}
export interface CMD_Replace_Time_Entry_By_Id {
    id:         number
    time_entry: Time_Entry
}

export function time_entry_context_init () {
    setContext<Time_Entry_Context>(context_key, time_entry_context)
}

export function time_entry_context_init_v2 () {
    setContext<Time_Entries>(context_key_v2, new Time_Entries())
}

export function time_entry_context_use_v2 () {
    const ctx = getContext<Time_Entries>(context_key_v2)
    if (!ctx) {
        console.warn({ level: "warn", msg: "time entry context has not been initalized" })
    }
    return ctx
}

export function time_entry_context_use () {
    const ctx = getContext<Time_Entry_Context>(context_key)
    if (!ctx) {
        console.warn({ level: "warn", msg: "time entry context has not been initalized" })
    }
    return ctx
}

function create_time_entry_v2 (
    ...time_entries_to_create: Partial<Time_Entry>[]
) {
    const new_time_entries = time_entries_to_create.map((te) => new_time_entry2(te))
    // const time_entry = new_time_entry2(time_entries_to_create)
    const time_entries = get(store_time_entry)
    store_time_entry.set([...time_entries, ...new_time_entries])
}

function create_time_entry (
    start_date: Date,
    end_date: Date,
    project?: Project,
    task?: Task,
) {
    const time_entry = new_time_entry2({
        start: start_date,
        end:   end_date,
        state: Time_Entry_State.In_Progress,
        project,
        task,
    })

    const time_entries = get(store_time_entry)

    store_time_entry.set([...time_entries, time_entry])
}

function last_time_entry (): Time_Entry {
    const time_entries = get(store_time_entry)
    return time_entries[time_entries.length - 1]
}

function update_last_time_entry (time_entry: Time_Entry) {
    const time_entries = get(store_time_entry)
    update_time_entry(time_entries.length - 1, time_entry)
}

export interface CMD_Replace_Time_Entry_By_Index {
    index:      number
    time_entry: Time_Entry
}

function replace_time_entry_batch (cmds: CMD_Replace_Time_Entry_By_Index[]): void {
    const time_entries = get(store_time_entry)

    for (const { index, time_entry } of cmds) {
        const time_entries_except_current = [...time_entries]
        time_entries_except_current.splice(index, 1)

        if (time_entry.start > time_entry.end) {
            [time_entry.end, time_entry.start] = [time_entry.start, time_entry.end]
        }
        time_entries[index] = { ...time_entry }
    }
    store_time_entry.set(time_entries)
}

function update_time_entry (index: number, time_entry: Time_Entry) {
    const time_entries = get(store_time_entry)
    const time_entries_except_current = [...time_entries]
    time_entries_except_current.splice(index, 1)

    // const overlapping_time_entries = find_overlapping_time_entries(time_entry, time_entries_except_current)
    if (time_entry.start > time_entry.end) {
        [time_entry.end, time_entry.start] = [time_entry.start, time_entry.end]
    }

    time_entries[index] = { ...time_entry }
    store_time_entry.set(time_entries)
}

function replace_time_entry_by_id_batch (cmds: CMD_Replace_Time_Entry_By_Id[]) {
    const time_entries = get(store_time_entry)
    const new_cmds: CMD_Replace_Time_Entry_By_Index[] = []
    for (const { id, time_entry } of cmds) {
        const index = time_entries.findIndex(te => te.id === id)
        new_cmds.push({
            index,
            time_entry,
        })
    }

    replace_time_entry_batch(new_cmds)
}
function update_time_entry_by_id (id: number, time_entry: Time_Entry) {
    const time_entries = get(store_time_entry)
    const index = time_entries.findIndex(te => te.id === id)
    if (index < 0) {
        console.log({ level: "warn", msg: "update_time_entry_by_id: could not find time entry by id, stopping", id })
        return
    }

    update_time_entry(index, time_entry)
}

function delete_time_entry_batch (ids: number[]) {
    const time_entries = [...get(store_time_entry)]
    for (const id of ids) {
        const index = time_entries.findIndex(te => te.id === id)
        if (index < 0) {
            console.log({ level: "warn", msg: "delete_time_entry: could not find time entry by id, stopping", id })
            return
        }
        time_entries.splice(index, 1)
    }
    store_time_entry.set(time_entries)
}
function delete_time_entry (id: number) {
    const time_entries = [...get(store_time_entry)]
    const index = time_entries.findIndex(te => te.id === id)
    if (index < 0) {
        console.log({ level: "warn", msg: "delete_time_entry: could not find time entry by id, stopping", id })
        return
    }
    time_entries.splice(index, 1)
    store_time_entry.set(time_entries)
}
