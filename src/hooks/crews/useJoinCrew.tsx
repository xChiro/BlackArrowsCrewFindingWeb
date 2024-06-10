import {useAuth} from "../useAuth.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";
import CrewMemberService from "../../services/CrewMemberService.ts";

const useJoinCrew = (crewId: string) => {
    const {getToken} = useAuth();
    const { joinCrew } = usePlayer();

    return async () => {
        const token = await getToken();
        const memberService = new CrewMemberService(token);
        await memberService.joinCrew(crewId);
        joinCrew(crewId);
    };
};

export default useJoinCrew;