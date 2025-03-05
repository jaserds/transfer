"use server";

import CarsComponentContainer from "@/components/CarsComponent/CarsComponentContainer";
import Footer from "@/components/Footer/Footer";
import Advantages from "@/components/MainComponents/AdvantagesComponent";
import HeaderComponent from "@/components/MainComponents/HeaderComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import { prisma } from "@/lib/prisma";

interface TransferCar {
    id: string;
    name: string;
    imageUrl: string;
    cars: string;
    qtyPerson: number;
    qtyBags: number;
    price: number;
}

export default async function TransferCars({ params }: { params: { routeId: string } }) {
    const { routeId } = await params

    const classCar = await prisma.transferCarsOnRoutes.findMany({
        where: {
            routeId: routeId,
        },
        select: {
            transferCar: true,
        },
    });

    const onlyTransferCars: TransferCar[] = classCar.map((item) => item.transferCar);


    return (
        <>
            <HeaderComponent />
            <MainComponent>
                <SearchRouteComponent />
                <Advantages />
            </MainComponent>
            <CarsComponentContainer onlyTransferCars={onlyTransferCars} />
            <Footer />
        </>
    );
}
