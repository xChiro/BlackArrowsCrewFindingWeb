import {PlayerProfile} from "./models/players/PlayerProfile.ts";

export default class CrewService {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = process.env.REACT_APP_BASE_URL!.toString();
    }

    public async getCurrenProfile(): Promise<PlayerProfile> {
        const response = await fetch(`${this.baseUrl}/Players/Current/Profile`);
        return await response.json();
    }
}