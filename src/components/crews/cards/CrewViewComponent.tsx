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
import styled from "styled-components";
import {ClipboardCrewShareButton} from "./share/ClipboardCrewShareButton.tsx";
import {JoinVoiceChannelButton} from "./share/JoinVoiceChannelButton.tsx";

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
    discordVoiceChannel?: string
}

const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    margin-bottom: .8rem;
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
                setMembers(members?.filter(member => member.Id !== memberId));
                setTotalCurrentMembers(totalCurrentMembers - 1);
            }
        );
    };

    const timeAgo = useTimeAgo(new Date(props.CreatedAt));

    return (
        <StyledCard $minWidth={"25rem"} $maxWidth={"25rem"}>
            <ActivityCrewCardHeader activity={props.activity}>
            </ActivityCrewCardHeader>
            <StyledSection>
                <ClipboardCrewShareButton crewId={props.crewId} text={"Share Crew"}/>
                {props.discordVoiceChannel && <JoinVoiceChannelButton url={props.discordVoiceChannel}/>}
            </StyledSection>
            <StyledBodyCard>
                <StyledCardInfo>
                    <h2>{props.crewName}</h2>
                    <h6>{props.location}</h6>
                    <h3>{freeSlots(props.maxAllowedMembers, totalCurrentMembers)} slots
                        available</h3>
                    <h6>Created {timeAgo}</h6>
                    {props.captainName &&
                        <span>Captain: <HandleNameLink handleName={props.captainName}/>
                        </span>}
                    <span style={{marginTop: ".7rem"}}>Activity: {props.activity}</span>
                </StyledCardInfo>
                <span>Languages:</span>
                {props.Languages?.join(', ') ?? "Unknown"}
                <span style={{marginTop: ".5rem"}}>Description:</span>
                <StyledCardDescription>{props.description}</StyledCardDescription>
                {members && members.length > 0 ? (
                    <>
                        <span style={{marginBottom: ".5rem"}}>Members:</span>
                        <MemberList
                            members={members}
                            isCaptain={isCaptain}
                            crewId={props.crewId}
                            captainId={props.captainId}
                            onKickMember={onKickMember}/>
                    </> ) : null}
            </StyledBodyCard>
            {CrewButton}
        </StyledCard>
    );
}

export default CrewViewComponent;