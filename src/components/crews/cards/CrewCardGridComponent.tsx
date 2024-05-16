import React from 'react';
import styled from 'styled-components';
import useRecentCrewData from "../../../hooks/useRecentCrewData.tsx";
import CrewCardComponent from "./CrewCardComponent.tsx";

const CrewCardGridComponent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: 3rem;
    padding: 1rem;
    width: 90%;
    display: flex;
    justify-content: center;
`;

const CrewCardContainer: React.FC = () => {
    const crewData = useRecentCrewData();

    return (
        <CrewCardGridComponent>
            {crewData.map((crew, index) => (
                <CrewCardComponent key={index} {...crew} />
            ))}
        </CrewCardGridComponent>
    );
};

export default CrewCardContainer;