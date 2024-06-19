import {RecentCrewsResponse} from "./models/crews/RecentCrewsResponse.ts";
import {CrewCreation} from "./models/crews/CrewCreation.ts";
import {Crew} from "./models/crews/Crew.ts";
import {BaseAPIService} from "./BaseAPIService.ts";
import {CrewCreationResponse} from "./models/CrewCreationResponse.ts";

export default class CrewService extends BaseAPIService {
    public async getRecentCrews(): Promise<RecentCrewsResponse> {
        return await this.getRequest<RecentCrewsResponse>('/Recent/Crews', false);
    }

    public async getCrew(id: string): Promise<Crew> {
        return await this.getRequest<Crew>(`/crews/${id}`);
    }

    public async createCrew(crew: CrewCreation): Promise<CrewCreationResponse> {
        return await this.postRequest<CrewCreationResponse>('/crews', crew);
    }
}

