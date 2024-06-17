import {useAuth} from "../useAuth.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";
import CrewMemberService from "../../services/CrewMemberService.ts";
import {useNavigate} from "react-router-dom";

const useJoinCrew = (crewId: string) => {
    const {getAccessToken} = useAuth();
    const { joinCrew } = usePlayer();
    const navigate = useNavigate();

    return async () => {
        const token = getAccessToken();
        const memberService = new CrewMemberService(token);
        await memberService.joinCrew(crewId);

        navigate('/crews/' + crewId);
        joinCrew(crewId);
    };
};

export default useJoinCrew;