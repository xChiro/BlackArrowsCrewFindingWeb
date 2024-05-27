import { useSelector } from 'react-redux';
import { PlayerProfile } from '../../../stores/PlayerProfileSlice.ts';
import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";

export interface CardButtonProps {
    isFull: boolean;
}

interface ButtonInfo {
    color: string;
    text: string;
}

const getButtonInfo = (isFull: boolean, isInCrew: boolean): ButtonInfo => {
    if (isFull) {
        return { color: "red", text: "Full" };
    } else if (isInCrew) {
        return { color: "gray", text: "Already in a Crew" };
    } else {
        return { color: "green", text: "Join" };
    }
};

const JoinButton = (props: CardButtonProps): JSX.Element => {
    const profile = useSelector((state: { playerProfile: PlayerProfile }) => state.playerProfile);
    const isInCrew = profile.ActiveCrewId !== '';
    const buttonInfo = getButtonInfo(props.isFull, isInCrew);
    return (
        <StyledCardButton
            backgroundColor={buttonInfo.color}
            canClick={!props.isFull && !isInCrew}
        >
            {buttonInfo.text}
        </StyledCardButton>
    );
};

export default JoinButton;