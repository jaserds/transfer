import Image from "next/image";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"], // Укажи нужные веса
    variable: "--font-open-sans", // Опционально: CSS переменная
});


const Advantages = () => {
    return (
        <div className="max-w-[710px] w-full">
            <ul className="flex justify-between gap-10">
                <li className="flex flex-col items-center flex-1">
                    <Image src="/icons/main-advantages-icons/rule-icon.svg" width={60} height={60} alt="" />
                    <p className={`text-center ${openSans.className} text-base font-medium text-[#FFFFFF]`}>Русскоговорящий водитель</p>
                </li>
                <li className="flex flex-col items-center flex-1">
                    <Image src="/icons/main-advantages-icons/seat-icon.svg" width={60} height={60} alt="" />
                    <p className={`text-center ${openSans.className} text-base font-medium text-[#FFFFFF]`}>Комфортная поездка</p>
                </li>
                <li className="flex flex-col items-center flex-1">
                    <Image src="/icons/main-advantages-icons/defence-icon.svg" width={60} height={60} alt="" />
                    <p className={`text-center ${openSans.className} text-base font-medium text-[#FFFFFF]`}>Безопасность прежде всего</p>
                </li>
                <li className="flex flex-col items-center flex-1">
                    <div className="w-[90px] h-[60px] flex items-center"><Image src="/icons/main-advantages-icons/car-icon.svg" width={85} height={85} alt="" /></div>
                    <p className={`text-center ${openSans.className} text-base font-medium text-[#FFFFFF]`}>Премиум автомобили</p>
                </li>
            </ul>
        </div>
    );
};

export default Advantages;