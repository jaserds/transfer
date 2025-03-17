import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import TransferContainerComponentAllCities from "@/components/SectionTransfersComponent/TransferContainerComponentAllCities";
import { prisma } from "@/lib/prisma";
import { getLocale } from "next-intl/server";


export default async function Cities() {

    const locale = await getLocale();

    const cities = await prisma.city.findMany({
        include: {
            _count: {
                select: { routes: true },
            },
            CityTranslation: {
                where: {
                    locale: locale,
                },
                select: {
                    name: true
                }
            }
        },
    });

    const formattedCities = cities.map(city => ({
        id: city.id,
        name: city.name,
        imageUrl: city.imageUrl,
        countryId: city.countryId,
        routeCount: city._count.routes,
        routeTranslation: city.CityTranslation[0]
    }));

    return (
        <>
            <MainComponent>
                <SearchRouteComponent />
                <Advantages />
            </MainComponent>
            {cities.length > 0 && <TransferContainerComponentAllCities dataSet={formattedCities} isLoading={false} />}
        </>
    );
}
