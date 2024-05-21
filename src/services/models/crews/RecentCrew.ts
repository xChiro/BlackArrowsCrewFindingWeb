import {ReunionPoint} from "./ReunionPoint.ts";

export interface RecentCrew {
    Id: string;
    Name: string;
    Activity: string;
    Description: string;
    ReunionPoint: ReunionPoint;
    Languages: string[];
    MaxPlayers: number;
    CurrentPlayers: number;
}