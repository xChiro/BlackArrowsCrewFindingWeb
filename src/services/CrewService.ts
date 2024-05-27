import {RecentCrewsResponse} from "./models/crews/RecentCrewsResponse.ts";
import {CrewCreation} from "./models/crews/CrewCreation.ts";

export default class CrewService {
    private readonly baseUrl: string;
    private readonly token: string;

    constructor(token: string = "") {
        this.baseUrl = import.meta.env.VITE_APP_BASE_URL;
        this.token = token;
    }

    public async getRecentCrews(): Promise<RecentCrewsResponse> {
        const response = await fetch(`${this.baseUrl}/crews/recent`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (!response.ok)
            throw new Error(data.message);

        return data;
    }

    public async createCrew(crew: CrewCreation): Promise<void> {
        const response = await fetch(`${this.baseUrl}/crews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(crew)
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message);
        }
    }
}