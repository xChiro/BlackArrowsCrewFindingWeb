import styled from 'styled-components';
import {colors} from "../../themes/Colors.tsx";
import {StyledCard} from "./StyledCard.tsx";
import {StyledCardImageHeader} from "./StyledCardImageHeader.tsx";
import {StyledBody} from "./StyledBody.tsx";
import {StyledCardInfo} from "./StyledCardInfo.tsx";
import {StyledCardDescription} from "./StyledCardDescription.tsx";

export interface CrewCardComponentProps {
    id: string;
    crewName: string;
    activity: string;
    description: string;
    maxAllowedMembers: number;
    totalCurrentMembers: number;
    location: string;
}

const StyledCardButton = styled.button`
    flex: 0 0 10%;
    background-color: green;
    color: ${colors.fontColor};
    border: none;
    border-radius: 0 0 1rem 1rem;
    cursor: pointer;
    width: 100%;
    font-size: 1.9rem;
`;

const CrewCardComponent = (props: CrewCardComponentProps) => {
    return (
        <StyledCard>
            <StyledCardImageHeader>
            </StyledCardImageHeader>
            <StyledBody>
                <StyledCardInfo>
                    <h3>{props.crewName} - ({props.totalCurrentMembers}/{props.maxAllowedMembers})</h3>
                    <h6>{props.location}</h6>
                    <p>
                        {props.activity}
                    </p>
                </StyledCardInfo>
                <StyledCardDescription>{props.description}</StyledCardDescription>
            </StyledBody>
            <StyledCardButton>Join</StyledCardButton>
        </StyledCard>
    );
}

export default CrewCardComponent;