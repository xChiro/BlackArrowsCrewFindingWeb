import {useAuth} from "../useAuth.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";
import CrewMemberService from "../../services/CrewMemberService.ts";

const useJoinCrew = (crewId: string) => {
    const {getAccessToken} = useAuth();
    const { joinCrew } = usePlayer();

    return async () => {
        const token = getAccessToken();
        const memberService = new CrewMemberService(token);
        await memberService.joinCrew(crewId);
        joinCrew(crewId);
    };
};

export default useJoinCrew;