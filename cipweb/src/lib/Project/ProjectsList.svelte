<script lang="ts">
	import ProjectSnippet from '$lib/Project/ProjectSnippet.svelte';
	import type { ProjectSummaryType } from '$lib/types/projectsummary.type';
	export let projects: ProjectSummaryType[];
</script>

<table>
	<th>Name</th><th>Detail</th>
	{#each projects as project}
		<ProjectSnippet {project} />
	{/each}
</table>
