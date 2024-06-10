import {useAuth} from "../useAuth.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";
import CrewService from "../../services/CrewService.ts";

const useJoinCrew = (crewId: string) => {
    const {getToken} = useAuth();
    const { joinCrew } = usePlayer();

    return async () => {
        const token = await getToken();
        const crewService = new CrewService(token);
        await crewService.joinCrew(crewId);
        joinCrew(crewId);
    };
};

export default useJoinCrew;