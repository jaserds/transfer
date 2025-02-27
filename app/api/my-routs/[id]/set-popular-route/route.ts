import { prisma } from "@/lib/prisma";
import { getAppSessionStrictServer } from "@/lib/session.server";
import { NextResponse } from "next/server";


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const session = await getAppSessionStrictServer();

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    try {
        const { popularRoute }: { popularRoute: boolean } = await req.json();
        const { id } = await params;

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        const updatedRoute = await prisma.route.update({
            where: { id },
            data: { popularRoute },
        });

        return NextResponse.json(updatedRoute);
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}