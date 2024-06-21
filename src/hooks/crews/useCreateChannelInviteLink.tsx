import {useEffect, useState} from "react";
import {useAuth} from "../useAuth.tsx";
import ChannelServices from "../../services/ChannelServices.ts";

const useCreateChannelInviteLink = () => {
    const {getAccessToken} = useAuth();
    const [inviteLink, setInviteLink] = useState("");

    useEffect(() => {
        const token = getAccessToken();
        new ChannelServices(token).createChannelInvite().then(
            (invite) => {
                setInviteLink(invite.Link);
            }
        ).catch(() => setInviteLink(""));
    }, []);

    return inviteLink
};

export default useCreateChannelInviteLink;