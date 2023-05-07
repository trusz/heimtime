export type EventCalendar = {
	getOpion: () => Options,
	setOption: (name: string, value: any) => void,
	getEvents: () => Event[],
	getEventById: (id: string) => Event | null,
	removeEventById: (id: string|number) => void,
	addEvent: (event: EventInput) => Event | null,
	updateEvent: (event: EventInput) => Event,
	dateFromPoint(x: number, y: number): Date,
	unselect: () => void,
}

export type EventInput = Event | {
	id: string,
	start: Date,
	end: Date,
	title: string,
	resourceId: string,
}


// https://github.com/vkurko/calendar#duration-object
export type Options = Partial<{
	items: 		     	   Event[],
	view:            	   "timeGridWeek",
	slotDuration:    	   string | number | Duration,
	events: 	     	   Event[],
	editable:        	   boolean,
	eventClick:      	   EventClick,
	slotMaxTime:     	   string | number,
	slotMinTime:     	   string | number,
	datesSet: 	     	   DatesSet,
	eventDrop: 	     	   EventDropFn,
	eventDragStop:   	   EventDragStopFn,
	eventDragStart:  	   EventDragStartFn,
	eventContent:    	   string | Object | EventContentFn
	eventTimeFormat: 	   {hour: string, minute: string} | ((time:Date) => string),
	eventResize:     	   EventResizeFn,
	selectable:      	   boolean,
	select: 		 	   SelectFn,
	pointer: 		 	   boolean,
	dayMaxEvents: 	 	   boolean,
	nowIndicator:    	   boolean,
	eventDidMount:   	   EventDidMountFn,
	resourceLabelDidMount: ResourceLabelDidMountFn,
	locale:		  	   	   string,
	dayHeaderFormat: 	   {weekday: string, month: string, day: string} | DayHeaderFormatFn,
	firstDay:		  	   number,
	duration:		  	   Duration,
	hiddenDays:		  	   number[],
}>

export type DayHeaderFormatFn = (time: Date) => string

export type EventResizeFn = (info: EventResizeInfo) => void
export type EventResizeInfo = {
	event: Event,
	jsEvent: MouseEvent,
	view: View,
}

export type EventContentFn = (info: EventContentInfo) => string | Object
export type EventContentInfo = {
	event: Event,
	timeText: string,
	view: View,
}

export type ResourceLabelDidMountFn = (info: ResourceLabelDidMountInfo) => void
export type ResourceLabelDidMountInfo = {
	el: HTMLElement,
	resource: Resource,
	view: View,
}

export type EventDidMountFn = (info: EventDidMountInfo) => void
export type EventDidMountInfo = {
	el: HTMLElement,
	event: Event,
	isMirror: boolean,
	isStart: boolean,
	isEnd: boolean,
	view: View,
}

export type SelectFn = (selection: SelectInfo) => void
export type SelectInfo = {
	start: Date,
	end: Date,
	startStr: string,
	endStr: string,
	allDay: boolean,
	jsEvent: MouseEvent,
	view: View,
	resource: Resource,
}

type Resource = {
	id: string,
	title: string,
}

/**
 * Duration object: https://github.com/vkurko/calendar#duration-object
 * This is a JavaScript object that the Event Calendar uses to store information about a period of time, like 30 minutes or 1 day and 6 hours.
 * 
 * Here are all properties that exist in Duration object:
 * 
 * - years: The number of years in duration
 * - months: The number of months in duration
 * - days: The number of days in duration
 * - seconds: The number of seconds in duration. If you want hours and minutes, you need to do division on this property
 * - inWeeks: Determines whether the duration represents a time period in weeks. This value is set during parsing the input data 
 */

export type Duration = {
	years: number,
	months: number,
	days: number,
	seconds: number,
	inWeeks: boolean,
}

/**
 * Event object: https://github.com/vkurko/calendar#event-object
 * This is a JavaScript object that the Event Calendar uses to store information about a calendar event.
 * 
 * Here are all properties that exist in Event object:
 * - id: A unique string identifier of the event
 * - resourceIds: An array of resource IDs that the event is associated with
 * - allDay: true or false. Determines if the event is shown in the all-day slot
 * - start: JavaScript Date object holding the event’s start time
 * - end: JavaScript Date object holding the event’s end time
 * - title: The text appearing on the event
 * - titleHTML: The HTML version of the title
 * - editable: true, false or undefined. The value overriding the editable setting for this specific event
 * - startEditable: true, false or undefined. The value overriding the eventStartEditable setting for this specific event
 * - durationEditable: true, false or undefined. The value overriding the eventDurationEditable setting for this specific event
 * - display: The rendering type of the event. Can be 'auto' or 'background'
 *  		  In addition, in your callback functions, you may get the 'ghost', 'preview' and 'pointer' for this property, which are internal values and are used, for example, to display events during drag-and-drop operations
 * - backgroundColor: The eventBackgroundColor override for this specific event
 * - extendedProps: A plain object holding miscellaneous properties specified during parsing in the explicitly given extendedProps field
 */

export type Event = Partial<{
	id: 		      string,
	resourceIds:      string[],
	allDay: 	      boolean,
	start: 	          Date,
	end: 		      Date,
	title: 		      string,
	titleHTML: 	      string,
	editable: 	      boolean,
	startEditable:    boolean,
	durationEditable: boolean,
	display:          string,
	backgroundColor:  string,
	extendedProps:    unknown,
}>

export type EventClick = (info: EventClickInfo) => void
export type EventClickInfo = {
	event: 	 Event,
	el: 	 HTMLElement,
	jsEvent: MouseEvent,
	view: 	 View,
}
type View = {
	type: 		  string,
	title: 	      string,
	activeStart:  Date,
	activeEnd:    Date,
	currentStart: Date,
	currentEnd:   Date,
}


export type DatesSet = (info: DateSetInfo) => void

export type DateSetInfo = {
	start:    Date,
	end:      Date,
	startStr: string,
	endStr:   string,
	view: 	  View
}

export type EventDropFn = (info: EventDropInfo) => void

export type EventDropInfo = {
	event: 	 Event,
	oldEvent: Event,
	delta: 	 Duration,
	revert:  () => void,
	jsEvent: MouseEvent,
	view: 	 View,
}

export type EventDragStartFn = (info: EventDragStartInfo) => void

export type EventDragStartInfo = {
	event: 	 Event,
	el: 	 HTMLElement,
	jsEvent: MouseEvent,
	view: 	 View,
}

export type EventDragStopFn = (info: EventDragStopInfo) => void

export type EventDragStopInfo = {
	event: 	 Event,
	el: 	 HTMLElement,
	jsEvent: MouseEvent,
	view: 	 View,
}