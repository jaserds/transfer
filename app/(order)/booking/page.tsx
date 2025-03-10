'use client';


import Image from "next/image";
import { CustomDatePicker, CustomTimePicker, CustomToggle, CounterOrder, CustomCheckbox } from "@/components/ui/booking";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function Booking() {
    const searchParams = useSearchParams();

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [selectedBackTime, setSelectedBackTime] = useState<string | null>(null);
    const [selectedBackDate, setSelectedBackDate] = useState<Date | null>(null);
    const [personName, setPersonName] = useState<string>("");
    const [personPhone, setPersonPhone] = useState<string>("");
    const [personEmail, setPersonEmail] = useState<string>("");
    const [count, setCount] = useState(Number(searchParams.get("qtyPerson")) || 1);
    // const [isChecked, setIsChecked] = useState(false);
    // const [comment, setComment] = useState("");

    const [isOnOutTransfer, setIsOnOutTransfer] = useState(false);
    const [isOnCommetnary, setIsOnCommetnary] = useState(false);


    useEffect(() => {
        if (!isOnOutTransfer) {
            setSelectedBackTime(null);
            setSelectedBackDate(null);
        }
    }, [isOnOutTransfer])


    const handleSubmitOrder = () => {
        if (!selectedDate || !selectedTime) {
            toast("Вы не заполнили дату и время трансфера");
        }
        if (!personName || !personPhone || !personEmail) {
            toast("Вы не заполнили имя телефон или почту");
        }
    }

    return (
        <section className="bg-[#F4F4F4] px-6 flex justify-center">
            <div className="grid grid-cols-[570px_auto] gap-x-[20px] w-[600px]">
                <div className="my-0 mx-auto pt-[46px] pb-[350px]">
                    <div className="w-[570px] mb-[20px] bg-[#fff] shadow-[0_4px_8px_0_rgba(0,_0,_0,_0.1)] rounded-[10px]">
                        <div className="border-b-[2px] border-[rgba(108, 124, 140, 0.33)] p-5 ">
                            <h3 className="text-base font-bold text-[#373f47] text-[rubik]">Информация о трансфере</h3>
                        </div>
                        <div className="flex flex-col p-5">
                            <div className="flex gap-[22px] mb-[30px]">
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="" className="text-sm text-[#6c7c8c] mb-4">
                                        <span className="flex gap-3 items-center">
                                            <Image src={"/icons/booking/calendar-icon.svg"} width={20} height={20} alt="" />
                                            Дата трансфера
                                        </span>
                                    </label>
                                    <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="" className="text-sm text-[#6c7c8c] mb-[18px]">
                                        <span className="flex gap-3 items-center">
                                            <Image src={"/icons/booking/time-icon.svg"} width={20} height={20} alt="" />
                                            Время
                                        </span>
                                    </label>
                                    <CustomTimePicker selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
                                </div>
                            </div>

                            <label htmlFor="" className="text-sm text-[#6c7c8c] mb-4">Место назначения: адрес или название отеля</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none mb-[30px] text-[#373F47] text-base" />
                            <p className="text-sm text-[#6c7c8c] mb-4">Обратный трансфер</p>
                            <CustomToggle isOn={isOnOutTransfer} setIsOn={setIsOnOutTransfer} />
                            {isOnOutTransfer && (
                                <div className="flex gap-[22px] mb-[30px] mt-[28px]">
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="" className="text-sm text-[#6c7c8c] mb-4">
                                            <span className="flex gap-3 items-center">
                                                <Image src={"/icons/booking/calendar-icon.svg"} width={20} height={20} alt="" />
                                                Дата трансфера
                                            </span>
                                        </label>
                                        <CustomDatePicker selectedDate={selectedBackDate} setSelectedDate={setSelectedBackDate} />
                                    </div>
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="" className="text-sm text-[#6c7c8c] mb-[18px]">
                                            <span className="flex gap-3 items-center">
                                                <Image src={"/icons/booking/time-icon.svg"} width={20} height={20} alt="" />
                                                Время
                                            </span>
                                        </label>
                                        <CustomTimePicker selectedTime={selectedBackTime} setSelectedTime={setSelectedBackTime} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-[570px] bg-[#fff] shadow-[0_4px_8px_0_rgba(0,_0,_0,_0.1)] rounded-[10px] mb-[20px]">
                        <div className="border-b-[2px] border-[rgba(108, 124, 140, 0.33)] p-5 ">
                            <h3 className="text-base font-bold text-[#373f47] text-[rubik]">О пассажире</h3>
                        </div>
                        <div className="flex flex-col p-5 pb-7">
                            <div className="flex gap-[22px] mb-[30px]">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="PersonNameOrder" className="text-sm text-[#6c7c8c] mb-4">
                                        <span className="flex gap-3 items-center">
                                            <Image src={"/icons/booking/person-order-icon.svg"} width={20} height={20} alt="" />
                                            Имя и Фамилия *
                                        </span>
                                    </label>
                                    <input
                                        id="PersonNameOrder"
                                        type="text"
                                        onChange={(e) => setPersonName(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-[#373F47]"
                                        placeholder="Иванов Иван" />
                                </div>
                            </div>

                            <label htmlFor="" className="text-sm text-[#6c7c8c] mb-4">
                                <span className="flex gap-3 items-center">
                                    <Image src={"/icons/booking/phone-order-icon.svg"} width={20} height={20} alt="" />
                                    Телефон *
                                </span>
                            </label>
                            <input type="phone" className="w-2/4 p-2 border border-gray-300 rounded-lg focus:outline-none mb-[30px] text-[#373F47] text-base" placeholder="+" onChange={(e) => setPersonPhone(e.target.value)} />
                            <label htmlFor="" className="text-sm text-[#6c7c8c] mb-4">
                                <span className="flex gap-3 items-center">
                                    <Image src={"/icons/booking/mail-order-icon.svg"} width={20} height={20} alt="" />
                                    Почта *
                                </span>
                            </label>
                            <input type="mail" className="w-2/4 p-2 border border-gray-300 rounded-lg focus:outline-none mb-[30px] text-[#373F47] text-base" placeholder="@" onChange={(e) => setPersonEmail(e.target.value)} />
                            <div className="text-sm text-[#6c7c8c] flex justify-between mb-[30px]">
                                <span className="flex gap-3 items-center">
                                    <Image src={"/icons/booking/person-qty-order-icon.svg"} width={20} height={20} alt="" />
                                    Число пассажиров *
                                </span>
                                <div className="">
                                    <CounterOrder count={count} setCount={setCount} />
                                </div>
                            </div>
                            <CustomCheckbox setIsChecked={setIsChecked} />
                        </div>
                    </div>

                    <div className="w-[570px] bg-[#fff] shadow-[0_4px_8px_0_rgba(0,_0,_0,_0.1)] rounded-[10px]">
                        <div className="border-b-[2px] border-[rgba(108, 124, 140, 0.33)] p-5 ">
                            <h3 className="text-base font-bold text-[#373f47] text-[rubik]">Комментарии к заказу</h3>
                        </div>
                        <div className="flex flex-col p-5">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col max-w-[326px]">
                                    <h4 className="text-sm text-[#373F47] font-semibold mb-[10px]">Дополнительные пожелания к поездке</h4>
                                    <p className="text-sm text-[#6C7C8C]">Например, если у вас нестандартный багаж, требуется вода в дороге или детское кресло.</p>
                                </div>
                                <CustomToggle isOn={isOnCommetnary} setIsOn={setIsOnCommetnary} />
                            </div>
                            {isOnCommetnary && (
                                <textarea
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Со мной маленький ребенок..."
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-[#373F47] h-[110px] mt-[20px]"
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-[300px] sticky mt-[46px] top-4 bg-[#fff] rounded-[10px] shadow-[0_4px_8px_0_rgba(0,_0,_0,_0.1)] h-fit">
                    <div className="w-full rounded-t-[10px] px-[15px] py-[10px] text-[#FFFFFF] text-sm font-bold bg-[#292929]">{searchParams.get('name')}</div>
                    <div className="p-[15px] ">
                        <div className="flex gap-[23px] mb-[20px]">
                            <span className="text-[open_sans] text-[13px]">{count} пассажира</span>
                            <span className="text-[open_sans] text-[13px]">{searchParams.get('qtyBags')} багажа</span>
                        </div>
                        <div className="flex flex-col mb-[20px]">
                            <p className="text-[14px] text-[#6C7C8C] font-semibold mb-[10px]">Трансфер</p>
                            <div className="flex mb-[10px]">
                                <Image className="mr-3" src={"/icons/booking/calendar-icon.svg"} width={20} height={20} alt="" />
                                <p className="text-[16px] text-[#4f5b67] font-semibold">{selectedDate && selectedDate?.toLocaleDateString()} {selectedTime}</p>
                            </div>
                            <div className="flex p-[10px] w-fit bg-[#FFE6B8] text-center text-[14px] rounded-[10px] text-[#6C7C8C]">{searchParams.get('inRoute')} - {searchParams.get('toRoute')}</div>
                        </div>
                        {selectedBackDate && (
                            <div className="flex flex-col mb-[20px]" >
                                <p className="text-[14px] text-[#6C7C8C] font-semibold mb-[10px]">Обратный трансфер</p>
                                <div className="flex mb-[10px]">
                                    <Image className="mr-3" src={"/icons/booking/calendar-icon.svg"} width={20} height={20} alt="" />
                                    <p className="text-[16px] text-[#4f5b67] font-semibold">{selectedBackDate && selectedBackDate?.toLocaleDateString()} {selectedBackTime}</p>
                                </div>
                                <div className="flex p-[10px] w-fit bg-[#FFE6B8] text-center text-[14px] rounded-[10px] text-[#6C7C8C]">{searchParams.get('toRoute')} - {searchParams.get('inRoute')}</div>
                            </div>
                        )}

                        <p className="text-[14px] text-[#4f5b67] font-semibol mb-2">Имя и Фамилия:</p>
                        <p className="text-[16px] text-[#4f5b67] font-semibold mb-2">{personName}</p>
                        <p className="text-[14px] text-[#4f5b67] font-semibol mb-2">Телефон:</p>
                        <p className="text-[16px] text-[#4f5b67] font-semibold mb-2">{personPhone}</p>
                        <p className="text-[14px] text-[#4f5b67] font-semibol mb-2">Почта:</p>
                        <p className="text-[16px] text-[#4f5b67] font-semibold mb-8">{personEmail}</p>
                        <div className="flex justify-between">
                            <p className="">Итого:</p>
                            <p className="text-[#26A659] text-[rubik] font-bold text-[18px] mb-[20px]"> {searchParams.get('price')} <span className="text-[#6C7C8C]">RUB</span></p>
                        </div>
                        <button onClick={handleSubmitOrder} className="w-full bg-[#26A659] text-[#fff] rounded-[5px] py-3">Отправить завяку</button>
                    </div>
                </div>
            </div>
        </section >
    );
}
