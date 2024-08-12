import {BaseAPIService} from "./BaseAPIService.ts";

export default class SignalRService extends BaseAPIService {
    public async negotiate(): Promise<{Url: string, AccessToken: string}> {
        return await this.postRequest<{Url: string, AccessToken: string}>('/negotiate');
    }
}