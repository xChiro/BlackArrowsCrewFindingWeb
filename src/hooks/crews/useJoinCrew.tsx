import {useAuthToken} from "../useAuthToken.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";
import CrewService from "../../services/CrewService.ts";

const useJoinCrew = (crewId: string) => {
    const authToken = useAuthToken();
    const { joinCrew } = usePlayer();

    return async () => {
        const token = await authToken();
        const crewService = new CrewService(token);
        await crewService.joinCrew(crewId);
        joinCrew(crewId);
    };
};

export default useJoinCrew;