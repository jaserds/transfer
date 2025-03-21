import { useState } from 'react';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import ButtonSpinner from '../loaders/ButtonSpinner';

interface Option {
    id: string;
    name: string;
}

interface MultiSelectProps {
    options: Option[];
    initialSelected?: string[];
    routeId: string;
    onSelectionChange: (selectedIds: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, initialSelected = [], routeId, onSelectionChange }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>(initialSelected);
    const [priceChange, setPriceChange] = useState<string>("");
    const [isGetLoading, setIsGetLoading] = useState(false);
    const [isSetLoading, setIsSetLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^-?\d*\.?\d*$/;  // Разрешаем - и . в начале
        const newValue = e.target.value;

        if (regex.test(newValue)) {
            setPriceChange(newValue);
        }
    };

    const handleCheckboxChange = (id: string) => {
        const updatedSelection = selectedOptions.includes(id)
            ? selectedOptions.filter((optionId) => optionId !== id)
            : [...selectedOptions, id];

        setSelectedOptions(updatedSelection);
        onSelectionChange(updatedSelection);
    };

    const handleGetPrice = async (transferCarId: string) => {
        setIsGetLoading(true)
        try {
            const res = await fetch(`/api/my-routs/pricet-ransfer-car-route?routeId=${routeId}&transferCarId=${transferCarId}`);

            if (!res.ok) {
                throw new Error("Failed to fetch price");
            }
            const data = await res.json();
            if (data.price === null) {
                setPriceChange("");
            }
            setPriceChange(data.price);
        } catch (err) {
            if (err instanceof Error) {
                setPriceChange(priceChange);
            }
        } finally {
            setIsGetLoading(false)
        }
    }

    const hendleSetPrice = async (price: number, carId: string, routeId: string) => {
        setIsSetLoading(true)
        try {
            const response = await fetch('/api/my-routs/pricet-ransfer-car-route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ routeId, carId, price }),
            });

            if (!response.ok) {
                throw new Error('Failed to set price');
            }

            const data = await response.json();
            setPriceChange(data);


            return data; // Возвращаем результат
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSetLoading(false)
        }
    }

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
                        <div className='mr-4'>{option.name}</div>
                        <Popover onOpenChange={(isOpen) => {
                            if (!isOpen) {
                                setPriceChange("");
                            }
                        }
                        }>
                            <PopoverTrigger onClick={() => { handleGetPrice(option.id) }} className='ml-auto p-2 bg-[#18181B] text-[#fff] rounded-[5px]'>Цена</PopoverTrigger>
                            <PopoverContent>
                                <div className="flex flex-col">
                                    <p className='text-[#373F47] mb-2'>Цена</p>
                                    <div className="flex mb-4 items-center">
                                        {isGetLoading ?
                                            <div role="status" className="w-full animate-pulse">
                                                <div className="h-[42px] bg-[#f3f3f3] rounded-[5px] dark:bg-gray-700 p-2 mr-4 "></div>
                                            </div>
                                            :
                                            <input value={priceChange || ""} onChange={handleChange} className='border-[1px] border-[#e7e7e7] rounded-[5px] p-2 mr-4' type="text" />}

                                        <p className="text-[#737475] font-bold font-[rubik]">EUR</p>
                                    </div>

                                    <button onClick={() => { hendleSetPrice(Number(priceChange), option.id, routeId) }} className='bg-[#26A659] text-[#fff] rounded-[5px] p-2 mt-2'>{isSetLoading ? <ButtonSpinner /> : "Сохранить"}</button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiSelect;
