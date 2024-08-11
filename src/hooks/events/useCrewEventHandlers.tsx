import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ActiveCrew, addMemberToActiveCrew, removeMemberToActiveCrew} from '../../stores/ActiveCrewSlice.ts';
import { useNavigate } from 'react-router-dom';
import useToast from '../../components/utilities/notifications/useToast.tsx';
import useNotifications from '../Notifications/useNotifications.tsx';
import { usePlayer } from '../usePlayerProfile.tsx';

const useCrewEventHandlers = () => {
    const dispatch = useDispatch();
    const activeCrewId = useSelector((state: { activeCrew: ActiveCrew }) => state.activeCrew.Id);
    const activeCrewMembers = useSelector((state: { activeCrew: ActiveCrew }) => state.activeCrew.Members);
    const navigate = useNavigate();
    const showToast = useToast();
    const { leaveCrew, isCaptain, profile } = usePlayer();
    const { addNotification } = useNotifications();

    const leaveCrewAndNavigateHome = useCallback(() => {
        leaveCrew();
        navigate('/');
    }, [leaveCrew, navigate]);

    const handlePlayerJoined = useCallback(
        (message: { PlayerId: string, CitizenName: string }, isCurrentUser: boolean) => {
            if (activeCrewId) {
                dispatch(addMemberToActiveCrew({
                    Id: message.PlayerId,
                    CitizenName: {
                        Value: message.CitizenName
                    }
                }));

                addNotification({
                    id: message.PlayerId,
                    text: `A player joined to your crew.`,
                    url: `/crews/${activeCrewId}`
                });
            }

            if (!isCurrentUser) {
                showToast("A player joined to your crew.");
            }
        },
        [activeCrewId, dispatch, addNotification, showToast]
    );

    const handlePlayerLeft = useCallback(
        (message: { PlayerId: string }, isCurrentUser: boolean) => {
            if (activeCrewId) {
                dispatch(removeMemberToActiveCrew(message.PlayerId));
                addNotification({
                    id: message.PlayerId,
                    text: `A player ${activeCrewMembers.find(member => member.Id === message.PlayerId)?.CitizenName.Value} left your crew.`,
                    url: `/crews/${activeCrewId}`
                });
            }

            if (!isCurrentUser) {
                showToast('A player left your crew.');
            }
        },
        [activeCrewId, activeCrewMembers, dispatch, addNotification, showToast]
    );

    const handleCrewMemberKicked = useCallback(
        (message: { PlayerId: string }, isCurrentUser: boolean) => {
            if (activeCrewId) {
                dispatch(removeMemberToActiveCrew(message.PlayerId));
            }

            if (!isCurrentUser || isCaptain(activeCrewId, profile.Id ?? '')) {
                return;
            }

            showToast('A player left your crew.');
        },
        [activeCrewId, dispatch, isCaptain, profile.Id, showToast]
    );

    const handleCrewDisbanded = useCallback(() => {
        showToast('Your crew has been disbanded by the captain.');
        addNotification({
            id: activeCrewId,
            text: 'Your crew has been disbanded by the captain.',
            url: '/'
        });

        leaveCrewAndNavigateHome();
    }, [activeCrewId, addNotification, showToast, leaveCrewAndNavigateHome]);

    const handleKickedFromCrew = useCallback(() => {
        showToast('You have been kicked from the crew.');
        addNotification({
            id: activeCrewId,
            text: 'You have been kicked from the crew.',
            url: '/'
        });

        leaveCrewAndNavigateHome();
    }, [activeCrewId, addNotification, showToast, leaveCrewAndNavigateHome]);

    return {
        handlePlayerLeft,
        handleCrewMemberKicked,
        handleCrewDisbanded,
        handleKickedFromCrew,
        handlePlayerJoined
    };
};

export default useCrewEventHandlers;