import { useState } from 'react';

const useSessionStorage = (crewId: string) => {
    const getSessionStorage = () => sessionStorage.getItem(crewId) || '';

    const [inviteLink, setInviteLink] = useState(getSessionStorage());

    const saveInviteLink = (link: string) => {
        sessionStorage.setItem(crewId, link);
        setInviteLink(link);
    };

    const clearInviteLink = () => {
        sessionStorage.removeItem(crewId);
        setInviteLink('');
    };

    return {inviteLink, saveInviteLink, clearInviteLink}
};

export default useSessionStorage;