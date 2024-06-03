import styled from 'styled-components';
import useRecentCrewData from "../../../hooks/crews/useRecentCrewData.tsx";
import CrewViewComponent from "./CrewViewComponent.tsx";

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
            {crewData.map((crew) => (
                <CrewViewComponent key={crew.crewId} {...crew} />
            ))}
        </StyledRecentCrewCardContainer>
    );
};

export default RecentCrewCardContainer;