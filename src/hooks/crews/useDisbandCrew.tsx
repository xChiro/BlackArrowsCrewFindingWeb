import {useAuth} from "../useAuth.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";
import CrewMemberService from "../../services/CrewMemberService.ts";

const useDisbandCrew = () => {
    const {getAccessToken} = useAuth();
    const {leaveCrew} = usePlayer();

    return async () => {
        const token = getAccessToken();
        const memberService = new CrewMemberService(token);
        await memberService.disbandCrew();
        leaveCrew();
    };
};

export default useDisbandCrew;