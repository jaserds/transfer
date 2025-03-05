import { prisma } from "@/lib/prisma";
import { getAppSessionStrictServer } from "@/lib/session.server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const dataTransferCars = await prisma.transferCars.findMany({});
        return NextResponse.json(dataTransferCars);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await getAppSessionStrictServer();

        if (!session || session.user.role !== "ADMIN") {
            return NextResponse.json({ error: "Access denied" }, { status: 403 });
        }

        const newDataTransferCars = await prisma.transferCars.create({ data: await req.json() });
        return NextResponse.json(newDataTransferCars);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    }
}