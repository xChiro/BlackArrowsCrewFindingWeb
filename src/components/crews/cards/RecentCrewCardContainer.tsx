import styled from 'styled-components';
import useRecentCrewData from "../../../hooks/crews/useRecentCrewData.tsx";
import CrewCardComponent from "./CrewCardComponent.tsx";

const StyledRecentCrewCardContainer = styled.div`
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
        <StyledRecentCrewCardContainer>
            {crewData.map((crew, index) => (
                <CrewCardComponent key={index} {...crew} />
            ))}
        </StyledRecentCrewCardContainer>
    );
};

export default RecentCrewCardContainer;