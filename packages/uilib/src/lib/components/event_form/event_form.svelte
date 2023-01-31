<script lang="ts">

	function handle_submit(e:unknown){
		console.log({level:"dev", msg:"submiting",e})
	}
</script>

<event-form>
	<form on:submit={handle_submit}>
	<label>
		<span>Project</span>
		<select>
			<option>Proj 1</option>
			<option>Proj 2</option>
			<option>Proj 3</option>
		</select>
	</label>

	<label>
		<span>Task</span>
		<select>
			<option>Task 1</option>
			<option>Task 2</option>
			<option>Task 3</option>
		</select>
	</label>

	<label>
		<span>Description</span>
		<textarea rows=5></textarea>
	</label>

	<button type="submit">save</button>
</form>
</event-form>

<style>

	

	form{
		display: flex;
		flex-direction: column;
		gap:0.5rem;
		padding: 1rem;
	}

	select,
	textarea {
		padding:0.2rem 0.3rem;
		background-color: black;
		color: white;
		border-radius: var(--border-radius);
	}

	label{
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}
</style>