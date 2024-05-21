import {PlayerProfile} from "./models/players/PlayerProfile.ts";

export default class CrewService {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = import.meta.env.VITE_APP_BASE_URL;
    }

    public async getCurrenProfile(): Promise<PlayerProfile> {
        const response = await fetch(`${this.baseUrl}/Players/Current/Profile`);
        return await response.json();
    }
}