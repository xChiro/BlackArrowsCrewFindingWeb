import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";

export interface CardButtonProps {
    isFull: boolean;
}

const JoinButton = (props: CardButtonProps) => (
    <StyledCardButton backgroundColor={props.isFull ? "red" : "green"} canJoin={props.isFull}>
        {props.isFull ? "Full" : "Join"}
    </StyledCardButton>
);

export default JoinButton;