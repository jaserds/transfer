import { prisma } from "@/lib/prisma";
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
        const newDataTransferCars = await prisma.transferCars.create({ data: await req.json() });
        return NextResponse.json(newDataTransferCars);
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    }
}