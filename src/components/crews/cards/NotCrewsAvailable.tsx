import { StyledCard } from "../../utilities/cards/StyledCard.tsx";
import {StyledBodyCard} from "../../utilities/cards/StyledBodyCard.tsx";
import CrewCardCreateButton from "./CrewCardCreateButton.tsx";

const NotCrewsAvailable = () => {

    return (
        <StyledCard $maxHeight={'10rem'} $minHeight={'10rem'}>
            <StyledBodyCard>
                <h1>No crews available</h1>
                <span>There are no crews available to join at this time, you can create your own crew.</span>
            </StyledBodyCard>
            <CrewCardCreateButton />
        </StyledCard>
    );
}

export default NotCrewsAvailable;