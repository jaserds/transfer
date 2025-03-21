import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';


export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const routeId = searchParams.get("routeId");
        const transferCarId = searchParams.get("transferCarId");

        if (!routeId || !transferCarId) {
            return NextResponse.json({ message: "Missing parameters" }, { status: 400 });
        }

        const result = await prisma.transferCarsOnRoutes.findUnique({
            where: { routeId_transferCarId: { routeId, transferCarId } },
            select: { price: true },
        });

        console.log(result);


        if (!result) {
            return NextResponse.json({ message: "Price not found" }, { status: 404 });
        }

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
    }
}

export async function POST(req: Request) {
    try {
        const { routeId, carId, price } = await req.json();

        const result = await prisma.transferCarsOnRoutes.upsert({
            where: {
                routeId_transferCarId: {
                    routeId,
                    transferCarId: carId,
                },
            },
            update: {
                price,
            },
            create: {
                routeId,
                transferCarId: carId,
                price,
            },
        });

        return NextResponse.json(result, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: 500 });
        }
    }
}