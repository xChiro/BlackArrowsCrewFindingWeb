import {StyledCard} from "../utilities/cards/StyledCard.tsx";
import {StyledCardButton} from "../utilities/cards/StyledCardButton.tsx";
import {StyledBodyCard} from "../utilities/cards/StyledBodyCard.tsx";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const StyledLabel = styled.h2`
    margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
    height: 1.5rem;
    width: 100%;
    border-radius: 0.5rem;
    font-size: 1.1rem;
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
                <StyledCardButton backgroundColor={"green"}>
                    Save
                </StyledCardButton>
            </StyledCard>
        </div>
    );
}

export default CreateProfile;