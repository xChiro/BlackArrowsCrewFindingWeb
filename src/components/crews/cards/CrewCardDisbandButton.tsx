import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";
import {usePlayer} from "../../../hooks/usePlayerProfile.tsx";
import {colors} from "../../../themes/Colors.ts";
import {useNavigate} from "react-router-dom";
import useDisbandCrew from "../../../hooks/crews/useDisbandCrew.tsx";

export interface CardButtonProps {
    isFull: boolean;
    crewId: string;
    captainCrewId: string;
}

interface ButtonInfo {
    color: string;
    text: string;
}

const getButtonInfo = (isCaptain: boolean): ButtonInfo => {
    if (!isCaptain) {
        return {color: colors.inactiveColor, text: "Not in a Crew"};
    }
    else {
        return {color: colors.redAlertColor, text: "Disband"};
    }
};

const CrewCardDisbandButton = (props: CardButtonProps) => {
    const { isInCrew, isCaptain, profile } = usePlayer();
    const disbandCrew = useDisbandCrew();
    const buttonInfo = getButtonInfo(isCaptain(props.crewId, props.captainCrewId));
    const navigate = useNavigate();

    const onClick = async () => {
        try {
            await disbandCrew();
            navigate('/');
        }
        catch (e) {
            console.error(e);
        }
    }

    return (
        <StyledCardButton
            $buttonBackgroundColor={buttonInfo.color}
            $canClick={isInCrew() && profile.ActiveCrewId == props.crewId}
            onClick={onClick}
        >
            {buttonInfo.text}
        </StyledCardButton>
    );
};

export default CrewCardDisbandButton;