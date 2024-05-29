import {useState, useEffect} from 'react';
import {CrewCardComponentProps} from '../components/crews/cards/CrewCardComponent';
import {RecentCrew} from '../services/models/crews/RecentCrew.ts';
import CrewService from '../services/CrewService';

const extractCrew = (crew: RecentCrew): CrewCardComponentProps => {
    return {
        crewId: crew.Id,
        crewName: crew.Name,
        activity: crew.Activity,
        description: crew.Description,
        maxAllowedMembers: crew.MaxPlayers,
        totalCurrentMembers: crew.CurrentPlayers,
        location: `${crew.ReunionPoint.System} - ${crew.ReunionPoint.PlanetarySystem} - ${crew.ReunionPoint.PlanetMoon} - ${crew.ReunionPoint.Place}`,
    };
}

const useRecentCrewData = () => {
    const [crewData, setCrewData] = useState<CrewCardComponentProps[]>([]);

    useEffect(() => {
        const crewService = new CrewService();
        crewService.getRecentCrews()
            .then(crews => {
                const crewData = crews.Crews.map(crew => extractCrew(crew));
                setCrewData(crewData);
            }).catch(error => {
            console.error(error);
        })
    }, []);

    return crewData;
};

export default useRecentCrewData;