import { prisma } from "@/lib/prisma";
import { getAppSessionStrictServer } from "@/lib/session.server";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const city = await prisma.city.findMany();
        return NextResponse.json(city);
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
        const { name, nameEn, nameFr, imageUrl, countryId }: { name: string; nameEn: string; nameFr: string; imageUrl: string, countryId: string } = await req.json();
        if (!name || !nameEn || !imageUrl) {
            return NextResponse.json({ error: "Name and image are required" }, { status: 400 });
        }
        const city = await prisma.city.create({
            data: {
                name,
                imageUrl,
                countryId,
                CityTranslation: {
                    create: [
                        { locale: "en", name: nameEn },
                        { locale: "ru", name: name },
                        { locale: "fr", name: nameFr },
                    ],
                }
            }
        });

        return NextResponse.json(city);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}