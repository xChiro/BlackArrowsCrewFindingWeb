import styled from "styled-components";

const StyledTextArea = styled.textarea`
    border-radius: 0.5rem;
    font-size: 1.3rem;
`;

interface TextAreaFieldProps {
    value: string;
    onChange: (value: string) => void;
    errorMessage?: string;
    minLength: number;
    maxLength: number;
    inputName: string;
    height: string;
    width: string;
    required?: boolean;
}

const TextAreaField = ({ value, onChange, errorMessage, minLength, maxLength, inputName, height, width, required }: TextAreaFieldProps) => {
    return (
        <>
            <StyledTextArea
                name={inputName}
                required={required ?? false}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                onChange={(e) => onChange(e.target.value)}
                style={{height: height, width: width}}
            />
            {errorMessage && <div>{errorMessage}</div>}
        </>
    );
}

export default TextAreaField;