import { prisma } from '@/lib/prisma';
import { getAppSessionStrictServer } from '@/lib/session.server';
import { NextResponse } from 'next/server';

// Настроенный Prisma клиент

export async function POST(req: Request) {
    const session = await getAppSessionStrictServer();

    if (!session || session.user.role !== "ADMIN") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const { routeId, deletedId } = await req.json();
    console.log(routeId, deletedId);

    if (!routeId || !deletedId) {
        return NextResponse.json({ error: 'Missing routeId or deletedId' }, { status: 400 });
    }

    try {
        // Удаляем связь между маршрутом и авто
        await prisma.transferCarsOnRoutes.delete({
            where: {
                routeId_transferCarId: {
                    routeId,
                    transferCarId: deletedId, // Передаем конкретный id
                },
            },
        });

        // Возвращаем успешный ответ
        return NextResponse.json({ message: 'Transfer cars removed successfully' }, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error || 'Internal server error' }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
        }
    }
}