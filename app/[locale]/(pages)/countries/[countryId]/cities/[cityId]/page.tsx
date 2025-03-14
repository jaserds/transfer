
import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import PopularRoutesSection from "@/components/PopularRoutesComponents/PopularRoutesSection";
import { prisma } from "@/lib/prisma";
import { getLocale } from "next-intl/server";
import { NextResponse } from "next/server";


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
            cityName: route.city.CityTranslation[0].name,
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
