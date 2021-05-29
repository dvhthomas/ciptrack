<script lang="ts">
	import NavItem from './NavItem.svelte';

	let links = [
		{ url: '/', label: 'Home' },
		{ url: '/explore', label: 'Explore' }
	];
</script>

<nav class="p-4">
	<ul class="flex space-x-2">
		{#each links as link}
			<NavItem url={link.url} label={link.label} />
		{/each}
	</ul>
</nav>
