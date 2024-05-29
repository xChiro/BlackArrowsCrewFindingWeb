import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";
import {usePlayer} from "../../../hooks/usePlayerProfile.tsx";
import {colors} from "../../../themes/Colors.ts";
import {useNavigate} from "react-router-dom";
import useLeaveCrew from "../../../hooks/useLeaveCrew.tsx";

export interface CardButtonProps {
    isFull: boolean;
    crewId: string;
}

interface ButtonInfo {
    color: string;
    text: string;
}

const getButtonInfo = (isInCurrentCrew: boolean): ButtonInfo => {
    if (!isInCurrentCrew) {
        return {color: colors.inactiveColor, text: "Not in a Crew"};
    }
    else {
        return {color: colors.redAlertColor, text: "Leave"};
    }
};

const CrewCardLeaveButton = (props: CardButtonProps) => {
    const { isInCrew, profile } = usePlayer();
    const leaveCrew = useLeaveCrew(props.crewId);
    const buttonInfo = getButtonInfo(profile.ActiveCrewId == props.crewId);
    const navigate = useNavigate();

    const onClick = async () => {
        try {
            await leaveCrew();
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

export default CrewCardLeaveButton;