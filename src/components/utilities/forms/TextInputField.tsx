import {StyledInput} from "./StyledInput.tsx";

interface InputFieldProps {
    value: string;
    required: boolean;
    onChange: (value: string) => void;
    errorMessage: string
    minLength: number;
    maxLength: number;
    inputName: string;
    disabled?: boolean;
    placeholder?: string;
}

const TextInputField = ({
                            value,
                            onChange,
                            errorMessage,
                            minLength,
                            maxLength,
                            inputName,
                            placeholder = "",
                            required = false,
                            disabled = false
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
                disabled={disabled}
                placeholder={placeholder}
            />
            {errorMessage && <div>{errorMessage}</div>}
        </>
    );
}

export default TextInputField;