import styled from 'styled-components';
import useRecentCrewData from "../../../hooks/UseRecentCrewData.tsx";
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

const RecentCrewCardContainer = () => {
    const crewData = useRecentCrewData();

    return (
        <CrewCardGridComponent>
            {crewData.map((crew, index) => (
                <CrewCardComponent key={index} {...crew} />
            ))}
        </CrewCardGridComponent>
    );
};

export default RecentCrewCardContainer;