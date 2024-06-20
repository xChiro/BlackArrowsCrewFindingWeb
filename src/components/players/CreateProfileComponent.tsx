import {StyledCard} from "../utilities/cards/StyledCard.tsx";
import {StyledCardButton} from "../utilities/cards/StyledCardButton.tsx";
import styled from "styled-components";
import {StyledForm} from "../utilities/forms/StyledForm.tsx";
import {StyledBodyCard} from "../utilities/cards/StyledBodyCard.tsx";
import PlayerService from "../../services/PlayerService.ts";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.tsx";
import TextInputField from "../utilities/forms/TextInputField.tsx";
import {colors} from "../../themes/Colors.ts";
import {usePlayer} from "../../hooks/usePlayerProfile.tsx";

const StyledLabel = styled.h2`
    margin-bottom: 0.5rem;
`;

const CreateProfile = () => {
    const [citizenName, setCitizenName] = useState("")
    const navigate = useNavigate();
    const {getAccessToken, isLogged} = useAuth();
    const [errorMessage, setErrorMessage] = useState("");
    const {profile} = usePlayer();

    useEffect(() => {
        if (!isLogged() || profile.CitizenName !== "") {
            navigate("/");
        }
    }, [isLogged, navigate,citizenName, profile.CitizenName]);

    const onSaveClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const playerService = new PlayerService(getAccessToken() ?? "");

        playerService.createProfile({UserName: citizenName}).then(() => {
            setCitizenName(citizenName);
            navigate("/");
        }).catch(error => {
            setErrorMessage(error.message);
        });
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <StyledCard $maxWidth="30rem" $minHeight="9rem" $maxHeight="15rem">
                <StyledForm onSubmit={onSaveClick}>
                    <StyledBodyCard>
                        <StyledLabel>
                            What is your citizen handler name?
                        </StyledLabel>
                        <TextInputField
                            value={citizenName}
                            onChange={setCitizenName}
                            errorMessage={errorMessage}
                            minLength={3}
                            maxLength={30}
                            inputName="handlerName"
                            required={true}
                        />
                    </StyledBodyCard>
                    <StyledCardButton type="submit" $buttonBackgroundColor={colors.greenColor} $canClick={true}>
                        Save
                    </StyledCardButton>
                </StyledForm>
            </StyledCard>
        </div>
    );
}

export default CreateProfile;