import {useAuth} from "../useAuth.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";
import CrewMemberService from "../../services/CrewMemberService.ts";
import useSessionStorage from "./useInviteLinkSessionStorage.tsx";

const useDisbandCrew = () => {
    const {getAccessToken} = useAuth();
    const {leaveCrew, profile} = usePlayer();
    const {clearInviteLink} = useSessionStorage(profile.ActiveCrewId);

    return async () => {
        const token = getAccessToken();
        const memberService = new CrewMemberService(token);
        await memberService.disbandCrew();
        leaveCrew();
        clearInviteLink();
    };
};

export default useDisbandCrew;