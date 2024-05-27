import {PlayerProfile} from "./models/players/PlayerProfile.ts";
import {PlayerCreationRequest} from "./models/players/PlayerCreationRequest.ts";

export interface ErrorMessageResponse {
    message: string;
    statusCode: number;
}

export default class CrewService {
    private readonly baseUrl: string;
    private readonly token: string;

    constructor(token: string) {
        this.baseUrl = import.meta.env.VITE_APP_BASE_URL;
        this.token = token;
    }

    public async getCurrenProfile(): Promise<PlayerProfile> {
        const response = await fetch(`${this.baseUrl}/Players/Current/Profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    }

    public async createProfile(profile: PlayerCreationRequest): Promise<void> {
        const response = await fetch(`${this.baseUrl}/Players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify(profile)
        });

        if (response.ok) {
            return;
        }

        const data = await response.json();
        throw new Error(data.message);
    }
}