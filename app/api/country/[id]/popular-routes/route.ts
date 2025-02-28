import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const popularRoutes = await prisma.route.findMany({
            where: {
                city: {
                    countryId: id, // Фильтруем по countryId
                },
                popularRoute: true, // Фильтруем по популярным маршрутам
            },
            take: 12,
        });

        const responseData = popularRoutes.map((route) => ({
            id: route.id,
            inRoute: route.inRoute,
            toRoute: route.toRoute
        }))
        return NextResponse.json(responseData);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    }

}