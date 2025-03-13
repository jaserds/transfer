import { getTranslations } from "next-intl/server";
import CarComponent from "./CarComponent";

interface TransferCar {
    id: string;
    name: string;
    imageUrl: string;
    cars: string;
    qtyPerson: number;
    qtyBags: number;
    price: number;
}

interface RouteData {
    id: string;
    toRoute: string;
    description: string;
    imageUrl: string;
    inRoute: string;
    price: number;
}

interface CarsComponentContainerProps {
    onlyTransferCars: TransferCar[];
    routeData: RouteData;
}

export default async function CarsComponentContainer({ onlyTransferCars, routeData }: CarsComponentContainerProps) {
    const t = await getTranslations("AppTraslation")
    return (
        <section className="px-4 mb-[120px] mt-[120px]">
            <div className="flex flex-col items-center mb-[72px]">
                <h2 className="text-4xl text-[#383F47] font-semibold font-[rubik] mb-[20px]">{t("components.CarsComponentContainer.title")}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-[1090px] mx-auto gap-[50px]">
                {onlyTransferCars.map((car) => <CarComponent key={car.id} carData={car} routeData={routeData} />)}
            </div>

        </section>
    )
}