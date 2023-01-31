<script lang="ts">
	import { Greeter  } from "@heimtime/api"
	import { Button } from "@heimtime/uilib"
	const john = new Greeter()
	john.sayHello()


</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button label="click me"/>