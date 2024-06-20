import {CrewMember} from "./CrewMember.ts";
import {BaseCrew} from "./RecentCrew.ts";

export interface Crew extends BaseCrew {
    CaptainName: string;
    Members: CrewMember[];
    VoiceChannelId?: string;
    CreatedAt: Date;
}