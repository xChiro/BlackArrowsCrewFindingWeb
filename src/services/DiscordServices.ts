import {BaseAPIService} from "./BaseAPIService.ts";
import {ChannelInviteResponse} from "./models/ChannelInviteResponse.ts";

export default class DiscordServices extends BaseAPIService {
    public async createChannelInvite(channelId: string): Promise<ChannelInviteResponse> {
        return await this.postRequest<ChannelInviteResponse>(`/Discord/Channel/${channelId}/InviteLink`);
    }
}

