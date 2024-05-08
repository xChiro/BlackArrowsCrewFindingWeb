import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import CrewCardComponent, {CrewCardComponentProps} from "./CrewCardComponent";
import {CrewService} from "../../../services/CrewService.ts";
import {RecentCrew} from "../../../services/models/RecentCrew.ts";

const CrewCardGridComponent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: 3rem;
    padding: 1rem;
    width: 90%;
`;

const CrewCardContainer: React.FC = () => {
    const [crewData, setCrewData] = useState<CrewCardComponentProps[]>([]);
    const crewService = new CrewService("http://localhost:7071/api");

    const extractCrew = (crew: RecentCrew): CrewCardComponentProps => {
        return {
            id: crew.Id,
            crewName: crew.Name,
            activity: crew.Activity,
            description: crew.Description,
            maxAllowedMembers: crew.MaxPlayers,
            totalCurrentMembers: crew.CurrentPlayers,
            location: crew.ReunionPoint.System + " - " + crew.ReunionPoint.PlanetarySystem + " - " + crew.ReunionPoint.PlanetMoon + " - " + crew.ReunionPoint.Place,
        };
    }

    useEffect(() => {
        crewService.getRecentCrews()
            .then(crews => {
                const crewData = crews.Crews.map(crew => extractCrew(crew));
                setCrewData(crewData);
            });
    }, []);

    return (
        <CrewCardGridComponent>
            {crewData.map((crew, index) => (
                <CrewCardComponent key={index} {...crew} />
            ))}
        </CrewCardGridComponent>
    );
};

export default CrewCardContainer;