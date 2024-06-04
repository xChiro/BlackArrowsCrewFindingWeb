import styled from 'styled-components';
import {usePlayer} from "../../hooks/usePlayerProfile.tsx";
import {colors} from "../../themes/Colors.ts";
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const StyledButton = styled.button<{ $buttonBackgroundColor: string; $canClick: boolean; }>`
    background-color: ${({ $buttonBackgroundColor = colors.primary }) => $buttonBackgroundColor};
    border: none;
    color: white;
    padding: 3px 10px;
    text-align: center;
    display: inline-block;
    font-size: 1em;
    border-radius: 10px;
    height: 80%;
    cursor: ${({ $canClick }) => $canClick ? 'pointer' : 'not-allowed'};
`;

export const CrewMenuButton = () => {
    const {isInCrew, isProfileLoaded, profile} = usePlayer();
    const {loginWithRedirect} = useAuth0();

    const navigate = useNavigate();

    const openCrewClick = () => {
        navigate('/crews/' + profile.ActiveCrewId);
    }

    const createCrewClick = async () => {
        if (isProfileLoaded())
            navigate('/crews/create')
        else
            await loginWithRedirect();
    }

    if (isInCrew()) {
        return (
            <StyledButton $canClick={true} $buttonBackgroundColor={colors.lightBlueColor} onClick={openCrewClick}>
                View My Crew
            </StyledButton>
        );
    } else {
        return (
            <StyledButton $canClick={true} $buttonBackgroundColor={colors.greenColor} onClick={createCrewClick}>
                Create Crew
            </StyledButton>
        );
    }
};