<script lang="ts">
	import Header from '$lib/Header/index.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer base {
		h1 {
			@apply text-2xl;
			@apply text-primary-500;
		}

		p a {
			text-decoration: underline;
		}
	}
</style>
