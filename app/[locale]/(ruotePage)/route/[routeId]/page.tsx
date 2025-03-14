"use server";

import CarsComponentContainer from "@/components/CarsComponent/CarsComponentContainer";
import ContactAndFAQContainer from "@/components/ContactAndFAQSection/ContactAndFAQContainer";
import ContactsFomContainer from "@/components/ContactsFomSection/ContactsFomContainer";
import Footer from "@/components/Footer/Footer";
import Advantages from "@/components/MainComponents/AdvantagesComponent";
import HeaderComponent from "@/components/MainComponents/HeaderComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import { prisma } from "@/lib/prisma";
import { getLocale } from "next-intl/server";

interface TransferCar {
    id: string;
    name: string;
    imageUrl: string;
    cars: string;
    qtyPerson: number;
    qtyBags: number;
    price: number;
    TransferCarsTranslation: { name: string }[]
}

export default async function TransferCars({ params }: { params: { routeId: string } }) {
    const { routeId } = await params

    const locale = await getLocale()

    const classCar = await prisma.transferCarsOnRoutes.findMany({
        where: {
            routeId: routeId,
        },
        select: {
            transferCar: {
                select: {
                    id: true,
                    name: true,
                    imageUrl: true,
                    cars: true,
                    qtyPerson: true,
                    qtyBags: true,
                    price: true,
                    TransferCarsTranslation: {
                        where: {
                            locale: locale,
                        },
                        select: {
                            name: true,
                        }
                    }
                }
            },
        },
    });

    const onlyTransferCars: TransferCar[] = classCar.map((item) => item.transferCar);

    const routeData = await prisma.route.findUnique({
        where: {
            id: routeId,
        },
        select: {
            id: true,
            toRoute: true,
            description: true,
            imageUrl: true,
            inRoute: true,
            price: true,
            RouteTranslation: {
                where: {
                    locale: locale,
                },
                select: {
                    inRoute: true,
                    toRoute: true,
                    description: true,
                }
            }
        }
    });

    console.log("routeData", routeData);



    if (!routeData) {
        return <div>Маршрут не найден</div>;
    }



    return (
        <>
            <HeaderComponent />
            <MainComponent>
                <SearchRouteComponent />
                <Advantages />
            </MainComponent>
            <CarsComponentContainer onlyTransferCars={onlyTransferCars} routeData={routeData} />
            <div className="mb-[72px] relative w-full h-[300px] bg-cover bg-center bg-no-repeat bg-fixed flex justify-center items-center" style={{ backgroundImage: `url('${routeData?.imageUrl}')` }}>
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <h1 className="relative text-[36px] text-white font-rubik font-bold">
                    {routeData.RouteTranslation[0].inRoute} - {routeData.RouteTranslation[0].toRoute}
                </h1>
            </div>
            <section className="mb-[120px]">
                <div className="max-w-[1070px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p className="text-lg text-[#373F47]">
                        {routeData.RouteTranslation[0].description}
                    </p>
                    {/* <div className="w-[490px] h-[314px] bg-white rounded-lg shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] px-[10px] pt-[10xp] pb-[20px]" >
                        <div className="w-full h-[250px] mb-[20px]"></div>
                        <p className="text-[#6C7C8C] text-[20px] font-bold text-center ">{routeData?.inRoute} - {routeData?.toRoute}</p>
                    </div> */}
                </div>
            </section>
            <ContactAndFAQContainer />
            <ContactsFomContainer />
            <Footer />
        </>
    );
}
