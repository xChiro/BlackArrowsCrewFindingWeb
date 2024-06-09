import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";
import {useNavigate} from "react-router-dom";
import {colors} from "../../../themes/Colors.ts";

const CrewCardCreateButton = () => {
    const navigate = useNavigate();

    const onClick = async () => {
        try {
            navigate('/crews/create');
        }
        catch (e) {
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