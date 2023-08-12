import { type Time_Entry } from "../time_entry/time_entry"
import { type CMD_Replace_Time_Entry_By_Id } from "../time_entry/time_entry_context"

export type CTX_Time_Entries = {
    store_to_save:     { subscribe: (cb: (time_entries_to_save: Time_Entry[]) => void) => void }
    store_to_delete:   { subscribe: (cb: (time_entries_to_delete: Time_Entry[]) => void) => void }
    clear:             () => void
    create_time_entry: (te: Time_Entry) => void
    update_by_batch:   (cmds: CMD_Replace_Time_Entry_By_Id[]) => void
    delete_batch:      (ids: number[]) => void
}
