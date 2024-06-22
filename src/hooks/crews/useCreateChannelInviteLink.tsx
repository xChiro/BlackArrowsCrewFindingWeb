import {useEffect} from "react";
import {useAuth} from "../useAuth.tsx";
import ChannelServices from "../../services/ChannelServices.ts";
import useSessionStorage from "./useInviteLinkSessionStorage.tsx";
import {usePlayer} from "../usePlayerProfile.tsx";

const useCreateChannelInviteLink = () => {
    const {getAccessToken} = useAuth();
    const {profile} = usePlayer()
    const {saveInviteLink, inviteLink} = useSessionStorage(profile.ActiveCrewId);

    useEffect(() => {
        if (inviteLink === '') {
            const token = getAccessToken();
            new ChannelServices(token)
                .createChannelInvite()
                .then((invite) => {
                    const link = invite?.Link || '';
                    if (sessionStorage.getItem('inviteLink') !== link) {
                        saveInviteLink(link);
                    }
                })
                .catch(() => {
                    if (!sessionStorage.getItem('inviteLink')) {
                        saveInviteLink('');
                    }
                });
        }
    }, []);

    return {inviteLink}
};

export default useCreateChannelInviteLink;