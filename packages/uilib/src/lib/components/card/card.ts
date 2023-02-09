export type Card_State = {
	is_selected:  boolean,
	is_form_open: boolean,
}

export function card_new(card?: Partial<Card_State>): Card_State{
	const new_card: Card_State = {
		is_selected:  false,
		is_form_open: false,
	}

	const final_card: Card_State = {
		...new_card,
		...card,
	}

	return final_card
}
