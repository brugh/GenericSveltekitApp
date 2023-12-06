<script lang="ts">
	export let data

	const { posts, account } = data
</script>

{#each posts as post}
	<h3>{post.title}</h3>
{/each}
