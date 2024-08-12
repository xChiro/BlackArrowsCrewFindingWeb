import {useDispatch, useSelector} from 'react-redux';
import {ActiveCrew, addMemberToActiveCrew, removeMemberToActiveCrew} from '../../stores/ActiveCrewSlice.ts';
import {useNavigate} from 'react-router-dom';
import useToast from '../../components/utilities/notifications/useToast.tsx';
import useNotifications from '../Notifications/useNotifications.tsx';
import {usePlayer} from '../usePlayerProfile.tsx';

const useCrewEventHandlers = () => {
    const dispatch = useDispatch();
    const activeCrew = useSelector((state: { activeCrew: ActiveCrew }) => state.activeCrew);
    const navigate = useNavigate();
    const showToast = useToast();
    const {leaveCrew, isCaptain, profile} = usePlayer();
    const {addNotification} = useNotifications();

    function leaveCrewAndNavigateHome () {
        leaveCrew();
        navigate('/');
    }

    function handlePlayerJoined (message: { PlayerId: string, CitizenName: string }) {
        if (profile.ActiveCrewId) {
            dispatch(addMemberToActiveCrew({
                Id: message.PlayerId,
                CitizenName: {
                    Value: message.CitizenName
                }
            }));
        }

        addNotification(`${message.CitizenName} joined your crew.`, `/crews/${profile.ActiveCrewId}`);
        showToast(`${message.CitizenName} joined your crew.`);
    }

    function handlePlayerLeft (message: { PlayerId: string }) {
        addNotification(`A player ${activeCrew.Members.find(member => member.Id === message.PlayerId)?.CitizenName.Value ?? ""} left your crew.`, `/crews/${profile.ActiveCrewId}`);

        if (profile.ActiveCrewId) {
            dispatch(removeMemberToActiveCrew(message.PlayerId));
        }
        showToast('A player left your crew.');
    }

    function handleCrewMemberKicked (message: { PlayerId: string }) {
        if (profile.ActiveCrewId) {
            dispatch(removeMemberToActiveCrew(message.PlayerId));
        }

        if (isCaptain(activeCrew.Id, profile.Id ?? '')) {
            return;
        }

        showToast('A player left your crew.');
    }

    function handleCrewDisbanded () {
        showToast('Your crew has been disbanded by the captain.');
        addNotification('Your crew has been disbanded by the captain.', '/');

        leaveCrewAndNavigateHome();
    }

    function handleKickedFromCrew () {
        showToast('You have been kicked from the crew.');
        addNotification('You have been kicked from the crew.', '/');

        leaveCrewAndNavigateHome();
    }

    return {
        handlePlayerLeft,
        handleCrewMemberKicked,
        handleCrewDisbanded,
        handleKickedFromCrew,
        handlePlayerJoined
    };
};

export default useCrewEventHandlers;