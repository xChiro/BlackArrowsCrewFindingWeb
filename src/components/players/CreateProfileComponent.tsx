import {StyledCard} from "../utilities/cards/StyledCard.tsx";
import {StyledCardButton} from "../utilities/cards/StyledCardButton.tsx";
import {StyledBodyCard} from "../utilities/cards/StyledBodyCard.tsx";
import styled from "styled-components";
import {StyledForm} from "../utilities/forms/StyledForm.tsx";
import {StyledInput} from "../utilities/forms/StyledInput.tsx";

const StyledLabel = styled.h2`
    margin-bottom: 0.5rem;
`;

const CreateProfile = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '4rem'}}>
            <StyledCard maxWidth="30rem" minHeight="9rem" maxHeight="15rem">
                <StyledBodyCard>
                    <StyledForm>
                        <StyledLabel>
                            What is your citizen handler name?
                        </StyledLabel>
                        <StyledInput type="text" name="handlerName"/>
                    </StyledForm>
                </StyledBodyCard>
                <StyledCardButton backgroundColor={"green"} canClick={true}>
                    Save
                </StyledCardButton>
            </StyledCard>
        </div>
    );
}

export default CreateProfile;