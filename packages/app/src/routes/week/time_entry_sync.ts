import { 
	date_format_iso,
	date_format_time,
	Time_Entry_Action,
	time_entry_context_use,
	time_entry_execute_action,
	type Time_Entry,
} from "@heimtime/api"
import type { API } from "src/api"



export function time_entry_sync(api:API, ){
	console.log({level:"dev", msg:"time_entry_context_use"})
	const { 
		store_time_entry_to_save,
		store_time_entry_to_delete,
		update_time_entry_by_id,
		delete_time_entry,
	} = time_entry_context_use()

	store_time_entry_to_save.subscribe(async (time_entries_to_save: Time_Entry[])=>{
		for(const te of time_entries_to_save){
			try{
				if(te.id < 0 ){
					await api.save_time_entry(te)
				}else {
					await api.update_time_entry(te)
				}
			}catch(err){
				console.log({level:"error", msg:"could not save time entry", te, err})
				const errd_te = time_entry_execute_action(te, Time_Entry_Action.Save_Error)
				update_time_entry_by_id(te.id, errd_te)
				return
			}
			
			const modified_te = time_entry_execute_action(te, Time_Entry_Action.Save_Success)

			// if( te.id < 0){
				const saved_time_entires = await api.fetch_time_entires(te.start, te.start)
				const saved_entry = find_matching_time_entry(te, saved_time_entires)
				if(saved_entry){
					modified_te.id = saved_entry.id
				}
			// }

			update_time_entry_by_id(te.id, modified_te)
		}

	})

	store_time_entry_to_delete.subscribe(async (time_entries_to_delete: Time_Entry[])=>{
		console.log({level:"dev", msg:"deleting", length: time_entries_to_delete.length, time_entries_to_delete})
		for(const te of time_entries_to_delete){
			const is_on_server = te.id > 0
			if( is_on_server ){
				await api.delete_time_entry(te)
			}
			delete_time_entry(te.id)
		}
	})
}

function find_matching_time_entry(local_time_entry: Time_Entry, existing_time_entires: Time_Entry[]): Time_Entry | undefined{
	const server_time_entry = existing_time_entires.find(ete => is_same_time_entry_expect_id(local_time_entry,ete))

	return server_time_entry
}

function is_same_time_entry_expect_id(t1: Time_Entry, t2: Time_Entry): boolean{
	let is_same = t1.description === t2.description
	is_same = is_same && date_format_time(t1.start) === date_format_time(t2.start)
	is_same = is_same && date_format_time(t1.end) === date_format_time(t2.end)
	is_same = is_same && t1.task?.id === t2.task?.id

	return is_same
}