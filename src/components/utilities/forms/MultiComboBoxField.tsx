import Select from 'react-select';

interface MultiSelectComboBoxProps {
    value: string[];
    onChange: (value: string[]) => void;
    options: string[];
    inputName: string;
    required?: boolean;
}

const MultiComboBoxField = ({value, onChange, options, inputName, required}: MultiSelectComboBoxProps) => {
    const handleChange = (selectedOptions: string[]) => {
        if (!selectedOptions) {
            onChange([]);
            return;
        }

        const selectedValues = selectedOptions.map((option: string) => option);
        onChange(selectedValues);
    }

    const selectedOptions = value.map(val => options.find(option => option === val));
    const optionsObjects = options.map(option => ({value: option, label: option}));

    return (
        <Select
            name={inputName}
            isMulti
            options={optionsObjects}
            value={selectedOptions.map(option => ({value: option, label: option}))}
            onChange={(selectedOptions) => handleChange(selectedOptions.map(option => option.value ?? ''))}
            closeMenuOnSelect={false}
            isSearchable={false}
            required={required ?? false}
            styles={{
                control: (styles) => ({
                    ...styles,
                    width: '100%',
                    height: '2.5rem',
                    borderRadius: '0.5rem',
                    fontSize: '1.3rem'
                }),
                option: (styles) => ({
                    ...styles,
                    color: 'black',
                }),
            }}
        />
    );
}

export default MultiComboBoxField;