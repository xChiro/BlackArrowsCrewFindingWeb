import {BaseAPIService} from "./BaseAPIService.ts";
import {ChannelInviteResponse} from "./models/ChannelInviteResponse.ts";

export default class ChannelServices extends BaseAPIService {
    public async createChannelInvite(): Promise<ChannelInviteResponse> {
        return await this.postRequest<ChannelInviteResponse>(`/Channels/InviteLink`);
    }
}

