import { type Time_Entry } from "../time_entry/time_entry"

export type API = {
    save_time_entry:    (te: Time_Entry) => Promise<void>
    update_time_entry:  (te: Time_Entry) => Promise<void>
    fetch_time_entires: (start: Date, end: Date) => Promise<Time_Entry[]>
    delete_time_entry:  (te: Time_Entry) => Promise<void>
}
