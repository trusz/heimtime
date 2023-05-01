<script lang="ts">
  import { Example } from "../internal";
	import Calendar from "./calendar.svelte";
	import { initMocks } from "./mocks";

	initMocks()

</script>


<Example name="Calendar">
	<div class="example-root">
		<Calendar />
	</div>
</Example>


<style>
	.example-root{
		width: 100%;
		height: 500px;
		overflow: hidden;
		border: red thin solid;
	}
</style>