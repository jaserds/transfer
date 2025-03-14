import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface CustomDatePickerProps {
    selectedDate: Date | null;
    setSelectedDate: (date: Date | null) => void;
}

interface CustomTimePickerProps {
    selectedTime: string | null;
    setSelectedTime: (time: string) => void;
}

interface CustomCheckBoxProps {
    setIsChecked: (isChecked: boolean) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ selectedDate, setSelectedDate }) => {
    const t = useTranslations('bookingPage');
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

    // Месяцы и дни недели
    const months = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
    ];

    const weekdays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    // Получение первого дня месяца
    const getFirstDayOfMonth = (date: Date) => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        return firstDay.getDay(); // День недели для первого дня месяца
    };

    // Получение количества дней в месяце
    const getDaysInMonth = (date: Date) => {
        const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return nextMonth.getDate(); // Возвращает количество дней в месяце
    };

    // Обработчик выбора даты
    const handleSelectDate = (day: number) => {
        const selected = new Date(currentDate.getFullYear(), selectedMonth, day);
        setSelectedDate(selected);
        setIsCalendarVisible(false); // Закрыть календарь после выбора даты
    };

    // Переключение месяца
    const handleMonthChange = (delta: number) => {
        let newMonth = selectedMonth + delta;
        let newYear = selectedYear;

        // Если месяц выходит за пределы (меньше 0 или больше 11)
        if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        } else if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }

        setSelectedMonth(newMonth);
        setSelectedYear(newYear);
        setCurrentDate(new Date(newYear, newMonth, 1)); // Обновляем текущий месяц и год
    };

    // Отображение календаря для текущего месяца
    const renderCalendar = () => {
        const firstDay = getFirstDayOfMonth(currentDate);
        const daysInMonth = getDaysInMonth(currentDate);
        const calendarDays = [];

        // Добавляем пустые ячейки до первого дня месяца
        for (let i = 0; i < firstDay; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="w-7 h-7"></div>);
        }

        // Заполняем календарь днями месяца
        for (let day = 1; day <= daysInMonth; day++) {
            calendarDays.push(
                <div
                    key={day}
                    onClick={() => handleSelectDate(day)}
                    className={`w-7 h-7 flex items-center justify-center cursor-pointer text-[#373F47] ${selectedDate && selectedDate.getDate() === day
                        ? "bg-[#F9AC1A] text-white rounded-full"
                        : "hover:bg-[#FFE6B8] rounded-full"
                        }`}
                >
                    {day}
                </div>
            );
        }

        return calendarDays;
    };

    return (
        <div className="relative">
            {/* Инпут */}
            <input
                type="text"
                readOnly
                value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                onClick={() => setIsCalendarVisible(!isCalendarVisible)} // Показываем/скрываем календарь
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-[#373F47]"
                placeholder={t("infoBlock.changeData")}
            />

            {/* Календарь с анимацией */}
            <div
                className={`absolute mt-2 p-4 bg-white border rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${isCalendarVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="text-center mb-4">
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={() => handleMonthChange(-1)}
                            className="px-2 py-1 text-base font-bold text-[#6c7c8c]"
                        >
                            &lt;
                        </button>

                        <div className="flex flex-col items-center">
                            <span className="font-bold text-[#373F47]">
                                {months[selectedMonth]} {selectedYear}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => handleMonthChange(1)}
                            className="px-2 py-1 text-base font-bold text-[#6c7c8c] "
                        >
                            &gt;
                        </button>
                    </div>
                </div>

                {/* Дни недели */}
                <div className="grid grid-cols-7 text-center text-sm font-semibold mb-2 text-[#373F47]">
                    {weekdays.map((weekday, index) => (
                        <div key={index}>{weekday}</div>
                    ))}
                </div>

                {/* Календарь */}
                <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
            </div>
        </div>
    );
};

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({ selectedTime, setSelectedTime }) => {
    const [isTimeVisible, setIsTimeVisible] = useState(false);
    const t = useTranslations('bookingPage');


    // Вспомогательная функция для генерации времени
    const generateTimeOptions = () => {
        const times = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 5) {
                const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
                times.push(time);
            }
        }
        return times;
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setIsTimeVisible(false); // Закрываем список времени после выбора
    };

    return (
        <div className="relative">
            {/* Инпут */}
            <input
                type="text"
                readOnly
                value={selectedTime || ""}
                onClick={() => setIsTimeVisible(!isTimeVisible)} // Показываем/скрываем список времени
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-[#373F47]"
                placeholder={t("infoBlock.changeTime")}
            />

            {/* Список времени с анимацией */}
            {isTimeVisible && (
                <div
                    className="absolute mt-2 p-4 bg-white border rounded-lg shadow-lg transition-opacity duration-300 ease-in-out opacity-100"
                >
                    <div className="max-h-60 overflow-y-auto">
                        {generateTimeOptions().map((time) => (
                            <div
                                key={time}
                                onClick={() => handleTimeSelect(time)}
                                className="p-2 cursor-pointer hover:bg-gray-200"
                            >
                                {time}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

interface CustomToggleProps {
    isOn: boolean;
    setIsOn: (value: boolean) => void;
}

const CustomToggle: React.FC<CustomToggleProps> = ({ isOn, setIsOn }) => {

    return (
        <div
            className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all ${isOn ? "bg-[#F9AC1A] ring-[3px] ring-[#FFE6B8]" : "bg-gray-300"
                }`}
            onClick={() => setIsOn(!isOn)}
        >
            <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all ${isOn ? "translate-x-8" : "translate-x-0"
                    }`}
            />
        </div>
    );
};

interface CounterOrderProps {
    count: number;
    setCount: (count: number) => void;
}

function CounterOrder({ count, setCount }: CounterOrderProps) {


    return (
        <div className="flex items-center bg-[#FFE6B8] rounded-full px-1 py-1">
            <button
                type="button"
                onClick={() => setCount(count - 1)}
                className="w-[26px] h-[26px] flex items-center justify-center rounded-full bg-[#F9AC1A] text-white text-xl font-bold"
            >
                −
            </button>
            <span className="mx-4 text-gray-700 text-lg font-semibold">{count}</span>
            <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="w-[26px] h-[26px] flex items-center justify-center rounded-full bg-[#F9AC1A] text-white text-xl font-bold"
            >
                +
            </button>
        </div>
    );
}

const CustomCheckbox: React.FC<CustomCheckBoxProps> = ({ setIsChecked }) => {
    const t = useTranslations('bookingPage');
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };
    return (
        <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="hidden peer" onChange={handleCheckboxChange} />
            <div className="w-[15px] h-[15px] mr-[10px] rounded-[5px] border-[1px] border-[#F9AC1A] peer-checked:bg-[#F9AC1A] peer-checked:border-[#F9AC1A] flex items-center justify-center transition">
            </div>
            <span className="text-[#6C7C8C] text-[14px]">{t("passengersBlock.checkBocks")}</span>
        </label>
    );
}


export { CustomDatePicker, CustomTimePicker, CustomToggle, CounterOrder, CustomCheckbox };