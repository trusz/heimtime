export function minutes_to_date(minutes: number, date = new Date()): Date{

	const hours = Math.floor(minutes / 60)
	const mins = minutes%60
	date.setMinutes(mins)
	date.setHours(hours)

	return date
}