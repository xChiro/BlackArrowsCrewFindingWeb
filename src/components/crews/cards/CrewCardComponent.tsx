import {StyledCard} from "./StyledCard.tsx";
import {StyledCardImageHeader} from "./StyledCardImageHeader.tsx";
import {StyledBody} from "./StyledBody.tsx";
import {StyledCardInfo} from "./StyledCardInfo.tsx";
import {StyledCardDescription} from "./StyledCardDescription.tsx";
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
            <StyledBody>
                <StyledCardInfo>
                    <h1>{props.crewName}</h1>
                    <h5>{props.location}</h5>
                    <h2>{freeSlots(props.maxAllowedMembers, props.totalCurrentMembers)} slots available</h2>
                    <span>Activity {props.activity} </span>
                </StyledCardInfo>
                <StyledCardDescription>{props.description}</StyledCardDescription>
            </StyledBody>
            <JoinButton isFull={isFull(props.maxAllowedMembers, props.totalCurrentMembers)} />
        </StyledCard>
    );
}

export default CrewCardComponent;

