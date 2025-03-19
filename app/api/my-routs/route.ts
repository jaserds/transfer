import { prisma } from "@/lib/prisma";
import { getAppSessionStrictServer } from "@/lib/session.server";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

interface IRequestMyRoute {
    imageUrl: string;
    inRoute: string;
    toRoute: string;
    inRouteEn: string;
    toRouteEn: string;
    toRouteFr: string;
    inRouteFr: string;
    cityId: string;
    popularRoute: boolean;
    pointsGoogleMap: Prisma.JsonValue;
    description: string;
    descriptionEn: string;
    descriptionFr: string;
    price: number;
    transferCarIds: string[];
}

export async function GET() {
    try {
        const routes = await prisma.route.findMany(
            {
                include: {
                    transferCars: {
                        include: {
                            transferCar: true,
                        },
                    },
                }
            }
        );
        return NextResponse.json(routes);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    }
}

export async function POST(req: Request) {


    const session = await getAppSessionStrictServer();

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    try {
        const { imageUrl, inRoute, toRoute, cityId, popularRoute, pointsGoogleMap, description, price, transferCarIds, inRouteEn, toRouteEn, descriptionEn, inRouteFr, toRouteFr, descriptionFr }: IRequestMyRoute = await req.json();

        if (!imageUrl || !inRoute || !toRoute || !cityId || !pointsGoogleMap || !description || !price || !transferCarIds || !inRouteEn || !toRouteEn || !descriptionEn || !inRouteFr || !toRouteFr || !descriptionFr) {
            return NextResponse.json(
                { error: "Not all fields were filled (imageUrl, inRoute, toRoute, cityId, pointsGoogleMap, description)" },
                { status: 400 }
            );
        }

        const myroute = await prisma.route.create({
            data: {
                imageUrl,
                inRoute,
                toRoute,
                cityId,
                popularRoute,
                pointsGoogleMap,
                description,
                price,
                transferCars: {
                    create: transferCarIds.map((id) => ({
                        transferCar: { connect: { id } },
                    })),
                },
                RouteTranslation: {
                    create: [
                        {
                            locale: "ru",
                            inRoute: inRoute,
                            toRoute: toRoute,
                            description: description,
                        },
                        {
                            locale: "en",
                            inRoute: inRouteEn,
                            toRoute: toRouteEn,
                            description: descriptionEn,
                        },
                        {
                            locale: "fr",
                            inRoute: inRouteFr,
                            toRoute: toRouteFr,
                            description: descriptionFr,
                        }
                    ],
                },
            },
            include: { transferCars: { include: { transferCar: true } } },
        });

        return NextResponse.json(myroute);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    }
}