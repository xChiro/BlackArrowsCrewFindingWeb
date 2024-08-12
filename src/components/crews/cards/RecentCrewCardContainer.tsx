import styled from 'styled-components';
import useRecentCrewData from "../../../hooks/crews/useRecentCrewData.tsx";
import CrewViewComponent from "./CrewViewComponent.tsx";
import NotCrewsAvailable from "./NotCrewsAvailable.tsx";
import React, {useEffect, useState} from "react";
import {colors} from "../../../themes/Colors.ts";
import {StyledCard} from "../../utilities/cards/StyledCard.tsx";
import {faRefresh} from "@fortawesome/free-solid-svg-icons";
import RefreshIcon from "../../Icons/RefreshIcons.tsx";

const StyledRecentCrewCardContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: .5rem;
    column-width: 25rem;
    justify-content: center;
    align-items: start;

    &:last-child {
        margin-right: -1rem;
    }

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

    @media (max-width: 775px) {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const StyledSelect = styled.select`
    color: white;
    background-color: ${colors.primary};
    border: 1px solid ${colors.secondary};
    padding: 0.4rem;
    font-size: 1rem;
    border-radius: .5rem;
    width: 80%;
    margin: 0 .5rem 0 .3rem;

    option {
        color: black;
        background-color: white;
    }
`;

const ACTIVITY_OPTIONS = ["Any", "Mining", "Trading", "Exploration", "Transportation", "Security", "Rescue", "Salvaging", "Piracy", "Other"];

const RecentCrewCardContainer = () => {
    const {crewData, fetchCrewData} = useRecentCrewData();
    const [activityFilter, setActivityFilter] = useState('Any');
    const [filteredCrewData, setFilteredCrewData] = useState(crewData);

    useEffect(() => {
        const newFilteredCrewData = activityFilter === 'Any' ? crewData : crewData.filter(crew => crew.activity === activityFilter);
        setFilteredCrewData(newFilteredCrewData);
    }, [crewData, activityFilter]);

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setActivityFilter(event.target.value);
    };

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const onRefresh = () => {
        setButtonDisabled(true);
        fetchCrewData().then(() =>
            setTimeout(() => setButtonDisabled(false), 10000)
        ).catch(() => setButtonDisabled(false));
    };

    return (
        <StyledWrapper>
            <StyledCard $maxHeight={"2rem"} $minHeight={"2rem"} style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "1rem",
                padding: ".4rem .8rem",
                textAlign: "center",
            }}>
                <p style={{fontSize: ".8rem", margin: "0", width: "30%"}}>Choose Activity</p>
                <StyledSelect value={activityFilter} onChange={handleFilterChange}>
                    {ACTIVITY_OPTIONS.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </StyledSelect>
                <RefreshIcon icon={faRefresh} onClick={onRefresh} disabled={buttonDisabled}/>
            </StyledCard>
            {filteredCrewData.length === 0 && <NotCrewsAvailable/>}
            <StyledRecentCrewCardContainer>
                {filteredCrewData.length !== 0 && filteredCrewData.map((crew) => (
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
                ))}
            </StyledRecentCrewCardContainer>
        </StyledWrapper>
    );
};

export default RecentCrewCardContainer;