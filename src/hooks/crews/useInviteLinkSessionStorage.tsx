import { useState } from 'react';

const useSessionStorage = () => {
    const getSessionStorage = () => sessionStorage.getItem('inviteLink') || '';

    const [inviteLink, setInviteLink] = useState(getSessionStorage());

    const saveInviteLink = (link: string) => {
        sessionStorage.setItem('inviteLink', link);
        setInviteLink(link);
    };

    const clearInviteLink = () => {
        sessionStorage.removeItem('inviteLink');
        setInviteLink('');
    };

    return {inviteLink, saveInviteLink, clearInviteLink}
};

export default useSessionStorage;