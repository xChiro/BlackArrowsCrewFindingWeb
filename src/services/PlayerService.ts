import {PlayerProfile} from "./models/players/PlayerProfile.ts";
import {PlayerCreationRequest} from "./models/players/PlayerCreationRequest.ts";
import {BaseAPIService} from "./BaseAPIService.ts";

export interface ErrorMessageResponse {
    message: string;
    statusCode: number;
}

export default class PlayerService extends BaseAPIService {
    public async getCurrenProfile(): Promise<PlayerProfile> {
        return await this.getRequest('/Profiles/Current/');
    }

    public async createProfile(profile: PlayerCreationRequest): Promise<void> {
        return await this.postRequest('/Players', profile);
    }

    public async updateProfileName(newName: string): Promise<void> {
        return await this.putRequest('/Profiles/Current/Name', {UserName: newName});
    }

    public async deleteAccount(): Promise<void> {
        return await this.deleteRequest('/Profiles/Current');
    }
}
