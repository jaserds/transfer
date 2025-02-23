import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Обработка запроса на проверку ключа
export async function POST(req: Request) {
    const { key } = await req.json();
    console.log(req);


    const adminKey = await prisma.adminKey.findUnique({
        where: { key },
    });

    if (adminKey) {
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json({ success: false, message: "Неверный ключ" }, { status: 403 });
    }
}