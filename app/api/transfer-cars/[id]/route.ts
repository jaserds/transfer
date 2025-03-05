import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getAppSessionStrictServer } from "@/lib/session.server";

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {

    const session = await getAppSessionStrictServer();

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    try {
        const { id } = await params;

        if (!id) {
            return NextResponse.json({ error: "Route ID is required" }, { status: 400 });
        }

        const transferCars = await prisma.transferCars.findUnique({
            where: { id },
        });


        if (!transferCars) {
            return NextResponse.json({ error: "Route not found" }, { status: 404 });
        }

        // Удаляем файл изображения, если он есть
        if (transferCars.imageUrl) {
            const imagePath = path.join(process.cwd(), "public", transferCars.imageUrl);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        // Удаляем страну из базы
        await prisma.transferCars.delete({ where: { id } });

        return NextResponse.json({ message: "Country and image deleted successfully" });
    } catch (error) {
        console.error("Error deleting country:", error);
        return NextResponse.json({ error: "Failed to delete country" }, { status: 500 });
    }
}