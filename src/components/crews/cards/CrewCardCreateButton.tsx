import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";
import {useNavigate} from "react-router-dom";
import {colors} from "../../../themes/Colors.ts";
import {useAuth0} from "@auth0/auth0-react";
import {usePlayer} from "../../../hooks/usePlayerProfile.tsx";

const CrewCardCreateButton = () => {
    const navigate = useNavigate();
    const {loginWithRedirect} = useAuth0();
    const {isProfileLoaded} = usePlayer();

    const onClick = async () => {
        try {
            if (isProfileLoaded()) {
                navigate('/crews/create');
            } else {
                await loginWithRedirect();
            }
        } catch
            (e) {
            console.error(e);
        }
    }

    return (
        <StyledCardButton
            $buttonBackgroundColor={colors.greenColor}
            $canClick={true}
            onClick={onClick}
        >
            Create Crew
        </StyledCardButton>
    );
};

export default CrewCardCreateButton;