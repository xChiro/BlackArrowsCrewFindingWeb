import {useEffect, useState} from "react";
import {useAuth} from "../useAuth.tsx";
import DiscordServices from "../../services/DiscordServices.ts";

const useCreateChannelInvite = (id?: string) => {
    const {getAccessToken} = useAuth();
    const [inviteCode, setInviteCode] = useState("");

    useEffect(() => {
        if(!id) return;

        const token = getAccessToken();
        new DiscordServices(token).createChannelInvite(id).then(
            (invite) => {
                setInviteCode(invite.Code);
            }
        ).catch(() => setInviteCode(""));
    }, [id, getAccessToken]);

    return `https://discord.gg/${inviteCode}`;
};

export default useCreateChannelInvite;