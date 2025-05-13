import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import TransferContainerComponentAllCities from "@/components/SectionTransfersComponent/TransferContainerComponentAllCities";
import { prisma } from "@/lib/prisma";
import { getLocale } from "next-intl/server";


export async function generateMetadata() {
    const locale = await getLocale();
    const title = "Все города – Трансферы и маршруты";
    const description = "Выберите город и забронируйте удобный трансфер с водителем по лучшей цене.";
    const imageUrl = "https://azuralptransfer.com/all-cities-thumbnail.jpg";
    const pageUrl = `https://azuralptransfer.com/${locale}/cities`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: pageUrl,
            siteName: `AzuralpTransfer - Все города`,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "website",
        },

        // 🔹 Twitter Cards
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
    };
}

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
