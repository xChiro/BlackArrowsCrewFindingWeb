import {PlayerProfile} from "./models/players/PlayerProfile.ts";

export default class CrewService {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async getCurrenProfile(): Promise<PlayerProfile> {
        const response = await fetch(`${this.baseUrl}/Players/Current/Profile`);
        return await response.json();
    }
}