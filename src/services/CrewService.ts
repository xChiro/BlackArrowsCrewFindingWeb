import {RecentCrewsResponse} from "./models/crews/RecentCrewsResponse.ts";
import {CrewCreation} from "./models/crews/CrewCreation.ts";
import {Crew} from "./models/crews/Crew.ts";

export default class CrewService {
    private readonly baseUrl: string;
    private readonly token: string;

    constructor(token: string = "") {
        this.baseUrl = import.meta.env.VITE_APP_BASE_URL;
        this.token = token;
    }

    public async getRecentCrews(): Promise<RecentCrewsResponse> {
        const response = await fetch(`${this.baseUrl}/Recent/Crews`, {
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

    public async getCrew(id: string): Promise<Crew> {
        const response = await fetch(`${this.baseUrl}/crews/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            }
        });

        const data = await response.json();

        if (!response.ok)
            throw new Error(data.message);

        return data;
    }

    public async createCrew(crew: CrewCreation): Promise<string> {
        const response = await fetch(`${this.baseUrl}/crews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(crew)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data.CrewId;
    }

    public async joinCrew(crewId: string): Promise<void> {
        const response = await fetch(`${this.baseUrl}/crews/${crewId}/members`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            }
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.Message);
        }
    }

    public async leaveCrew(): Promise<void> {
        const response = await fetch(`${this.baseUrl}/crews/leave`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            }
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.Message);
        }
    }

    public async disbandCrew(): Promise<void> {
        const response = await fetch(`${this.baseUrl}/crews/disband`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            }
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.Message);
        }
    }
}