import {PlayerProfile} from "./models/players/PlayerProfile.ts";
import {PlayerCreationRequest} from "./models/players/PlayerCreationRequest.ts";
import {BaseAPIService} from "./BaseAPIService.ts";

export interface ErrorMessageResponse {
    message: string;
    statusCode: number;
}

export default class CrewService extends BaseAPIService {
    public async getCurrenProfile(): Promise<PlayerProfile> {
        return await this.getRequest('/Players/Current/Profile');
    }

    public async createProfile(profile: PlayerCreationRequest): Promise<void> {
        return await this.postRequest('/Players', profile);
    }

    public async updateProfileName(newName: string): Promise<void> {
        return await this.putRequest('/Players/Current/Profile/Name', {UserName: newName});
    }
}
