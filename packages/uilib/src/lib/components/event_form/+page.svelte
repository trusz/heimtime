<script lang="ts">
	import { Example } from "$lib/components/internal"
	import EventForm from "./event_form.svelte"
	import { init_project_context, use_project_context } from "@heimtime/api"


	init_project_context()
	const {store_projects, create_project, create_task, add_project} = use_project_context()

	add_project(
		create_project(
			0,
			"first",
			[
				create_task(0, "1.1"),
				create_task(1, "1.2"),
				create_task(2, "1.3"),
			]
		),
		create_project(
			1,
			"second",
			[
				create_task(3, "2.1"),
				create_task(4, "2.2"),
				create_task(5, "2.3"),
			]
		)
	)

</script>


<Example name="Event Form" >
	<div class="ex-1">
		<EventForm />
	</div>
</Example>


<style>
	.ex-1{
		width: 300px;
	}

</style>