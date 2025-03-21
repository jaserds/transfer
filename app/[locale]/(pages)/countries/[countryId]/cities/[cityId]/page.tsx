
import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import PopularRoutesSection from "@/components/PopularRoutesComponents/PopularRoutesSection";
import { prisma } from "@/lib/prisma";
import { getLocale } from "next-intl/server";
import { NextResponse } from "next/server";


export async function generateMetadata({ params }: { params: { cityId: string } }) {
    const locale = await getLocale();
    const city = await prisma.city.findUnique({
        where: { id: params.cityId },
        include: {
            CityTranslation: {
                where: { locale },
                select: { name: true },
            }
        }
    });

    const cityName = city?.CityTranslation[0]?.name || "Город";
    const title = `Популярные маршруты в ${cityName}`;
    const description = `Выберите из списка популярных маршрутов в ${cityName} и закажите удобный трансфер с водителем.`;
    const imageUrl = "https://your-site.com/popular-routes-city-thumbnail.jpg";
    const pageUrl = `https://your-site.com/popular-routes/${params.cityId}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: pageUrl,
            siteName: "Ваш сайт",
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

export default async function PopularRouteCity({ params }: { params: Promise<{ cityId: string }> }) {
    const locale = await getLocale();
    const { cityId } = await params;
    try {
        const popularRoutes = await prisma.route.findMany({
            where: {
                cityId: cityId,
                popularRoute: true, // Фильтруем по популярным маршрутам
            },
            include: {
                city: {
                    include: {
                        CityTranslation: {
                            where: {
                                locale: locale
                            }
                        }
                    }
                },
                RouteTranslation: {
                    where: {
                        locale: locale,
                    }
                }
            },
            take: 12,
        });

        const responseData = popularRoutes.map((route) => ({
            id: route.id,
            inRoute: route.inRoute,
            toRoute: route.toRoute,
            cityName: route.city.CityTranslation[0]?.name,
            price: route.price,
            routeTranslation: route.RouteTranslation[0],
        }))

        return (
            <>
                <MainComponent>
                    <SearchRouteComponent />
                    <Advantages />
                </MainComponent>
                <div className="mt-[120px]"></div>
                <PopularRoutesSection popularRoute={responseData} itemName={responseData[0]?.cityName} />
            </>
        )
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
