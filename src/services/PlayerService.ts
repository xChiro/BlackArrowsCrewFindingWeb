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

    public async getCurrenProfile(): Promise<PlayerProfile | null> {
        const response = await fetch(`${this.baseUrl}/Players/Current/Profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        });

        if (response.status === 404) {
            return null;
        }

        return await response.json();
    }

    public async createProfile(profile: PlayerCreationRequest): Promise<ErrorMessageResponse | null> {
        const response = await fetch(`${this.baseUrl}/Players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify(profile)
        });

        if (response.status === 200) {
            return null;
        }

        const message = await response.text();

        return {message: message, statusCode: response.status};
    }
}