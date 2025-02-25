import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


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
        const { name, imageUrl }: { name: string; imageUrl: string } = await req.json();
        if (!name || !imageUrl) {
            return NextResponse.json({ error: "Name and image are required" }, { status: 400 });
        }
        const country = await prisma.country.create({ data: { name, imageUrl } });

        return NextResponse.json(country);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
