export const date_format_time = Intl.DateTimeFormat("de-DE", {timeStyle:"short"}).format
export const date_format_date_local = Intl.DateTimeFormat("de-DE",{ dateStyle:"short" } ).format

export function date_format_iso(date: Date): string {
	const year = date.getFullYear()
	const month = String(date.getMonth()+1).padStart(2,"0")
	const day = String(date.getDate()).padStart(2,"0")
	return `${year}-${month}-${day}`
}

export function date_week_frames(date = new Date()): [start: Date, end:Date]{
    return [date_first_day_of_week(date,1), date_last_day_of_week(date,1)]
}

export function date_add_days(date: Date, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function date_first_day_of_week(date:Date , first_day_of_week_index = 1): Date{

    const day_of_week = date.getDay()
    const first_day_of_week = new Date(date)
    const diff = day_of_week >= first_day_of_week_index ?
            day_of_week - first_day_of_week_index :
            6 - day_of_week

    first_day_of_week.setDate(date.getDate() - diff)
    first_day_of_week.setHours(0,0,0,0)

    return first_day_of_week
}

function date_last_day_of_week(date:Date , first_day_of_week_index: number): Date {

    const first_day_of_week = date_first_day_of_week(date, first_day_of_week_index)
    const last_day_of_week = date_add_days(first_day_of_week,6)

    return last_day_of_week
}

export function date_is_today(d: Date): boolean {
    const today = date_format_iso(new Date())
    const date = date_format_iso(d)

    const is_today = today === date
    return is_today
}



// 

// 0 - Sunday    
// 1 - Monday    <--
// 2 - Thuesday
// 3 - Wednesday <--
// 4 - Thursday
// 5 - Friday
// 6 - Saturday  