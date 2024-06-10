import {useAuth} from "../useAuth.tsx";
import CrewMemberService from "../../services/CrewMemberService.ts";

const useKickMember = () => {
    const {getToken} = useAuth();

    return async (id: string) => {
        const token = await getToken();
        const memberService = new CrewMemberService(token);
        await memberService.kickMember(id);
    };
};

export default useKickMember;