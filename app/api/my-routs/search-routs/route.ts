import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const routes = await prisma.route.findMany({
            select: {
                id: true,
                inRoute: true,
                toRoute: true,
                city: {
                    select: {
                        name: true
                    }
                }
            },

        });
        return NextResponse.json(routes);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    }
}