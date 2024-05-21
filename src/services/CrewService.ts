import {RecentCrewsResponse} from "./models/crews/RecentCrewsResponse.ts";

export default class CrewService {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = import.meta.env.VITE_APP_BASE_URL;
    }

    public async getRecentCrews(): Promise<RecentCrewsResponse> {
        const response = await fetch(`${this.baseUrl}/crews/recent`);
        return await response.json();
    }

}