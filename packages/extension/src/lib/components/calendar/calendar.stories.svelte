  

<Meta title="Calendar" />
  
<Template let:args>
	<Calendar />
</Template>

<Story name="Primary" args={{}}/>


<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Calendar from "./calendar.svelte";
    import { init_mocks } from "./mocks";

	init_mocks()

    
</script>