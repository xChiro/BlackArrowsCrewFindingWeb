import {StyledSelect} from "./StyledSelect.tsx";

interface ComboBoxProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    inputName: string;
}

const ComboBoxField = ({ value, onChange, options, inputName }: ComboBoxProps) => {
    return (
        <>
            <StyledSelect
                name={inputName}
                required={true}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </StyledSelect>
        </>
    );
}

export default ComboBoxField;