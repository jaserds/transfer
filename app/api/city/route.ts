import { prisma } from "@/lib/prisma";
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
    try {
        const { name, imageUrl, countryId }: { name: string; imageUrl: string, countryId: string } = await req.json();
        if (!name || !imageUrl) {
            return NextResponse.json({ error: "Name and image are required" }, { status: 400 });
        }
        const city = await prisma.city.create({ data: { name, imageUrl, countryId } });

        return NextResponse.json(city);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}