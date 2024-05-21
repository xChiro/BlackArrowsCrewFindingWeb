import {RecentCrewsResponse} from "./models/crews/RecentCrewsResponse.ts";

export default class CrewService {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = process.env.REACT_APP_BASE_URL!.toString();
    }

    public async getRecentCrews(): Promise<RecentCrewsResponse> {
        const response = await fetch(`${this.baseUrl}/crews/recent`);
        return await response.json();
    }

}