import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";
import {usePlayer} from "../../../hooks/UsePlayerProfile.tsx";
import {colors} from "../../../themes/Colors.ts";

export interface CardButtonProps {
    isFull: boolean;
}

interface ButtonInfo {
    color: string;
    text: string;
}

const getButtonInfo = (isFull: boolean, isInCrew: boolean): ButtonInfo => {
    if (isFull) {
        return {color: colors.redAlertColor, text: "Full"};
    } else if (isInCrew) {
        return {color: colors.inactiveColor, text: "Already in a Crew"};
    } else {
        return {color: colors.greenColor, text: "Join"};
    }
};

const JoinCrewButton = (props: CardButtonProps) => {
    const {isInCrew} = usePlayer();
    const buttonInfo = getButtonInfo(props.isFull, isInCrew());

    return (
        <StyledCardButton
            backgroundColor={buttonInfo.color}
            canClick={!props.isFull && !isInCrew()}
        >
            {buttonInfo.text}
        </StyledCardButton>
    );
};

export default JoinCrewButton;