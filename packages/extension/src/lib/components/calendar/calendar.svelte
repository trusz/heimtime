<script lang="ts">
	// @ts-ignore
    import Calendar from '@event-calendar/core'; 
	// @ts-ignore
    import TimeGrid from '@event-calendar/time-grid';
	// @ts-ignore
    import Interaction from '@event-calendar/interaction';
    import type { 
        Options, 
        Event, 
        DateSetInfo, 
        EventClickInfo, 
        EventDropInfo, 
        EventDidMountInfo, 
        EventContentInfo, 
        SelectInfo, 
        EventCalendar, 
        EventResizeInfo,
     } from "./calendar-types"
 
    import { string_to_color } from '../card/color-hash';
    import '@event-calendar/core/index.css';
    import { Popup } from '../popup';
    import { EventForm } from '../event_form';
    import type { Event_Save } from '../event_form/events';
    import { createEventDispatcher } from 'svelte';
    import { context_project_use } from '../../api/project';
    import { time_entry_context_use_v2, type Time_Entry, Time_Entry_State } from '../../api/time_entry';
    import { date_format_iso, date_duration_in_minutes, date_minutes_to_hours_and_minutes } from '../../api/x/date';
    import type { Date_Changed_Info } from './datechanged';

    // 
    // Init
    // 
    const dispatch = createEventDispatcher()

    // 
    // Context
    // 
    const time_entires = time_entry_context_use_v2()
    const ctx_projects = context_project_use()
    $: project_sets = ctx_projects.store
    $: projects = $project_sets.get( date_format_iso( cur_time_entry?.start ?? new Date() ) ) ?? []

    // 
    // Config
    // 
    let plugins = [TimeGrid, Interaction]
    let options: Options = {}
    $: options = {
        view: "timeGridWeek",
        height: "100%",
		slotDuration :"00:15",
		editable: true,
		eventClick: handle_click,
        slotMinTime: "06:00:00",
        slotMaxTime: "22:00:00",
        datesSet: handle_update_dates,
        eventDrop: handle_event_drop,
        eventTimeFormat:{
            hour: 'numeric',
            minute: '2-digit',
            meridiem: false,
            hour12: false,
        },
        eventResize: handle_resize,
        selectable: true,
        select: handle_select,
        pointer: true,
        dayMaxEvents: true,
        nowIndicator: true,
        eventDidMount: handle_did_mount,
        eventContent: event_content,
        locale: "de",
        firstDay: 1,
        dayHeaderFormat: make_day_header_format(),
        hiddenDays: [0,6],
    };

    // as a small hack we regenerate the function so it can recalculate
    // the already booked hours
    function make_day_header_format(){
        return function day_header_format(date: Date): string {
            const null_date = new Date("1970-01-01")

            const todays_events = events.filter(e => date_format_iso(date) === date_format_iso(e.start??null_date ))
            const duration_total = todays_events.reduce( (acc, e) => {
                let duration = 0
                if(e.start && e.end){ 
                    duration = date_duration_in_minutes(e.start, e.end) 
                }

                return acc + duration
            }, 0)
            const duration_text = date_minutes_to_hours_and_minutes(duration_total)


            const day = date.toLocaleDateString("de", {weekday: "short"})
            const day_number = date.toLocaleDateString("de", {day: "numeric"})
            const month_number = date.toLocaleDateString("de", {month: "numeric"})
            return `${day} ${day_number}.${month_number} (${duration_text})`
        }
    }


    function event_content(info: EventContentInfo) {
        if(info.event.id === "{pointer}"){ return info.timeText }

        const time_entry = info.event.extendedProps as Time_Entry
        const cssClasses = [
            { class: "stable",      condition: time_entry.state === Time_Entry_State.Stable},
            { class: "in-progress", condition: time_entry.state === Time_Entry_State.In_Progress},
            { class: "saving",      condition: time_entry.state === Time_Entry_State.Saving},
            { class: "error",       condition: time_entry.state === Time_Entry_State.Error},
            { class: "deleting",    condition: time_entry.state === Time_Entry_State.Deleting},
            { class: "selected",    condition: time_entry.is_selected},

        ].filter(c => c.condition)
        .map(c => c.class)
        .join(" ")
        return {html:`
            <div class="ec-custom-event ${cssClasses}">
                <div>${info.timeText}</div>
                ${Boolean(time_entry.project) ?     `<div>${time_entry.project?.name}</div>`: ""}
                ${Boolean(time_entry.task) ?        `<div>${time_entry.task?.name}</div>`: ""}
                ${Boolean(time_entry.description) ? `<div>${time_entry.description}</div>`: ""}
            </div>
        `}
    }

    // #region event mapping

    let events: Event[] = []
    const store = time_entires.store

    $: load_events($store)
    function load_events(time_entires: Time_Entry[]){
        const new_events = time_entires.map(time_entry_to_event)

        if(!ec){ return }
        ec.setOption("events", new_events)
        ec.setOption("dayHeaderFormat", make_day_header_format())
        events = new_events
    }

    function time_entry_to_event(te: Time_Entry): Event {
        const color_hash = `${te.project?.name??""}`
        let color = string_to_color(color_hash)
        if(color_hash === ""){
            color = "var(--color-grey-2)"
        }

        return {
            id: String(te.id),
            allDay: false,
            start: te.start,
            end: te.end,
            // editable: true,
            editable: te.state === Time_Entry_State.Stable,
            durationEditable: te.state === Time_Entry_State.Stable,
            startEditable: te.state === Time_Entry_State.Stable,
            backgroundColor: color,
            extendedProps: te,
        }
    }

    // #endregion event mapping

    // #region event handlers

    let is_form_open = false
    let anchor: HTMLElement | undefined
    let cur_time_entry: Time_Entry

    let ec: EventCalendar

    function handle_save(event: CustomEvent<Event_Save>){
        const {detail} = event
        time_entires.reset_selected_time_entry()
        time_entires.update_by_id(cur_time_entry.id, detail)
        time_entires.flag_to_save(cur_time_entry.id)
        is_form_open = false
    }

    function handle_delete(){
        time_entires.reset_selected_time_entry()
        time_entires.flag_to_delete(cur_time_entry.id)
        is_form_open = false
    }

    function handle_close(){
        is_form_open = false
    }

    function handle_update_dates(info: DateSetInfo){
        const detail: Date_Changed_Info ={
            start: info.start,
            end: info.end,
        }
        dispatch("datechanged", detail)
    }

    function handle_select(info: SelectInfo) {
        time_entires.reset_selected_time_entry()
        time_entires.create_time_entry({
			start: info.start,
			end:   info.end,
			state: Time_Entry_State.In_Progress,
		})
        ec.unselect()
    }

    function handle_event_drop(info: EventDropInfo) {
            const te = info.event.extendedProps as Time_Entry
            time_entires.set_time_range(te.id, info.event.start, info.event.end)
    }

    function handle_resize(info: EventResizeInfo){
        const te = info.event.extendedProps as Time_Entry
        time_entires.set_time_range(te.id, info.event.start, info.event.end)
    }
    
    function handle_did_mount(info: EventDidMountInfo){
        const time_entry = info.event.extendedProps as Time_Entry
        if(time_entry.is_selected || time_entry.state === Time_Entry_State.In_Progress){
            is_form_open = true
            cur_time_entry = time_entry
            anchor = info.el
        }
    }

    function handle_click(info: EventClickInfo)  {
        const te = info.event.extendedProps as Time_Entry
        time_entires.select_time_entry(te.id)
    }

    // Note: not used yet
    function handle_click_with_multi_select(info: EventClickInfo)  {
        const te = info.event.extendedProps as Time_Entry

        const is_modifier_on = [
            info.jsEvent.metaKey, 
            info.jsEvent.ctrlKey, 
            info.jsEvent.shiftKey,
        ].some(v => v)

        if(is_modifier_on){
            time_entires.select_additional_time_entry(te.id)
        }else{
            time_entires.select_time_entry(te.id)
        }
    }

    // #endregion event handlers

