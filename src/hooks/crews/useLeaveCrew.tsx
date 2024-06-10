import {useAuth} from "../useAuth.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";
import CrewMemberService from "../../services/CrewMemberService.ts";

const useLeaveCrew = () => {
    const {getToken} = useAuth();
    const { leaveCrew } = usePlayer();

    return async () => {
        const token = await getToken();
        const memberService = new CrewMemberService(token);
        await memberService.leaveCrew();
        leaveCrew();
    };
};

export default useLeaveCrew;