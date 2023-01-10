<script lang="ts">
	import { Greeter  } from "@someproject/api"
	import { Button } from "@someproject/uilib"
	const john = new Greeter()
	john.sayHello()
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button label="click me" />