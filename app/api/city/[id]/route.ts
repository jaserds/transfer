import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getAppSessionStrictServer } from "@/lib/session.server";


export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        if (!id) {
            return NextResponse.json({ error: "countryId is required" }, { status: 400 });
        }

        const cities = await prisma.city.findMany({
            where: { countryId: id },
            include: {
                country: { select: { name: true } },
                routes: { select: { id: true, inRoute: true, toRoute: true } },
                _count: {
                    select: { routes: true },
                },
            },
        });

        const formattedCities = cities.map(city => ({
            countryName: city.country.name,
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
            }
        }));

        return NextResponse.json(formattedCities);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    }
}


export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {

    const session = await getAppSessionStrictServer();

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    try {

        const { id } = await params;

        if (!id) {
            return NextResponse.json({ error: "Country ID is required" }, { status: 400 });
        }

        // Получаем страну перед удалением
        const city = await prisma.city.findUnique({
            where: { id },
        });


        if (!city) {
            return NextResponse.json({ error: "Country not found" }, { status: 404 });
        }

        // Удаляем файл изображения, если он есть
        if (city.imageUrl) {
            const imagePath = path.join(process.cwd(), "public", city.imageUrl);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        // Удаляем страну из базы
        await prisma.city.delete({ where: { id } });

        return NextResponse.json({ message: "Country and image deleted successfully" });
    } catch (error) {
        console.error("Error deleting country:", error);
        return NextResponse.json({ error: "Failed to delete country" }, { status: 500 });
    }
}