import {StyledCard} from "../utilities/cards/StyledCard.tsx";
import {StyledCardButton} from "../utilities/cards/StyledCardButton.tsx";
import styled from "styled-components";
import {StyledForm} from "../utilities/forms/StyledForm.tsx";
import {StyledBodyCard} from "../utilities/cards/StyledBodyCard.tsx";
import PlayerService from "../../services/PlayerService.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuthToken} from "../../hooks/UseAuthToken.tsx";
import TextInputField from "../utilities/forms/TextInputField.tsx";

const StyledLabel = styled.h2`
    margin-bottom: 0.5rem;
`;

const CreateProfile = () => {
    const [citizenName, setCitizenName] = useState("")
    const navigate = useNavigate();
    const authToken = useAuthToken();
    const [errorMessage, setErrorMessage] = useState("");

    const getToken = async () => {
        return await authToken();
    }

    const onSaveClick = async () => {
        const playerService = new PlayerService(await getToken());

        playerService.createProfile({UserName: citizenName}).then(() => {
            navigate("/");
        }).catch(error => {
            setErrorMessage(error.message);
        });
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '4rem'}}>
            <StyledCard maxWidth="30rem" minHeight="9rem" maxHeight="15rem">
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
                    <StyledCardButton backgroundColor={"green"} canClick={true}>
                        Save
                    </StyledCardButton>
                </StyledForm>
            </StyledCard>
        </div>
    );
}

export default CreateProfile;