import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";


interface IRequestMyRoute {
    id: string;
    imageUrl: string
    inRoute: string
    toRoute: string;
    cityId: string;
    popularRoute: boolean;
    pointsGoogleMap: Prisma.JsonValue;
    description: string
}

export async function GET() {
    try {
        const countries = await prisma.country.findMany();
        return NextResponse.json(countries);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { imageUrl, inRoute, toRoute, cityId, popularRoute, pointsGoogleMap, description }: IRequestMyRoute = await req.json();
        if (!imageUrl || !inRoute || !toRoute || !cityId || !popularRoute || !pointsGoogleMap || !description) {
            return NextResponse.json({ error: "Not all fields were filled (name, image, inRoute, toRoute, cityId, popularRoute, pointsGoogleMap.json, description)" }, { status: 400 });
        }

        const myroute = await prisma.route.create({
            data: {
                imageUrl,
                inRoute,
                toRoute,
                cityId,
                popularRoute,
                pointsGoogleMap,
                description
            }
        });

        return NextResponse.json(myroute);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}