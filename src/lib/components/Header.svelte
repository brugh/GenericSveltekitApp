<script lang="ts">
	import { config } from '$lib'
	import { Menu } from 'lucide-svelte'
</script>

<nav>
	<a href="/" class="title">
		<strong>{config.title}</strong>
	</a>

	<!-- <label for="menu-toggle">&#9776;</label> -->
	<label for="menu-toggle"><Menu size="28" /></label>
	<input type="checkbox" id="menu-toggle" />
	<ul id="menu">
		<li><a href="/about">About</a></li>
		<li><a href="/contact">Contact</a></li>
		<li><a href="/rss.xml">RSS</a></li>
	</ul>
</nav>

<style>
	#menu-toggle {
		display: none;
	}

	#menu {
		margin-top: var(--size-7);
		max-height: 0;
		overflow: hidden;
		transition: max-height 500ms;
	}

	#menu-toggle:checked + #menu {
		display: block;
		max-height: 5rem;
		right: 0;
	}

	label {
		cursor: pointer;
		position: absolute;
		top: var(--size-7);
		right: 0;
	}

	nav {
		border-bottom: 1px solid var(--border);
		position: relative;
		padding-block: var(--size-7);
		display: flex;
		justify-content: space-between;
	}

	ul {
		display: block;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 512px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		label {
			display: none;
		}

		#menu {
			max-height: 2rem;
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
