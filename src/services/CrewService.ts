import {RecentCrewsResponse} from "./models/RecentCrewsResponse.ts";

export default class CrewService {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async getRecentCrews(): Promise<RecentCrewsResponse> {
        const response = await fetch(`${this.baseUrl}/crews/recent`);
        return await response.json();
    }

}