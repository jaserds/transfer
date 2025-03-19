import { prisma } from "@/lib/prisma";
import { getAppSessionStrictServer } from "@/lib/session.server";
import { NextResponse } from "next/server";


export async function GET() {

    try {
        const countriesWithRouteCount = await prisma.country.findMany({
            select: {
                id: true,
                name: true,
                imageUrl: true,
                CountryTranslation: {
                    select: {
                        name: true,
                        locale: true
                    }
                },
                cities: {
                    select: {
                        routes: true,
                    },
                },
            },
        });

        const countries = countriesWithRouteCount.map(country => ({
            id: country.id,
            name: country.name,
            imageUrl: country.imageUrl,
            routeCount: country.cities.reduce((total, city) => total + city.routes.length, 0),
            translation: country.CountryTranslation
        }));

        if (Array.isArray(countries) === false) {
            return NextResponse.json([]);
        } else {
            return NextResponse.json(countries);
        }


    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const session = await getAppSessionStrictServer();

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }
    try {
        const { name, nameEn, nameFr, imageUrl }: { name: string; nameEn: string; nameFr: string; imageUrl: string; } = await req.json();
        if (!name || !nameEn || !nameFr || !imageUrl) {
            return NextResponse.json({ error: "Name and image are required" }, { status: 400 });
        }
        const country = await prisma.country.create({
            data: {
                name,
                imageUrl,
                CountryTranslation: {
                    create: [
                        { locale: "ru", name: name },
                        { locale: "en", name: nameEn },
                        { locale: "fr", name: nameFr },
                    ],
                }
            },
        });

        return NextResponse.json(country);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}