<script lang="ts">
	// @ts-ignore
    import Calendar from '@event-calendar/core'; 
	// @ts-ignore
    import TimeGrid from '@event-calendar/time-grid';
	// @ts-ignore
    import Interaction from '@event-calendar/interaction';
    import type { Options, Event, DateSetInfo, EventClickInfo, EventDropInfo, EventDidMountInfo, EventDragStopInfo, ResourceLabelDidMountInfo, EventContentInfo, SelectInfo, EventCalendar } from "./calendar-types"
    import { 
        time_entry_context_use, 
        date_format_iso,
        type Time_Entry,
        Time_Entry_State,
        init_project_context,
    } from "@heimtime/api"
    import { createEventDispatcher } from 'svelte'; 
  import type { Date_Changed_Info } from './datechanged';
  import { string_to_color } from '../card/color-hash';
  import '@event-calendar/core/index.css';
  import { Popup } from '../popup';
  import { EventForm } from '../event_form';

    // 
    // Init
    // 
    const dispatch = createEventDispatcher()

    // 
    // Config
    // 
    let plugins = [TimeGrid,Interaction]
    let options: Options = {}
    $: options = {
        view: "timeGridWeek",
        height: "100%",
		slotDuration :"00:15",
		events: items,
		editable: true,
		eventClick: handle_click,
        slotMinTime: "06:00:00",
        slotMaxTime: "22:00:00",
        datesSet: update_dates,
        // eventDrop: console.log,
        eventDrop: (info: EventDropInfo) => {
            console.log("eventDrop", info)
        },
        eventDragStart: console.log,
        eventDragStop: (info: EventDragStopInfo) => {
            console.log("eventDragStop", info)
        },
        eventTimeFormat:{
            hour: 'numeric',
            minute: '2-digit',
            meridiem: false,
            hour12: false,
        },
        selectable: true,
        select: handle_select,
        pointer: true,
        dayMaxEvents: true,
        nowIndicator: true,
        // eventDidMount: (info: EventDidMountInfo) => {
        //     console.log("eventDidMount", info)
        // },
        eventContent: event_content,
    };

    function handle_click(info: EventClickInfo)  { 
        anchor = info.el; 
        is_form_open = true; 
        cur_time_entry = info.event.extendedProps as Time_Entry
        console.log({level:"dev", msg:"handle_click", info, cur_time_entry})
    }


    function handle_select(info: SelectInfo) {
        console.log({level:"dev", msg:"handle_select", info, events: ec.getEvents()})
        create_time_entry_v2({
			start: info.start,
			end: info.end,
			state: Time_Entry_State.In_Progress,
		})
        ec.unselect()
    }

    function event_content(info: EventContentInfo) {
        if(info.event.id=== "{pointer}"){ return info.timeText }
        if(info.event.id=== "{select}"){ return info.timeText }

        // console.log({level:"dev", msg:"eventContent", info})
        const time_entry = info.event.extendedProps as Time_Entry
        const cssClasses = [
            { class: "stable",      condition: time_entry.state === Time_Entry_State.Stable},
            { class: "in-progress", condition: time_entry.state === Time_Entry_State.In_Progress},
            { class: "saving",      condition: time_entry.state === Time_Entry_State.Saving},
            { class: "error",       condition: time_entry.state === Time_Entry_State.Error},
            { class: "deleting",    condition: time_entry.state === Time_Entry_State.Deleting},

        ].filter(c => c.condition)
        .map(c => c.class)
        .join(" ")



        return {html:`
            <div class="ec-custom-event ${cssClasses}">
                <div>${info.timeText}</div>
                <div>${time_entry.project?.name}</div>
                <div>${time_entry.task?.name}</div>
                <div>${time_entry.description}</div>
            </div>
        `}
    }

    function update_dates(info: DateSetInfo){
        const detail: Date_Changed_Info ={
            start: info.start,
            end: info.end,
        }
        dispatch("datechanged", detail)
    }

    const { 
        // create_time_entry,
        create_time_entry_v2,
        // last_time_entry, 
        // update_last_time_entry,
        // update_time_entry,
        // update_time_entry_by_id,
        store_time_entry,
    } = time_entry_context_use()

    let items: Event[] = []
    $: items = $store_time_entry.map((te ,tei) => {
        // const color_hash = `${te.project?.name??""}${te.task?.name??""}`
        // const color_hash = `${te.task?.name??""}${te.project?.name??""}`
        const color_hash = `${te.project?.name??""}`
        // const color_hash = `${te.task?.name??""}`

        return {
            id: String(te.id),
            allDay: false,
            start: te.start,
            end: te.end,
            title: te.description,
            // titleHTML: `${te.description}<br/>${te.project?.name??""}<br/>${te.task?.name??""}`,
            titleHTML: `<span class="ec-custom-title">${te.project?.name??""}<br/>${te.task?.name??""}<br/>${te.description}</span>`,
            editable: true,
            backgroundColor: string_to_color(color_hash),
            extendedProps: te,
        }
    })

    $: console.log({level:"dev", $store_time_entry})
    let is_form_open = false
    let anchor: HTMLElement | undefined
    let cur_time_entry: Time_Entry

    
    let ec: EventCalendar

    function handle_save(){}
    function handle_delete(){}
    function handle_close(){}
    

</script>

<div class="calendar-root">
    <Calendar {plugins} {options} bind:this={ec} />
    <Popup is_open={is_form_open} anchor_el={anchor} track_scrolling={true}>
        {#if cur_time_entry}
        {#key cur_time_entry}
            <EventForm 
                selected_task={cur_time_entry.task}
                description={cur_time_entry.description}
                is_open={is_form_open}
                on:save={handle_save}
                on:delete={handle_delete}
                on:close={handle_close}
            />
        {/key}
        {/if}
    </Popup>
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

        /* backdrop-filter:  		 blur(3px); */
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


    .time-span{
        grid-area: 1 / 1 / 4 / 2;
        /* grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 4; */
    }


    .project,
    .task,
    .description{
        text-align: right;
        justify-self: start;
        grid-column-start: 2;
        grid-column-end: 3;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 100%;
    }

</style>