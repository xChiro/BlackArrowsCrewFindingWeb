import {useAuth} from "../useAuth.tsx";
import CrewMemberService from "../../services/CrewMemberService.ts";

const useKickMember = () => {
    const {getAccessToken} = useAuth();

    return async (id: string) => {
        const token = getAccessToken();
        const memberService = new CrewMemberService(token);
        await memberService.kickMember(id);
    };
};

export default useKickMember;