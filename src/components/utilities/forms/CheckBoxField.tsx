import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const Label = styled.label`
`;

const Input = styled.input`
    width: 1.5rem;
    height: 1.5rem;
`;

const CheckboxField = (props: { labelName: string, onChange: () => void, checked: boolean }) => {
    const {labelName, onChange, checked} = props;
    return (
        <Container>
            <Input type="checkbox" onChange={onChange} checked={checked}/>
            <Label>
                {labelName}
            </Label>
        </Container>
    );
};

export default CheckboxField;