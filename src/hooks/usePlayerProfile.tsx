import {useDispatch, useSelector} from 'react-redux';
import {addCrew, removeCrew} from "../stores/PlayerProfileSlice.ts";

export interface PlayerProfile {
    Id: string;
    CitizenName: string;
    ActiveCrewName: string;
    ActiveCrewId: string;
}

export const usePlayer = () => {
    const profile = useSelector((state: { playerProfile: PlayerProfile }) => state.playerProfile);
    const dispatch = useDispatch();

    const isInCrew = (): boolean => {
        return profile.ActiveCrewId !== '';
    };

    const isProfileLoaded = (): boolean => {
        return profile.Id !== '';
    }

    const joinCrew = (crewId: string) => {
        dispatch(addCrew(crewId));
    }

    const leaveCrew = () => {
        dispatch(removeCrew());
    }

    return {profile, isInCrew, isProfileLoaded, joinCrew, leaveCrew};
};