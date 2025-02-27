import { ICountryResponse } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface ITransferComponentCountyProps {
    dataSet: ICountryResponse;
    link: string;
}

const TransferComponentCountry = ({ dataSet, link }: ITransferComponentCountyProps) => {

    function getTransferString(count: number): string {
        if (count === 1) {
            return `${count} трансфер`;
        } else if (count >= 2 && count <= 4) {
            return `${count} трансфера`;
        } else {
            return `${count} трансферов`;
        }
    }

    return (
        <Link className="" href={link}>
            <div className="relative cursor-pointer min-w-[290px] 
        max-w-[330px] min-h-[311px] max-h-[351px] pt-[10px] 
        px-[10px] shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] bg-white rounded-[10px]
        transition-all duration-300 ease-in-out hover:scale-105">
                <p className="absolute top-[40px] right-[40px] text-white text-3xl font-semibold font-['Rubik'] leading-[15px] z-20">{dataSet.name}</p>
                <Image className="brightness-90 mb-[20px]" src={`${dataSet.imageUrl}`} width={330} height={351} alt="" />
                <div className="flex pl-[10px] pb-[13px]">
                    <Image src="/icons/transfer-icons/transfer-route-icon.svg" width={20} height={20} alt="" />
                    <p className="text-base font-semibold text-[#373F47] ml-[5px]">{getTransferString(dataSet.routeCount)}</p>
                </div>
            </div>
        </Link>
    );
};

export default TransferComponentCountry;