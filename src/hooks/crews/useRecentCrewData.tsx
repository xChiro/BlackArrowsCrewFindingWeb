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
        location: `${crew.ReunionPoint.System}/${crew.ReunionPoint.PlanetarySystem}/${crew.ReunionPoint.PlanetMoon}/${crew.ReunionPoint.Place}`
    };
}

const useRecentCrewData = () => {
    const [crewData, setCrewData] = useState<CrewViewProps[]>([]);
    const {profile} = usePlayer();

    useEffect(() => {
        const crewService = new CrewService();
        crewService.getRecentCrews()
            .then(crews => {
                const crewData = crews.Crews.map(crew => extractCrew(crew));
                setCrewData(crewData);
            }).catch(error => {
            console.error(error);
        })
    }, [profile.ActiveCrewId, profile.Id]);

    return crewData;
};

export default useRecentCrewData;