import { writable, type Writable, get } from "svelte/store"
import { getContext, setContext } from "svelte"
import { type Card_State, card_new, } from "./card"

const context_key = {}


type Cards = Map<number, Card_State>

export function context_card_init(){
	setContext<Card_Context>(context_key, new Card_Context())
}



export function context_card_use(){
	const ctx = getContext<Card_Context>(context_key)
	if(!ctx){
		console.warn({level: "warn", msg: "card context has not been initalized"})
	}
	return ctx
}

class Card_Context {

	public store: Writable<Cards> = writable(new Map())

	// 
	// Selection
	// 
	public select_card(card_id: number){
		this.clear_selection()
		this.close_forms()
		
		this.select_card_add(card_id)
	}

	public select_card_add(card_id: number){		
		this.close_forms()

		const card = this.ensure_card(card_id)
		const selected_card: Card_State = {
			...card,
			is_selected: true,
		}
		
		this.update_card(card_id, selected_card)
	}

	private clear_selection(){
		const cards = get(this.store)

		for(const [key, card] of cards) {
			const new_card: Card_State = {
				...card,
				is_selected: false,
			}
			cards.set(key, new_card)
		}
		this.store.set(cards)
	}

	public get_selected_card_ids(): number[] {
		const ids: number[] = []
		const cards = get(this.store)
		for(const [id, card] of cards) {
			if(!card.is_selected){ continue }

			ids.push(id)
		}

		return ids;
	}



	// 
	// Form Popup
	//
	public open_form(card_id:number){
		this.close_forms()
		const card = this.ensure_card(card_id)
		const opened_form_card: Card_State = {
			...card,
			is_form_open: true,
		}

		this.update_card(card_id, opened_form_card)
	}
	public close_form(card_id: number){
		const card = this.ensure_card(card_id)
		const closed_form_card: Card_State = {
			...card,
			is_form_open: false,
		}

		this.update_card(card_id, closed_form_card)
	}
	
	private close_forms(){
		const cards = get(this.store)
		for(const [key, card] of cards) {
			const new_card: Card_State = {
				...card,
				is_form_open: false,
			}
			cards.set(key, new_card)
		}
		this.store.set(cards)
	}

	// 
	// 
	// 
	private ensure_card(card_id: number): Card_State {
		const cards = get(this.store)
		if(!cards.has(card_id)){
			cards.set(card_id, card_new())
		}
		// we made sure we have a card ^
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const card = cards.get(card_id)!
		return card
	}

	private update_card(card_id: number, card:Card_State){
		const cards = get(this.store)
		cards.set(card_id,card)
		this.store.set(cards)
	}
}
