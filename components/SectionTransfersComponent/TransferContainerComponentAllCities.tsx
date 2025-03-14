import { Skeleton } from "../ui/skeleton";
import TransferComponentAllCities from "./TransferComponentAllCities";


interface ICitiesResponse {
    id: string
    name: string
    imageUrl: string | null
    countryId: string
    routeCount: number
    routeTranslation: { name: string; }
}

interface ITransferContainerComponentAllCitiesProps {
    dataSet: ICitiesResponse[];
    isLoading: boolean;
}

const TransferContainerComponentAllCities = ({ dataSet, isLoading }: ITransferContainerComponentAllCitiesProps) => {

    return (
        <section className="flex flex-col items-center mt-[120px] mb-[120px]">
            <div className="px-[10px]">
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
                            <TransferComponentAllCities key={index} dataSet={city} link={"/countries/" + city.countryId + "/cities/" + city.id} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default TransferContainerComponentAllCities;