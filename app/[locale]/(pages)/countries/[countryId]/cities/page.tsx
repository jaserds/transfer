import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import PopularRoutesSection from "@/components/PopularRoutesComponents/PopularRoutesSection";
import TransfersContainerComponentCity from "@/components/SectionTransfersComponent/TransfersContainerComponentCity";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";


type Props = {
    params: Promise<{ countryId: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const locale = await getLocale();

    const { countryId } = await params

    const country = await prisma.country.findUnique({
        where: { id: countryId },
        include: {
            CountryTranslation: { where: { locale }, select: { name: true } }
        }
    });

    const countryName = country?.CountryTranslation[0]?.name || "Страна";
    const title = `Города ${countryName} – Трансферы и маршруты`;
    const description = `Выберите город ${countryName} и забронируйте удобный трансфер с водителем.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://your-site.com/countries/${countryId}`,
            siteName: "Ваш сайт",
            images: [
                {
                    url: "https://your-site.com/thumbnail.jpg",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["https://your-site.com/thumbnail.jpg"],
        },
    };
}

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
        countryName: city.country.CountryTranslation[0]?.name,
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
            },
            transferCars: {
                select: {
                    price: true
                }
            }
        },
        take: 12,
    });


    const responseData = popularRoutes.map((route) => ({
        id: route.id,
        inRoute: route.inRoute,
        toRoute: route.toRoute,
        price: route.transferCars.length > 0
            ? Math.min(...route.transferCars
                .map((item) => item.price)
                .filter((price): price is number => price !== undefined)) // Удаляем undefined
            : null,
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
