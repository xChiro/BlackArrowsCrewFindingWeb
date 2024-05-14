import styled from "styled-components";
import {colors} from "../../themes/Colors.ts";

const StyledCardButton = styled.button<{ backgroundColor: string }>`
    flex: 0 0 10%;
    background-color: ${props => props.backgroundColor};
    color: ${colors.fontColor};
    border: none;
    border-radius: 0 0 1rem 1rem;
    cursor: pointer;
    width: 100%;
    font-size: 1.9rem;
`;

export interface CardButtonProps {
    isFull: boolean;
}

const JoinButton = (props: CardButtonProps) => (
    <StyledCardButton backgroundColor={props.isFull ? "red" : "green"}>
        {props.isFull ? "Full" : "Join"}
    </StyledCardButton>
);

export default JoinButton;