<script lang="ts">
	import ProjectstList from '$lib/Project/ProjectsList.svelte';
	import { projectSummaries } from '$lib/stores/projects';
</script>

<h1>Explore the CIP</h1>
<ProjectstList projects={projectSummaries} />
