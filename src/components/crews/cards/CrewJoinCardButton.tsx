import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";
import {usePlayer} from "../../../hooks/usePlayerProfile.tsx";
import {colors} from "../../../themes/Colors.ts";
import useJoinCrew from "../../../hooks/crews/useJoinCrew.tsx";
import {useAuth} from "../../../hooks/useAuth.tsx";

export interface CardButtonProps {
    isFull: boolean;
    crewId: string;
}

interface ButtonInfo {
    color: string;
    text: string;
}

const getButtonInfo = (isFull: boolean, isInCrew: boolean, isUserLoggedIn: boolean): ButtonInfo => {
    if (isFull) {
        return {color: colors.inactiveColor, text: "Full"};
    } else if (isInCrew) {
        return {color: colors.inactiveColor, text: "Already in a Crew"};
    } else if (!isUserLoggedIn) {
        return {color: colors.greenColor, text: "Sign In to Join"};
    } else {
        return {color: colors.greenColor, text: "Join"};
    }
};

const CrewJoinCardButton = (props: CardButtonProps) => {
    const {isInCrew} = usePlayer();
    const {login, isLogged} = useAuth();
    const buttonInfo = getButtonInfo(props.isFull, isInCrew(), isLogged());
    const joinCrew = useJoinCrew(props.crewId || '');

    const onClick = async () => {
        if (!isLogged())
            login();
        else {
            try {
                await joinCrew();
            } catch (e) {
                console.error(e);
            }
        }
    }

    return (
        <StyledCardButton
            $buttonBackgroundColor={buttonInfo.color}
            $canClick={!props.isFull && !isInCrew() && isLogged()}
            onClick={onClick}
            $fontSize={isLogged() ? "1.9rem" : "1.4rem"}
        >
            {buttonInfo.text}
        </StyledCardButton>
    );
};

export default CrewJoinCardButton;