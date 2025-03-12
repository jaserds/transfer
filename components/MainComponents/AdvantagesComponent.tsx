import { useTranslations } from "next-intl";
import Image from "next/image";


const Advantages = () => {
    const t = useTranslations("AppTraslation");

    return (
        <div className="max-w-[710px] w-full">
            <ul className="flex justify-between gap-10">
                <li className="flex flex-col items-center flex-1">
                    <Image src="/icons/main-advantages-icons/rule-icon.svg" width={60} height={60} alt="" />
                    <p className={`text-center font-[rubik] text-base font-medium text-[#FFFFFF]`}>{t("components.Advantages.driver")}</p>
                </li>
                <li className="flex flex-col items-center flex-1">
                    <Image src="/icons/main-advantages-icons/seat-icon.svg" width={60} height={60} alt="" />
                    <p className={`text-center font-[rubik] text-base font-medium text-[#FFFFFF]`}>{t("components.Advantages.comfort")}</p>
                </li>
                <li className="flex flex-col items-center flex-1">
                    <Image src="/icons/main-advantages-icons/defence-icon.svg" width={60} height={60} alt="" />
                    <p className={`text-center font-[rubik] text-base font-medium text-[#FFFFFF]`}>{t("components.Advantages.defender")}</p>
                </li>
                <li className="flex flex-col items-center flex-1">
                    <div className="w-[90px] h-[60px] flex items-center"><Image src="/icons/main-advantages-icons/car-icon.svg" width={85} height={85} alt="" /></div>
                    <p className={`text-center font-[rubik] text-base font-medium text-[#FFFFFF]`}>{t("components.Advantages.Premium")}</p>
                </li>
            </ul>
        </div>
    );
};

export default Advantages;