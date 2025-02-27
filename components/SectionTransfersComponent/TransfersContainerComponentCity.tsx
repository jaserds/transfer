import { ICityByCountryResponse } from "@/lib/types";
import { Skeleton } from "../ui/skeleton";
import TransferComponentCity from "./TransferComponentCity";

interface ITransferContainerComponentCityProps {
    dataSet: ICityByCountryResponse[];
    isLoading: boolean
}

const TransfersContainerComponentCity = ({ dataSet, isLoading }: ITransferContainerComponentCityProps) => {
    console.log(dataSet);
    return (
        <section className="flex flex-col items-center mt-[120px] mb-[120px]">
            <div className="px-[10px]">
                <h2 className="text-[#383F47] font-[rubik] text-4xl font-semibold text-center mb-[70px]">
                    Трансферы {dataSet[0]?.countryName}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[50px] justify-center">
                    {isLoading
                        ? Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative min-w-[290px] max-w-[330px] min-h-[311px] max-h-[351px] p-[10px] shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] bg-white rounded-[10px]"
                            >
                                <Skeleton className="absolute top-[40px] right-[40px] w-[100px] h-[20px] rounded-full" />
                                <Skeleton className="w-full h-[200px] rounded-lg mb-[20px]" />
                                <div className="flex pl-[10px] pb-[13px]">
                                    <Skeleton className="w-[20px] h-[20px] rounded-full" />
                                    <Skeleton className="w-[120px] h-[20px] ml-[5px] rounded-full" />
                                </div>
                            </div>
                        ))
                        :
                        dataSet.map((city, index) => (
                            <TransferComponentCity key={index} dataSet={city} link="" />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default TransfersContainerComponentCity;