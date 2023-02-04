<script lang="ts">
  	// import { Auth_Module } from "@heimtime/api";
	import { goto } from "$app/navigation";
  	import { onMount } from "svelte";
	import { context_api_get, context_api_create } from "../api"
	import { page }  from '$app/stores';
  	import { Auth_Module } from "@heimtime/api";
	import "@heimtime/uilib/style.css"

	export const ssr = false;
	export const prerender = false;
	
	// const base_url = "https://heimat.sprinteins.com/api/v1"
	const base_url = "http://localhost:62866/api/v1/"

	// 
	// Auth
	// 
	let auth_module: Auth_Module
	auth_module = new Auth_Module(base_url);
	const jwt = auth_module.jwt_get()

	// 
	// API
	// 
	context_api_create()
	let api = context_api_get()
	api.set_base_url(base_url)
	api.jwt_set(jwt)
	
	onMount( async () => {
		if(!jwt || jwt === ""){
			console.log({level:"warn", msg:"no jwt found, start login process"})
			if($page.route.id==="/"){ return }
			goto("/")
			return
		}
	})
	
</script>

<slot ></slot>
