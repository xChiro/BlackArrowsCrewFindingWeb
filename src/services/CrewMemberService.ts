import {BaseAPIService} from "./BaseAPIService.ts";

export default class CrewMemberService extends BaseAPIService {
    public async leaveCrew(): Promise<void> {
        await this.deleteRequest<void>('/crews/leave');
    }

    public async disbandCrew(): Promise<void> {
        await this.deleteRequest<void>('/crews/disband');
    }

    public async kickMember(id: string): Promise<void> {
        await this.deleteRequest<void>(`/crews/members/${id}`);
    }

    public async joinCrew(crewId: string): Promise<void> {
        await this.putRequest(`/crews/${crewId}/members`);
    }
}