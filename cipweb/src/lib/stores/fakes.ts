import { Chance } from "chance";

const chance = new Chance;

import type { ProjectSummaryType } from '$lib/types/projectsummary.type'
import { ProjectDetail } from "$lib/models";

let fakeProjectSummaries: ProjectSummaryType[] = []

for (let i = 0; i < 10; i++) {
    let fake: ProjectSummaryType = {
        id: `PRJ-${chance.string({ length: 5 })}`,
        name: chance.sentence({ words: 5 }),
        description: chance.sentence({ words: 20 }),
        approved: chance.bool(),
        rationale: chance.sentence({ words: 10 }),
    }

    fakeProjectSummaries.push(fake);
}

export let fakeSummaries = fakeProjectSummaries;


let fakeProjectDetails: Array<ProjectDetail>;

const fake = new ProjectDetail();
fake.projectType = {
    primary: chance.pickone(['Transportation', 'Health', 'Water']),
}
