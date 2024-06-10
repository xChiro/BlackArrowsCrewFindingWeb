import {useAuth} from "../useAuth.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";
import CrewService from "../../services/CrewService.ts";

const useLeaveCrew = () => {
    const {getToken} = useAuth();
    const { leaveCrew } = usePlayer();

    return async () => {
        const token = await getToken();
        const crewService = new CrewService(token);
        await crewService.leaveCrew();
        leaveCrew();
    };
};

export default useLeaveCrew;