import { writable } from 'svelte/store'

import type { ProjectSummaryType } from '$lib/types/projectsummary.type'

const initalProjects: ProjectSummaryType[] = [
    { id: 'a1', name: 'Project A', description: 'A short proposal', approved: false },
    {
        id: 'b2', name: 'Project B',
        description: 'A short proposal of a different kind', approved: true
    },
]

export const projectSummaries = initalProjects