import { writable, Writable, derived, Readable, get } from "svelte/store"
import { getContext, setContext } from "svelte"
import { Event, event_overlap, Event_State } from "./event"


const store_events: Writable<Event[]> = writable([])
const store_events_to_save = derived(store_events, (events:Event[]) => {
	return events.filter( (e) => e.state === Event_State.Saving  )
})


const event_context = {
	create_event,
	last_event,
	update_last_event,
	store_events,
}
type Event_Context = typeof event_context
const context_key = {}

export function init_event_context(){
	setContext<Event_Context>(context_key, event_context)
}

export function use_event_context(){
	const ctx = getContext<Event_Context>(context_key)
	if(!ctx){
		console.warn({level:"warn", msg:"event context has not been initalized"})
	}
	return ctx
}


function create_event(start_date: Date, end_date: Date){

	const new_event: Event = {
		start: start_date,
		end:   end_date,
		state: Event_State.In_Progress,
	}
	
	const events = get(store_events)
	
	store_events.set( [...events, new_event] )
}

function last_event(): Event {
	const events = get(store_events)
	return events[events.length-1]
}

function update_last_event(e: Event){
	const events = get(store_events)
	update_event(events.length-1, e)
}

function update_event(index:number, e:Event){
	const events = get(store_events)
	const events_except_current = [...events]
	events_except_current.splice(index,1)

	const overlapping_events = find_overlapping_events(e, events_except_current)


	events[index] = {...e}
	store_events.set(events)
}

function find_overlapping_events(e:Event, events: Event[]): Event[]{
	const overlapping_events: Event[] = events.filter( event => event_overlap(e, event) )

	return overlapping_events
}