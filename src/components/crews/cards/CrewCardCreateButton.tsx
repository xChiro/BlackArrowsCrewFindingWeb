import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";
import {useNavigate} from "react-router-dom";
import {colors} from "../../../themes/Colors.ts";
import {useAuth} from "../../../hooks/useAuth.tsx";

const CrewCardCreateButton = () => {
    const navigate = useNavigate();
    const {login, isLogged} = useAuth();

    const onClick = async () => {
        try {
            if (isLogged()) {
                navigate('/crews/create');
            } else {
                login();
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <StyledCardButton
            $buttonBackgroundColor={colors.greenColor}
            $canClick={true}
            onClick={onClick}
        >
            {isLogged() ? "Create Crew" : "Sign In to Create"}
        </StyledCardButton>
    );
};

export default CrewCardCreateButton;