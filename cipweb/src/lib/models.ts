import type { JsonValue } from "./types/json.type"
import type { ProjectSummaryType } from "./types/projectsummary.type"

export type FundingType = {
    sourceName: string,
    committedAmount: number,
    currency: string,

}

export type ProjectType = {
    primary: string,
    secondary?: Set<string>,
}

export type ProjectTimeline = {
    fiscalYear: NonNullable<number>,
    plannedStart?: Date,
    actualStart?: Date,
    plannedEnd?: Date,
    actualEnd?: Date,
}

export type ProjectLocation = {
    geometry: JsonValue,
    bbox: {
        ll: number, lr: number, ul: number, ur: number
    },
    exact: { lat: number, lon: number },
    address: string,
}

export class ProjectDetail {
    summary: ProjectSummaryType;
    timeline: ProjectTimeline;
    projectType: ProjectType;
    status: NonNullable<string>;
    funding: FundingType[];
    location: ProjectLocation;

    addLocation(geojson: JsonValue) {

    }
}

export enum ImprovementType {
    Transportation = "Transportation",
    Water = "Water",
    Health = "Health",
}