<script lang="ts">
	import ProjectCount from '$lib/Project/ProjectCount.svelte';
	import ProjectstList from '$lib/Project/ProjectsList.svelte';
	import { projectSummaries } from '$lib/stores/projects';
</script>

<h1>Explore the Plan</h1>
<ProjectCount projects={projectSummaries} />
<ProjectstList projects={projectSummaries} />
