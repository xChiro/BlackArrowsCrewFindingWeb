import {useDispatch, useSelector} from 'react-redux';
import {addCrew, removeCrew, updateCitizenName} from "../stores/PlayerProfileSlice.ts";

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

    const joinCrew = (crewId: string) => {
        dispatch(addCrew(crewId));
    }

    const leaveCrew = () => {
        dispatch(removeCrew());
    }

    const isCaptain = (crewId: string, crewCaptainId: string): boolean => {
        return profile.ActiveCrewId == crewId && profile.Id == crewCaptainId;
    }

    const setCitizenName = (citizenName: string) => {
        dispatch(updateCitizenName(citizenName));
    }

    return {profile, isInCrew, joinCrew, leaveCrew, isCaptain, setCitizenName};
};