import styled from 'styled-components';
import useRecentCrewData from "../../../hooks/crews/useRecentCrewData.tsx";
import CrewViewComponent from "./CrewViewComponent.tsx";
import NotCrewsAvailable from "./NotCrewsAvailable.tsx";

const StyledRecentCrewCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 25rem);
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        width: 100vh;
    }
`;


const RecentCrewCardContainer = () => {
    const crewData = useRecentCrewData();

    return (
        <StyledRecentCrewCardContainer>
            {crewData.length === 0
                ? <NotCrewsAvailable/>
                : crewData.map((crew) => (
                    <CrewViewComponent key={crew.crewId}
                                       crewId={crew.crewId}
                                       crewName={crew.crewName}
                                       captainId={crew.captainId}
                                       captainName={crew.captainName}
                                       location={crew.location}
                                       maxAllowedMembers={crew.maxAllowedMembers}
                                       totalCurrentMembers={crew.totalCurrentMembers}
                                       activity={crew.activity}
                                       description={crew.description}
                                       Members={crew.Members}
                                       Languages={crew.Languages}
                                       CreatedAt={crew.CreatedAt}/>
                ))
            }
        </StyledRecentCrewCardContainer>
    );
};

export default RecentCrewCardContainer;