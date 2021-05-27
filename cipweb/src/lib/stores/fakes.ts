import { Chance } from "chance";

const chance = new Chance;

import type { ProjectSummaryType } from '$lib/types/projectsummary.type'

let fakeProjectSummaries: ProjectSummaryType[] = []

for (let i = 0; i < 10; i++) {
    let fake: ProjectSummaryType = {
        id: chance.string({ length: 5 }),
        name: chance.sentence({ words: 5 }),
        description: chance.sentence({ words: 10 }),
        approved: chance.bool()
    }

    fakeProjectSummaries.push(fake);
}

export let fakeSummaries = fakeProjectSummaries;