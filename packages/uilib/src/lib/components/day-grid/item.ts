export type Item = {
	start: 	   number;
	end:   	   number;
	component: SvelteComp;
	props: 	   ComponentProps
}

export type SvelteComp 	   = new (...a: any[]) => any
export type ComponentProps = {[key: string]: unknown}