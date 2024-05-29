import {useAuthToken} from "./useAuthToken.tsx";
import {usePlayer} from "./usePlayerProfile.tsx";
import CrewService from "../services/CrewService.ts";

const useLeaveCrew = (crewId: string) => {
    const authToken = useAuthToken();
    const { leaveCrew } = usePlayer();

    return async () => {
        const token = await authToken();
        const crewService = new CrewService(token);
        await crewService.leaveCrew(crewId);
        leaveCrew();
    };
};

export default useLeaveCrew;