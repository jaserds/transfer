import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import AllPopularRoutesSection from "@/components/PopularRoutesComponents/AllPopularRoutesSection";
import { prisma } from "@/lib/prisma";
import { getLocale } from "next-intl/server";


export async function generateMetadata() {
    const locale = await getLocale();
    const title = "Популярные маршруты – Бронирование трансферов";
    const description = "Выберите из списка популярных маршрутов и закажите удобный трансфер с водителем.";
    const imageUrl = `https://azuralptransfer.com/popular-routes-thumbnail.jpg`;
    const pageUrl = `https://azuralptransfer.com/${locale}/popular-routes`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: pageUrl,
            siteName: "AzuralpTransfer - Популярные маршруты",
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


export default async function PopularRoute() {
    const locale = await getLocale();

    const popularRoutes = await prisma.route.findMany({
        where: {
            popularRoute: true,
        },
        include: {
            RouteTranslation: {
                where: {
                    locale: locale,
                }
            },
            transferCars: {
                select: {
                    price: true
                }
            }
        },
        take: 30,
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
        routeTranslation: route.RouteTranslation[0]
    }))

    return (
        <>
            <MainComponent>
                <SearchRouteComponent />
                <Advantages />
            </MainComponent>
            {popularRoutes.length > 0 && <AllPopularRoutesSection popularRoute={responseData} />}

        </>
    );
}
