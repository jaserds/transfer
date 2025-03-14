import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";


interface ICitiesResponse {
    id: string
    name: string
    imageUrl: string | null
    countryId: string
    routeCount: number
    routeTranslation: { name: string; }
}


interface ITransferComponentCityProps {
    dataSet: ICitiesResponse;
    link: string;
}

const TransferComponentAllCities = async ({ dataSet, link }: ITransferComponentCityProps) => {

    const t = await getTranslations('AppTraslation')
    const ticons = await getTranslations('imagesAlt')


    function getTransferString(count: number): string {
        if (count === 1) {
            return `${count} ${t("components.TransferComponentCountry.iconTextOne")}`;
        } else if (count >= 2 && count <= 4) {
            return `${count}  ${t("components.TransferComponentCountry.iconTextMoreTwo")}`;
        } else {
            return `${count}  ${t("components.TransferComponentCountry.iconTextAll")}`;
        }
    }

    return (
        <Link className="" href={link}>
            <div className="relative cursor-pointer min-w-[290px] 
                        max-w-[330px] min-h-[311px] max-h-[351px] pt-[10px] 
                        px-[10px] shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] bg-white rounded-[10px]
                        transition-all duration-300 ease-in-out hover:scale-105">
                <p className="absolute top-[40px] right-[40px] text-white text-3xl font-semibold font-['Rubik'] leading-[15px] z-20">{dataSet.routeTranslation?.name}</p>
                <Image className="brightness-90 mb-[20px] min-h-[280px] rounded-[10px] object-cover" src={`${dataSet.imageUrl}`} width={330} height={351} alt={ticons("TransferComponentAllCities.city") + " " + dataSet.routeTranslation?.name} />
                <div className="flex pl-[10px] pb-[13px]">
                    <Image src="/icons/transfer-icons/transfer-route-icon.svg" width={20} height={20} alt={ticons("TransferComponentAllCities.route")} />
                    <p className="text-base font-semibold text-[#373F47] ml-[5px]">{getTransferString(dataSet.routeCount)}</p>
                </div>
            </div>
        </Link>
    );
};

export default TransferComponentAllCities;