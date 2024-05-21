import {StyledCard} from "../../utilities/cards/StyledCard.tsx";
import {StyledBodyCard} from "../../utilities/cards/StyledBodyCard.tsx";
import {StyledCardButton} from "../../utilities/cards/StyledCardButton.tsx";
import {StyledInput} from "../../utilities/forms/StyledInput.tsx";
import {StyledForm} from "../../utilities/forms/StyledForm.tsx";

const CreateCrewComponent = () => {


    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '4rem'}}>
            <StyledCard maxWidth="30rem" minHeight="9rem" maxHeight="15rem">
                <StyledBodyCard>
                    <StyledForm>
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

export default CreateCrewComponent;