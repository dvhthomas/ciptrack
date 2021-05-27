<script lang="ts">
	import ProjectSnippet from '$lib/Project/ProjectSnippet.svelte';
	import type { ProjectSummaryType } from '$lib/types/projectsummary.type';
	export let projects: ProjectSummaryType[];
</script>

{#if projects.length === 0}
	<p>No projects selected.</p>
{:else}
	<table>
		<th>Name</th><th>Detail</th>
		{#each projects as project}
			<ProjectSnippet {project} />
		{/each}
	</table>
{/if}
