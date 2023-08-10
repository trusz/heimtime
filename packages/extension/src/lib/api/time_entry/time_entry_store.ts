import { writable, derived, type Readable } from "svelte/store"
import { type Time_Entry, Time_Entry_State, new_time_entry2 } from "./time_entry"
import { type CMD_Update_Time_Entry_By_Id } from "./time_entry_context"

export class Time_Entries {
    private readonly _store = writable<Time_Entry[]>([])
    public store = derived(this._store, (time_entries) => time_entries)
    public store_to_save = derived_by_state(this._store, Time_Entry_State.Saving)
    public store_to_delete = derived_by_state(this._store, Time_Entry_State.Deleting)

    public create_time_entry (
        ...time_entries_to_create: Array<Partial<Time_Entry>>
    ) {
        const new_time_entries = time_entries_to_create.map((te) => new_time_entry2(te))
        this._store.update((time_entries) => [...time_entries, ...new_time_entries])
    }

    public clear () {
        this._store.set([])
    }

    public select_time_entry (id: number) {
        this._store.update((time_entries) => {
            return time_entries.map((te) => {
                if (te.id === id) {
                    return { ...te, is_selected: true }
                }
                return { ...te, is_selected: false }
            })
        })
    }

    public select_additional_time_entry (id: number) {
        this._store.update((time_entries) => {
            return time_entries.map((te) => {
                if (te.id === id) {
                    return { ...te, is_selected: true }
                }
                return te
            })
        })
    }

    public reset_selected_time_entry () {
        this._store.update((time_entries) => {
            return time_entries.map((te) => {
                return { ...te, is_selected: false }
            })
        })
    }

    public set_state (id: number, state: Time_Entry_State) {
        this._store.update((time_entries) => {
            return time_entries.map((te) => {
                if (te.id === id) {
                    return { ...te, state }
                }
                return te
            })
        })
    }

    public flag_to_delete (id: number) {
        this.set_state(id, Time_Entry_State.Deleting)
    }

    public delete (id: number) {
        this._store.update((time_entries) => {
            return time_entries.filter((te) => te.id !== id)
        })
    }

    public delete_batch (ids: number[]) {
        this._store.update((time_entries) => {
            return time_entries.filter((te) => !ids.includes(te.id))
        })
    }

    public update_by_id (id: number, time_entry: Partial<Time_Entry>) {
        this._store.update((time_entries) => {
            return time_entries.map((te) => {
                if (te.id === id) {
                    return {
                        ...te,
                        ...time_entry
                    }
                }
                return te
            })
        })
    }

    public flag_to_save (id: number) {
        this._store.update((time_entries) => {
            return time_entries.map((te) => {
                if (te.id === id) {
                    return {
                        ...te,
                        state: Time_Entry_State.Saving
                    }
                }
                return te
            })
        })
    }

    public set_time_range (id: number, start?: Date, end?: Date) {
        this.update_by_id(id, { start, end })
        this.flag_to_save(id)
    }

    public update_by_batch (cmds: CMD_Update_Time_Entry_By_Id[]) {
        this._store.update((time_entries) => {
            return time_entries.map((te) => {
                const cmd = cmds.find((cmd) => cmd.id === te.id)
                if (cmd != null) {
                    return {
                        ...te,
                        ...cmd.time_entry,
                        state: Time_Entry_State.Stable
                    }
                }
                return te
            })
        })
    }
}

function derived_by_state (time_entries: Readable<Time_Entry[]>, state: Time_Entry_State): Readable<Time_Entry[]> {
    return derived(time_entries, (time_entries) => time_entries.filter((e) => e.state === state))
}
