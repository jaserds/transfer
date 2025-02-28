import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import PopularRoutesSection from "@/components/PopularRoutesComponents/PopularRoutesSection";
import TransfersContainerComponentCity from "@/components/SectionTransfersComponent/TransfersContainerComponentCity";
import { prisma } from "@/lib/prisma";


export default async function Cities({ params }: { params: Promise<{ countryId: string }> }) {

    const { countryId } = await params;

    const cities = await prisma.city.findMany({
        where: { countryId },
        include: {
            country: { select: { name: true } },
            routes: { select: { id: true, inRoute: true, toRoute: true } },
            _count: {
                select: { routes: true },
            },
        },
    });

    const formattedCities = cities.map(city => ({
        countryName: city.country.name,
        data: {
            id: city.id,
            name: city.name,
            imageUrl: city.imageUrl,
            countryId: city.countryId,
            routeCount: city._count.routes,
            routes: city.routes.map(route => ({
                id: route.id,
                inRoute: route.inRoute,
                toRoute: route.toRoute,
            })),
        }
    }));

    const popularRoutes = await prisma.route.findMany({
        where: {
            city: {
                countryId: countryId,
            },
            popularRoute: true,
        },
        take: 12,
    });

    const responseData = popularRoutes.map((route) => ({
        id: route.id,
        inRoute: route.inRoute,
        toRoute: route.toRoute
    }))

    return (
        <>
            <MainComponent>
                <SearchRouteComponent />
                <Advantages />
            </MainComponent>
            <TransfersContainerComponentCity dataSet={formattedCities} isLoading={false} />
            <PopularRoutesSection popularRoute={responseData} itemName={formattedCities[0].countryName} />
        </>
    );
}
