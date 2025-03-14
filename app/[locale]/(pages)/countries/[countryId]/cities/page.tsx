import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import PopularRoutesSection from "@/components/PopularRoutesComponents/PopularRoutesSection";
import TransfersContainerComponentCity from "@/components/SectionTransfersComponent/TransfersContainerComponentCity";
import { prisma } from "@/lib/prisma";
import { getLocale } from "next-intl/server";


export default async function Cities({ params }: { params: Promise<{ countryId: string }> }) {

    const { countryId } = await params;
    const locale = await getLocale();

    const cities = await prisma.city.findMany({
        where: { countryId },
        include: {
            country: { select: { CountryTranslation: { where: { locale: locale } } } },
            routes: { select: { id: true, inRoute: true, toRoute: true } },
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
        countryName: city.country.CountryTranslation[0].name,
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
            translations: city.CityTranslation[0]
        }
    }));

    const popularRoutes = await prisma.route.findMany({
        where: {
            city: {
                countryId: countryId,
            },
            popularRoute: true,
        },
        include: {
            RouteTranslation: {
                where: {
                    locale: locale,
                },
            }
        },
        take: 12,
    });

    const responseData = popularRoutes.map((route) => ({
        id: route.id,
        inRoute: route.inRoute,
        toRoute: route.toRoute,
        price: route.price,
        routeTranslation: route.RouteTranslation[0],
    }))

    return (
        <>
            <MainComponent>
                <SearchRouteComponent />
                <Advantages />
            </MainComponent>
            {cities.length > 0 && <TransfersContainerComponentCity dataSet={formattedCities} isLoading={false} />}
            {popularRoutes.length > 0 && <PopularRoutesSection popularRoute={responseData} itemName={formattedCities[0]?.countryName} />}

        </>
    );
}
