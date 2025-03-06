// pages/api/add-transfer-cars.ts

import { prisma } from '@/lib/prisma';
import { getAppSessionStrictServer } from '@/lib/session.server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const session = await getAppSessionStrictServer();

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const { routeId, addedId } = await req.json();

    try {
        if (!routeId || !addedId) {
            return NextResponse.json({ error: 'Missing routeId or addedId' }, { status: 400 });
        }

        // Создание новой записи в связи
        await prisma.transferCarsOnRoutes.create({
            data: {
                routeId,
                transferCarId: addedId
            },
        });

        // Возвращаем успешный ответ
        return NextResponse.json({ message: 'Transfer cars added successfully' }, { status: 201 });
    } catch (error) {
        // Обработка ошибок
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
        }
    }
}