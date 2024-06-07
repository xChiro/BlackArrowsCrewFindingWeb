import {StyledCardImageHeader} from "../../utilities/cards/StyledCardImageHeader.tsx";
import {StyledBodyCard} from "../../utilities/cards/StyledBodyCard.tsx";
import {StyledCardInfo} from "../../utilities/cards/StyledCardInfo.tsx";
import {StyledCardDescription} from "../../utilities/cards/StyledCardDescription.tsx";
import {useFreeSlots, useIsFull} from "../../../hooks/crews/useCrewMembers.tsx";
import styled from "styled-components";
import {StyledCard} from "../../utilities/cards/StyledCard.tsx";
import useCrewButton from "../../../hooks/crews/useCrewButton.tsx";

export interface CrewViewProps {
    crewId: string,
    crewName: string,
    captainId: string,
    captainName?: string
    location: string,
    maxAllowedMembers: number,
    totalCurrentMembers: number,
    activity: string,
    description: string,
    Members?: string[],
}

const StyledMemberList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
`;

const StyledMemberItem = styled.li`
    background: none;
    border: none;
`;

const CrewViewComponent = (props: CrewViewProps) => {
    const freeSlots = useFreeSlots();
    const isFull = useIsFull();
    const CrewButton = useCrewButton(props.crewId, props.captainId, isFull(props.maxAllowedMembers, props.totalCurrentMembers));

    return (
        <StyledCard>
            <StyledCardImageHeader>
            </StyledCardImageHeader>
            <StyledBodyCard>
                <StyledCardInfo>
                    <h1>{props.crewName}</h1>
                    <h6>{props.location}</h6>
                    <h2 style={{marginTop: "1rem"}}>{freeSlots(props.maxAllowedMembers, props.totalCurrentMembers)} slots available</h2>
                    {props.captainName && <span>Captain: <b>{props.captainName}</b></span>}
                    <span>Activity: <b>{props.activity}</b></span>
                </StyledCardInfo>
                <span>Description:</span>
                <StyledCardDescription>{props.description}</StyledCardDescription>

                {props.Members && props.Members.length > 0 && (
                    <>
                        <span>Members:</span>
                        <StyledMemberList>
                            {props.Members.map((member, index) => (
                                <StyledMemberItem key={index}>{member}</StyledMemberItem>
                            ))}
                        </StyledMemberList>
                    </>
                )}
            </StyledBodyCard>
            {CrewButton}
        </StyledCard>
    );
}

export default CrewViewComponent;