import {StyledCard} from "../utilities/cards/StyledCard.tsx";
import {StyledCardButton} from "../utilities/cards/StyledCardButton.tsx";
import styled from "styled-components";
import {StyledForm} from "../utilities/forms/StyledForm.tsx";
import {StyledBodyCard} from "../utilities/cards/StyledBodyCard.tsx";
import PlayerService from "../../services/PlayerService.ts";
import React, {useState} from "react";
import {useAuth} from "../../hooks/useAuth.tsx";
import TextInputField from "../utilities/forms/TextInputField.tsx";
import {colors} from "../../themes/Colors.ts";
import {usePlayer} from "../../hooks/usePlayerProfile.tsx";

const StyledLabel = styled.h2`
    margin-bottom: 0.5rem;
`;

const UpdateProfileName = () => {
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const [buttonState, setButtonState] = useState({
        text: "Update",
        disabled: false,
        color: colors.greenColor
    });
    const {setCitizenName}= usePlayer();
    const {getAccessToken} = useAuth();

    const onUpdateClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const playerService = new PlayerService(getAccessToken() ?? "");

        playerService.updateProfileName(name).then(() => {
            setName(name);
            setCitizenName(name);
            setButtonState(prevState => ({...prevState, text: "Updated", disabled: true, color: colors.inactiveColor}));

        }).catch(error => {
            setErrorMessage(error.message);
        });
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <StyledCard $maxWidth="30rem" $minHeight="9rem" $maxHeight="15rem">
                <StyledForm onSubmit={onUpdateClick}>
                    <StyledBodyCard>
                        <StyledLabel>
                            Change your citizen handler name:
                        </StyledLabel>
                        <TextInputField
                            value={name}
                            onChange={setName}
                            errorMessage={errorMessage}
                            minLength={3}
                            maxLength={30}
                            inputName="handlerName"
                            required={true}
                        />
                    </StyledBodyCard>
                    <StyledCardButton type="submit" $buttonBackgroundColor={buttonState.color}
                                      $canClick={!buttonState.disabled}>
                        {buttonState.text}
                    </StyledCardButton>
                </StyledForm>
            </StyledCard>
        </div>
    );
}

export default UpdateProfileName;