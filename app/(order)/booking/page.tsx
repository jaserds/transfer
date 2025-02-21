'use client';


import Image from "next/image";
import { CustomDatePicker, CustomTimePicker, CustomToggle } from "@/components/ui/booking";
import { useState } from "react";

export default function Booking() {
    const [isOn, setIsOn] = useState(false);

    return (
        <section className="bg-[#F4F4F4] px-6 flex justify-center">
            <div className="grid grid-cols-[570px_auto] gap-x-[20px] w-[600px]">
                <form className="my-0 mx-auto pt-[46px] pb-[350px]" action="">
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
                                    <CustomDatePicker />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="" className="text-sm text-[#6c7c8c] mb-[18px]">
                                        <span className="flex gap-3 items-center">
                                            <Image src={"/icons/booking/time-icon.svg"} width={20} height={20} alt="" />
                                            Время
                                        </span>
                                    </label>
                                    <CustomTimePicker />
                                </div>
                            </div>

                            <label htmlFor="" className="text-sm text-[#6c7c8c] mb-4">Место назначения: адрес или название отеля</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none mb-[30px] text-[#373F47] text-base" />
                            <p className="text-sm text-[#6c7c8c] mb-4">Обратный трансфер</p>
                            <CustomToggle isOn={isOn} setIsOn={setIsOn} />
                            {isOn && (
                                <div className="flex gap-[22px] mb-[30px] mt-[28px]">
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="" className="text-sm text-[#6c7c8c] mb-4">
                                            <span className="flex gap-3 items-center">
                                                <Image src={"/icons/booking/calendar-icon.svg"} width={20} height={20} alt="" />
                                                Дата трансфера
                                            </span>
                                        </label>
                                        <CustomDatePicker />
                                    </div>
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="" className="text-sm text-[#6c7c8c] mb-[18px]">
                                            <span className="flex gap-3 items-center">
                                                <Image src={"/icons/booking/time-icon.svg"} width={20} height={20} alt="" />
                                                Время
                                            </span>
                                        </label>
                                        <CustomTimePicker />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-[570px] bg-[#fff] shadow-[0_4px_8px_0_rgba(0,_0,_0,_0.1)] rounded-[10px]">
                        <div className="border-b-[2px] border-[rgba(108, 124, 140, 0.33)] p-5 ">
                            <h3 className="text-base font-bold text-[#373f47] text-[rubik]">О пассажире</h3>
                        </div>
                        <div className="flex flex-col p-5">
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
                            <input type="phone" className="w-2/4 p-2 border border-gray-300 rounded-lg focus:outline-none mb-[30px] text-[#373F47] text-base" placeholder="+" />
                            <label htmlFor="" className="text-sm text-[#6c7c8c] mb-4">
                                <span className="flex gap-3 items-center">
                                    <Image src={"/icons/booking/mail-order-icon.svg"} width={20} height={20} alt="" />
                                    Почта *
                                </span>
                            </label>
                            <input type="mail" className="w-2/4 p-2 border border-gray-300 rounded-lg focus:outline-none mb-[30px] text-[#373F47] text-base" placeholder="@" />
                            <div className="text-sm text-[#6c7c8c] flex justify-between">
                                <span className="flex gap-3 items-center">
                                    <Image src={"/icons/booking/person-qty-order-icon.svg"} width={20} height={20} alt="" />
                                    Число пассажиров *
                                </span>
                                <div className="">
                                    <button className="rounded-full text-[#fff] text-base bg-[#F9AC1A] w-[26px] h-[26px]">-</button>
                                    <span className="">1</span>
                                    <button className="rounded-full">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="w-[300px] sticky mt-[46px] top-4 p-6 bg-gray-200 rounded-lg shadow-md h-fit">
                    <p>Я закреплён справа и скролюсь вместе со страницей!</p>
                </div>
            </div>
        </section >
    );
}
