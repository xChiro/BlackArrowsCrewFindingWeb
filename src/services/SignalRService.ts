import {BaseAPIService} from "./BaseAPIService.ts";

export default class SignalRService extends BaseAPIService {
    public async negotiate(): Promise<{url: string, accessToken: string}> {
        return await this.postRequest<{url: string, accessToken: string}>('/negotiate');
    }
}