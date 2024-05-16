import {StyledCard} from "../../utilities/cards/StyledCard.tsx";
import {StyledCardImageHeader} from "../../utilities/cards/StyledCardImageHeader.tsx";
import {StyledBodyCard} from "../../utilities/cards/StyledBodyCard.tsx";
import {StyledCardInfo} from "../../utilities/cards/StyledCardInfo.tsx";
import {StyledCardDescription} from "../../utilities/cards/StyledCardDescription.tsx";
import JoinButton from "./JoinButton.tsx";

export interface CrewCardComponentProps {
    id: string;
    crewName: string;
    activity: string;
    description: string;
    maxAllowedMembers: number;
    totalCurrentMembers: number;
    location: string;
}

const freeSlots = (maxAllowedMembers: number, totalCurrentMembers: number) => {
    return maxAllowedMembers - totalCurrentMembers;
}

const isFull = (maxAllowedMembers: number, totalCurrentMembers: number) => {
    return totalCurrentMembers === maxAllowedMembers;
}

const CrewCardComponent = (props: CrewCardComponentProps) => {
    return (
        <StyledCard>
            <StyledCardImageHeader>
            </StyledCardImageHeader>
            <StyledBodyCard>
                <StyledCardInfo>
                    <h1>{props.crewName}</h1>
                    <h5>{props.location}</h5>
                    <h2>{freeSlots(props.maxAllowedMembers, props.totalCurrentMembers)} slots available</h2>
                    <span>Activity: <b>{props.activity}</b></span>
                </StyledCardInfo>
                <StyledCardDescription>{props.description}</StyledCardDescription>
            </StyledBodyCard>
            <JoinButton isFull={isFull(props.maxAllowedMembers, props.totalCurrentMembers)} />
        </StyledCard>
    );
}

export default CrewCardComponent;

