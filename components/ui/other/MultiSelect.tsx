import { useState } from 'react';

interface Option {
    id: string;
    name: string;
}

interface MultiSelectProps {
    options: Option[];
    initialSelected?: string[];
    onSelectionChange: (selectedIds: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, initialSelected = [], onSelectionChange }) => {
    // Состояние для выбранных элементов
    const [selectedOptions, setSelectedOptions] = useState<string[]>(initialSelected);

    const handleCheckboxChange = (id: string) => {
        const updatedSelection = selectedOptions.includes(id)
            ? selectedOptions.filter((optionId) => optionId !== id)
            : [...selectedOptions, id];

        setSelectedOptions(updatedSelection);
        onSelectionChange(updatedSelection); // Обновляем родительский компонент
    };

    return (
        <div className="space-y-2">
            <div className="space-y-1">
                {options.map((option) => (
                    <div key={option.id} className="flex items-center">
                        <input
                            type="checkbox"
                            id={option.id}
                            checked={selectedOptions.includes(option.id)}
                            onChange={() => handleCheckboxChange(option.id)}
                            className="mr-2 text-[#373F47]"
                        />
                        <label htmlFor={option.id}>{option.name}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiSelect;
