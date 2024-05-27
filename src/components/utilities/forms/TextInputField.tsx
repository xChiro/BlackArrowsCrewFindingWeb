import {StyledInput} from "./StyledInput.tsx";

interface InputFieldProps {
    value: string;
    required: boolean;
    onChange: (value: string) => void;
    errorMessage: string
    minLength: number;
    maxLength: number;
    inputName: string;
}

const TextInputField = ({
                            value,
                            onChange,
                            errorMessage,
                            minLength,
                            maxLength,
                            inputName,
                            required = false
                        }: InputFieldProps) => {
    return (
        <>
            <StyledInput
                name={inputName}
                required={required}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                onChange={(e) => onChange(e.target.value)}
            />
            {errorMessage && <div>{errorMessage}</div>}
        </>
    ) ;
}

export default TextInputField;