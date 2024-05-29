import {useSelector} from 'react-redux';

export interface PlayerProfile {
    Id: string;
    CitizenName: string;
    ActiveCrewName: string;
    ActiveCrewId: string;
}

export const usePlayer = () => {
    const profile = useSelector((state: { playerProfile: PlayerProfile }) => state.playerProfile);

    const isInCrew = (): boolean => {
        return profile.ActiveCrewId !== '';
    };

    const isProfileLoaded = (): boolean => {
        return profile.Id !== '';
    }

    return {profile, isInCrew, isProfileLoaded};
};