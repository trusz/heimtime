import { writable, Writable, derived, Readable, get } from "svelte/store"
import { getContext, setContext } from "svelte"
import { new_time_entry, Time_Entry, time_entry_overlap, Time_Entry_State } from "./time_entry"


const store_time_entry: Writable<Time_Entry[]> = writable([])
const store_time_entry_to_save = derived(store_time_entry, (events:Time_Entry[]) => {
	return events.filter( (e) => e.state === Time_Entry_State.Saving  )
})
const store_time_entry_to_delete = derived(store_time_entry, (events:Time_Entry[]) => {
	return events.filter( (e) => e.state === Time_Entry_State.Deleting  )
})


const time_entry_context = {
	store_time_entry,
	store_time_entry_to_save,
	store_time_entry_to_delete,
	create_time_entry,
	last_time_entry,
	update_last_time_entry,
	update_time_entry,
	update_time_entry_by_id,
}
type Time_Entry_Context = typeof time_entry_context
const context_key = {}

export function time_entry_context_init(){
	setContext<Time_Entry_Context>(context_key, time_entry_context)
}

export function time_entry_context_use(){
	const ctx = getContext<Time_Entry_Context>(context_key)
	if(!ctx){
		console.warn({level:"warn", msg:"time entry context has not been initalized"})
	}
	return ctx
}


function create_time_entry(start_date: Date, end_date: Date){

	const time_entry = new_time_entry(
		undefined,
		start_date,
		end_date,
		Time_Entry_State.In_Progress,
	)
	
	const time_entries = get(store_time_entry)
	
	store_time_entry.set( [...time_entries, time_entry] )
}

function last_time_entry(): Time_Entry {
	const time_entries = get(store_time_entry)
	return time_entries[time_entries.length-1]
}

function update_last_time_entry(time_entry: Time_Entry){
	const time_entries = get(store_time_entry)
	update_time_entry(time_entries.length-1, time_entry)
}

function update_time_entry(index:number, time_entry:Time_Entry){
	console.log({level:"dev", msg:"updating time entry", index, time_entry})
	const time_entries = get(store_time_entry)
	const time_entries_except_current = [...time_entries]
	time_entries_except_current.splice(index,1)

	const overlapping_time_entries = find_overlapping_time_entries(time_entry, time_entries_except_current)


	time_entries[index] = {...time_entry}
	store_time_entry.set(time_entries)
}

function update_time_entry_by_id(id: number, time_entry: Time_Entry){
	const time_entries = get(store_time_entry)
	const index = time_entries.findIndex(te => te.id === id)
	if(index < 0){
		console.log({level:"warn", msg:"could not find time entry by id, stopping", id })
		return
	}

	update_time_entry(index, time_entry)
}

function find_overlapping_time_entries(e:Time_Entry, time_entires: Time_Entry[]): Time_Entry[]{
	const overlapping_time_entries: Time_Entry[] = time_entires.filter( time_entry => time_entry_overlap(e, time_entry) )

	return overlapping_time_entries
}