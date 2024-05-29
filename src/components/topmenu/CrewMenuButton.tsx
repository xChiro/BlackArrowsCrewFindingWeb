import styled from 'styled-components';
import {usePlayer} from "../../hooks/UsePlayerProfile.tsx";
import {colors} from "../../themes/Colors.ts";
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const StyledButton = styled.button<{ backgroundColor: string; canClick: boolean; }>`
    background-color: ${props => props.backgroundColor ?? colors.primary};
    border: none;
    color: white;
    padding: 0.625rem;
    text-align: center;
    display: inline-block;
    font-size: 1em;
    border-radius: 10px;
    height: 80%;
    cursor: ${props => props.canClick ? 'pointer' : 'not-allowed'};
`;

export const CrewMenuButton = () => {
    const {isInCrew, isProfileLoaded} = usePlayer();
    const {loginWithRedirect} = useAuth0();

    const navigate = useNavigate();

    const openCrewClick = () => {
        // Handle your click event here...
    }

    const createCrewClick = async () => {
        if (isProfileLoaded())
            navigate('/crews/create')
        else
            await loginWithRedirect();
    }

    if (isInCrew()) {
        return (
            <StyledButton canClick={true} backgroundColor={colors.lightBlueColor} onClick={openCrewClick}>
                View My Crew
            </StyledButton>
        );
    } else {
        return (
            <StyledButton canClick={true} backgroundColor={colors.greenColor} onClick={createCrewClick}>
                Create Crew
            </StyledButton>
        );
    }
};