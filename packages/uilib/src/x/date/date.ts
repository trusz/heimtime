export function minutes_to_date(minutes: number, date = new Date()): Date{

	const new_date = new Date(date)
	const hours = Math.floor(minutes / 60)
	const mins = minutes%60
	new_date.setMinutes(mins)
	new_date.setHours(hours)

	return new_date
}