<script lang="ts">
	import { page } from '$app/stores';
	export let url: string;
	export let label: string;
	$: active = $page.path === url;
	console.log($page.path);
</script>

<li>
	<a
		class="block px-4 py-2 rounded-md"
		class:bg-secondary-100={active}
		class:text-secondary-700={active}
		href={url}>{label}</a
	>
</li>
