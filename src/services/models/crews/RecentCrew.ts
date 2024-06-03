import {ReunionPoint} from "./ReunionPoint.ts";

export interface BaseCrew {
    Id: string;
    Name: string;
    CaptainId: string;
    Activity: string;
    Description: string;
    ReunionPoint: ReunionPoint;
    Languages: string[];
    MaxPlayers: number;
}

export interface RecentCrew extends BaseCrew {
    CurrentPlayers: number;
}