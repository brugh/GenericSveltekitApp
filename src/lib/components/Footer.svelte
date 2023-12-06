<script lang="ts">
	import { config } from '$lib'
</script>

<footer>
	<p>{config.title} &copy;{new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
		display: flex;
    align-items: center;
	}

	p {
    margin: auto;
		color: var(--text-2);
	}
</style>
