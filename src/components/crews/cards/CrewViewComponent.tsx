import ActivityCrewCardHeader from "./ActivityCrewCardHeader.tsx";
import {StyledBodyCard} from "../../utilities/cards/StyledBodyCard.tsx";
import {StyledCardInfo} from "../../utilities/cards/StyledCardInfo.tsx";
import {StyledCardDescription} from "../../utilities/cards/StyledCardDescription.tsx";
import {useFreeSlots, useIsFull} from "../../../hooks/crews/useCrewMembers.tsx";
import styled from "styled-components";
import {StyledCard} from "../../utilities/cards/StyledCard.tsx";
import useCrewButton from "../../../hooks/crews/useCrewButton.tsx";
import {colors} from "../../../themes/Colors.ts";
import {useEffect, useState} from "react";
import {usePlayer} from "../../../hooks/usePlayerProfile.tsx";
import useKickMember from "../../../hooks/crews/useKickMember.tsx";

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
    Members?: string[][],
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

const StyledKickMemberButton = styled.button`
    background-color: ${colors.redAlertColor};
    border: none;
    color: white;
    cursor: pointer;
    margin-left: 1rem;
    border-radius: .3rem;
`;

const CrewViewComponent = (props: CrewViewProps) => {
    const freeSlots = useFreeSlots();
    const isFull = useIsFull();
    const kickMember = useKickMember();
    const {isCaptain} = usePlayer();
    const [members, setMembers] = useState(props.Members);
    const [totalCurrentMembers, setTotalCurrentMembers] = useState(props.totalCurrentMembers);
    const CrewButton = useCrewButton(props.crewId, props.captainId, isFull(props.maxAllowedMembers, totalCurrentMembers));

    useEffect(() => {
        setMembers(props.Members);
    }, [props.Members]);

    useEffect(() => {
        setTotalCurrentMembers(props.totalCurrentMembers);
    }, [props.totalCurrentMembers]);

    const onKickMember = (memberId: string) => {
        kickMember(memberId).then(() => {
                setMembers(members?.filter(member => member[0] !== memberId));
                setTotalCurrentMembers(totalCurrentMembers - 1);
            }
        );
    };

    return (
        <StyledCard>
            <ActivityCrewCardHeader activity={props.activity}>
            </ActivityCrewCardHeader>
            <StyledBodyCard>
                <StyledCardInfo>
                    <h1>{props.crewName}</h1>
                    <h6>{props.location}</h6>
                    <h2 style={{marginTop: "1rem"}}>{freeSlots(props.maxAllowedMembers, totalCurrentMembers)} slots
                        available</h2>
                    {props.captainName &&
                        <span>Captain:
                            <b>
                              <a href={`https://robertsspaceindustries.com/citizens/${props.captainName}`}
                                 target="_blank"
                                 rel="noreferrer noopener">
                                {props.captainName}
                              </a>
                            </b>
                        </span>}
                    <span>Activity: <b>{props.activity}</b></span>
                </StyledCardInfo>
                <span>Description:</span>
                <StyledCardDescription>{props.description}</StyledCardDescription>

                {members && members.length > 0 && (
                    <>
                        <span>Members:</span>
                        <StyledMemberList>
                            {members.map((member, index) => (
                                <StyledMemberItem key={index}>
                                    {member[1]}

                                    {isCaptain(props.crewId, props.captainId) && (
                                        <StyledKickMemberButton
                                            onClick={() => onKickMember(member[0])}>Remove
                                        </StyledKickMemberButton>
                                    )}
                                </StyledMemberItem>
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