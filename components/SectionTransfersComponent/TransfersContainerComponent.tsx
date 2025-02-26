"use client";

import { useEffect, useState } from 'react';
import TransferComponent from './TransferComponent';
import { Skeleton } from '../ui/skeleton';

interface Country {
    id: string;
    name: string;
    imageUrl: string;
}

const TransfersContainerComponent = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("/api/country")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data)
                setIsLoading(false)
            }
            )
            .catch(() => {
                console.error("Failed to fetch countries")
                setIsLoading(false);
            });
    }, []);

    return (
        <section className='flex flex-col items-center mt-[120px] mb-[120px]'>
            <div className="px-[10px]">
                <h2 className={`text-[#383F47] font-[rubik] text-4xl font-semibold text-center mb-[70px]`} >Трансферы</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[50px] justify-center">

                    {isLoading
                        ? // Показываем 6 скелетонов, пока данные загружаются
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="relative min-w-[290px] max-w-[330px] min-h-[311px] max-h-[351px] p-[10px] shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] bg-white rounded-[10px]">
                                <Skeleton className="absolute top-[40px] right-[40px] w-[100px] h-[20px] rounded-full" />
                                <Skeleton className="w-full h-[200px] rounded-lg mb-[20px]" />
                                <div className="flex pl-[10px] pb-[13px]">
                                    <Skeleton className="w-[20px] h-[20px] rounded-full" />
                                    <Skeleton className="w-[120px] h-[20px] ml-[5px] rounded-full" />
                                </div>
                            </div>
                        ))
                        : // Отображаем данные, если загрузка завершена
                        countries.map((country, index) => (
                            <TransferComponent key={index} dataSet={country} />
                        ))}
                </div>
            </div>


        </section>
    );

};

export default TransfersContainerComponent;