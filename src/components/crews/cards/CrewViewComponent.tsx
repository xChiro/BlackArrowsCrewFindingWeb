import ActivityCrewCardHeader from "./ActivityCrewCardHeader.tsx";
import {StyledBodyCard} from "../../utilities/cards/StyledBodyCard.tsx";
import {StyledCardInfo} from "../../utilities/cards/StyledCardInfo.tsx";
import {StyledCardDescription} from "../../utilities/cards/StyledCardDescription.tsx";
import {useFreeSlots, useIsFull} from "../../../hooks/crews/useCrewMembers.tsx";
import {StyledCard} from "../../utilities/cards/StyledCard.tsx";
import useCrewButton from "../../../hooks/crews/useCrewButton.tsx";
import {useEffect, useState} from "react";
import {usePlayer} from "../../../hooks/usePlayerProfile.tsx";
import useKickMember from "../../../hooks/crews/useKickMember.tsx";
import {CrewMember} from "../../../services/models/crews/CrewMember.ts";
import useTimeAgo from "../../../hooks/useTimeAgo.tsx";
import MemberList from "./MemberList.tsx";
import HandleNameLink from "./HandleNameLink.tsx";

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
    Languages: string[],
    CreatedAt: Date,
    Members?: CrewMember[],
}

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
                setMembers(members?.filter(member => member.Id !== memberId));
                setTotalCurrentMembers(totalCurrentMembers - 1);
            }
        );
    };

    const timeAgo = useTimeAgo(new Date(props.CreatedAt));

    return (
        <StyledCard>
            <ActivityCrewCardHeader activity={props.activity}>
            </ActivityCrewCardHeader>
            <StyledBodyCard>
                <StyledCardInfo>
                    <h1>{props.crewName}</h1>
                    <h6>{props.location}</h6>
                    <h3>{freeSlots(props.maxAllowedMembers, totalCurrentMembers)} slots
                        available</h3>
                    <h6>Created {timeAgo}</h6>
                    {props.captainName &&
                        <span>Captain: <b><HandleNameLink handleName={props.captainName}/></b>
                        </span>}
                    <span>Activity: <b>{props.activity}</b></span>
                </StyledCardInfo>
                <span>Languages: {props.Languages?.join(', ') ?? "Unknown"}</span>
                <span>Description:</span>
                <StyledCardDescription>{props.description}</StyledCardDescription>
                {members && members.length > 0 && (
                    <>
                        <span>Members:</span>
                        <MemberList members={members} isCaptain={isCaptain} crewId={props.crewId}
                                    captainId={props.captainId} onKickMember={onKickMember}/>
                    </>
                )}
            </StyledBodyCard>
            {CrewButton}
        </StyledCard>
    );
}

export default CrewViewComponent;