import {useState, useEffect} from 'react';
import {RecentCrew} from '../../services/models/crews/RecentCrew.ts';
import CrewService from '../../services/CrewService.ts';
import {usePlayer} from "../usePlayerProfile.tsx";
import {CrewViewProps} from "../../components/crews/cards/CrewViewComponent.tsx";


const extractCrew = (crew: RecentCrew): CrewViewProps => {
    return {
        crewId: crew.Id,
        crewName: crew.Name,
        captainId: crew.CaptainId,
        activity: crew.Activity,
        description: crew.Description,
        maxAllowedMembers: crew.MaxPlayers,
        totalCurrentMembers: crew.CurrentPlayers,
        Languages: crew.Languages,
        CreatedAt: crew.CreatedAt,
        location: `${crew.ReunionPoint.System}/${crew.ReunionPoint.PlanetarySystem}/${crew.ReunionPoint.PlanetMoon}/${crew.ReunionPoint.Place}`
    };
}

const useRecentCrewData = () => {
    const [crewData, setCrewData] = useState<CrewViewProps[]>([]);
    const {profile} = usePlayer();
    let intervalId: NodeJS.Timeout; // Declare intervalId in scope outside useEffect.

    const fetchCrewData = async () => {
        if(intervalId) clearInterval(intervalId);

        try {
            const crewService = new CrewService();
            const crews = await crewService.getRecentCrews();

            const newCrewData = crews.Crews.map(crew => extractCrew(crew));
            setCrewData(newCrewData);

        } catch (error) {
            console.error(error);
        }

        intervalId = setInterval(fetchCrewData, 300000);
    };

    useEffect(() => {
        fetchCrewData();

        return () => clearInterval(intervalId);
    }, [profile.ActiveCrewId, profile.Id]);

    return { crewData, fetchCrewData };
};

export default useRecentCrewData;