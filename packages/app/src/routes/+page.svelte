<script lang="ts">
  import { goto } from "$app/navigation";
  import { Auth_Module } from "@heimtime/api";
  import { context_api_create, context_api_get, parse_jwt, type Claims } from "../api";
  import { onMount } from "svelte";

	export const ssr = false;
	export const prerender = false;
	
	// const base_url = "https://heimat.sprinteins.com/api/v1"
	// const base_url = "http://localhost:62866/api/v1/"
	const base_url = window.location.origin

	let auth_module: Auth_Module
	context_api_create()
	let api = context_api_get()
	api.set_base_url(base_url)
	
	onMount( async () => {
		auth_module = new Auth_Module(base_url);
		await auth_module.load();
		const jwt = auth_module.jwt_get()
		console.log({level:"dev", msg:"checking jwt", jwt})
		if(!jwt || jwt === ""){ return }
		
		api.jwt_set(jwt)
		goto("/calendar")
	})

	export function sign_in(): void {
		const signInType = "loginRedirect"
		auth_module.login(signInType);
	}
	export function sign_out(): void {
    	auth_module.logout();
	}

</script>

<h1>Welcome to Heimtime</h1>

<button on:click={sign_in} on:keydown> Login </button>