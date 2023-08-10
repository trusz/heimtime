  

<Meta title="Calendar" />
  
<Template let:args>
</Template>

<Story name="Primary" args={{}}>
	<div use:init>
		<Calendar />
	</div>
</Story>


<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Calendar from "./calendar.svelte";
    import { init_mocks } from "./mocks";
	import { onMount } from "svelte"

	// onMount( () => {
		// console.trace("initing")
	// })
	
	init_mocks()
	function init(node: HTMLElement){
	}


</script>