</script>

<div class="calendar-root">
    <Calendar {plugins} {options} bind:this={ec} />
    {#if cur_time_entry && anchor}
    {#key cur_time_entry && anchor}
    <Popup is_open={is_form_open} anchor_el={anchor} track_scrolling={true}>
            <EventForm 
                projects={projects}
                selected_task={cur_time_entry.task}
                description={cur_time_entry.description}
                is_open={is_form_open}
                on:save={handle_save}
                on:delete={handle_delete}
                on:close={handle_close}
            />
        </Popup>
    {/key}
    {/if}
</div>

<style>
    .calendar-root{
        height: 100%;
    }

    :global(.ec-custom-event){
        /* border:  	      var(--border-color, rgba(255,255,255,0.1)) solid 2px; */
        display: 	      grid;
        /* gap: 			  0.75rem; */
        height:  	      100%;
        /* border-radius:    var(--border-radius); */
        /* background-color: var(--bg-color, #ffffff18); */

        backdrop-filter:  		 blur(3px);
        /* -webkit-backdrop-filter: blur(3px); */

        padding: 0.3rem 0.5rem;
        /* margin:  0 0.2rem; */
        /* grid-template-columns: auto auto 1fr; */
        grid-auto-rows: min-content;
        overflow: hidden;

        user-select: none;

        transition: opacity 100ms;
    }

    :global(.ec-custom-event.in-progress){

        --dash-color: var(--color-orange-1);
        /* --dash-color: red; */

        /* https://stackoverflow.com/questions/28365839/dashed-border-animation-in-css3-animation */
        background-image: linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%);
        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
        background-size: 15px 2px, 15px 2px, 2px 15px, 2px 15px;
        background-position: left top, right bottom, left bottom, right top;
    }

    :global(.ec-custom-event.deleting),
    :global(.ec-custom-event.saving) {
        --dash-color: var(--color-orange-1);

        /* https://stackoverflow.com/questions/28365839/dashed-border-animation-in-css3-animation */
        background-image: linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%);
        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
        background-size: 15px 2px, 15px 2px, 2px 15px, 2px 15px;
        background-position: left top, right bottom, left bottom, right top;
        animation: border-dance 0.7s infinite linear;

    }

    :global(.ec-custom-event.error){
        --dash-color: var(--color-red-1);
        background-image: linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(90deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%), linear-gradient(0deg, var(--dash-color) 50%, transparent 50%);
        background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
        background-size: 15px 2px, 15px 2px, 2px 15px, 2px 15px;
        background-position: left top, right bottom, left bottom, right top;
        animation: border-bounce 0.7s infinite ease;

    }

    :global(.ec-custom-event.deleting) {
        opacity: 0.5;
    }

    :global(.ec-custom-event.selected) {
        border-color:  	  var(--border-color-select, rgba(255,255,255,0.1));
        background-color: var(--bg-color-select,  rgba(255,255,255,0.3));
    }


    @keyframes -global-border-dance {
        0% {
            background-position: left top, right bottom, left bottom, right top;
        }
        100% {
            background-position: left 15px top, right 15px bottom , left bottom 15px , right   top 15px;
        }
    }

    @keyframes -global-border-bounce {
        0% {
            background-position: left top, right bottom, left bottom, right top;
        }
        50% {
            background-position: left 15px top, right 15px bottom , left bottom 15px , right   top 15px;
        }
        100% {
            background-position: left 0 top, right 0 bottom , left bottom 0 , right   top 0;
        }
    }


</style>