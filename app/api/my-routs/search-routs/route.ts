import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get("locale") || "en";

    try {
        const routes = await prisma.route.findMany({
            select: {
                id: true,
                RouteTranslation: {
                    select: {
                        inRoute: true,
                        toRoute: true,
                    },
                    where: {
                        locale: locale
                    }
                },
                city: {
                    select: {
                        CityTranslation: {
                            where: {
                                locale: locale
                            },
                            select: {
                                name: true
                            }
                        },

                    },
                }
            },

        });

        const responceRoutes = routes.map((route) => ({
            id: route.id,
            inRoute: route.RouteTranslation[0]?.inRoute,
            toRoute: route.RouteTranslation[0]?.toRoute,
            city: route.city.CityTranslation[0]?.name
        }));

        return NextResponse.json(responceRoutes);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    }
}