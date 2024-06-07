import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";
import {usePlayer} from "../../../hooks/usePlayerProfile.tsx";
import {colors} from "../../../themes/Colors.ts";
import {useNavigate} from "react-router-dom";
import useJoinCrew from "../../../hooks/crews/useJoinCrew.tsx";
import {useAuth0} from "@auth0/auth0-react";

export interface CardButtonProps {
    isFull: boolean;
    crewId: string;
}

interface ButtonInfo {
    color: string;
    text: string;
}

const getButtonInfo = (isFull: boolean, isInCrew: boolean): ButtonInfo => {
    if (isFull) {
        return {color: colors.inactiveColor , text: "Full"};
    } else if (isInCrew) {
        return {color: colors.inactiveColor, text: "Already in a Crew"};
    }
    else {
        return {color: colors.greenColor, text: "Join"};
    }
};

const CrewCardJoinButton = (props: CardButtonProps) => {
    const { isInCrew, isProfileLoaded } = usePlayer();
    const buttonInfo = getButtonInfo(props.isFull, isInCrew());
    const joinCrew = useJoinCrew(props.crewId);
    const navigate = useNavigate();
    const {loginWithRedirect} = useAuth0();

    const onClick = async () => {
        if(!isProfileLoaded())
            loginWithRedirect().catch(e => console.error(e));

        try {
            await joinCrew();
            navigate('/');
        }
        catch (e) {
            console.error(e);
        }
    }

    return (
        <StyledCardButton
            $buttonBackgroundColor={buttonInfo.color}
            $canClick={!props.isFull && !isInCrew()}
            onClick={onClick}
        >
            {buttonInfo.text}
        </StyledCardButton>
    );
};

export default CrewCardJoinButton;