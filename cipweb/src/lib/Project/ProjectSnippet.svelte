<script lang="ts">
	import type { ProjectSummaryType } from '$lib/types/projectsummary.type';
	export let project: ProjectSummaryType;
</script>

<tr>
	<td>{project.name}</td>
	<td>{project.description}</td>
</tr>
