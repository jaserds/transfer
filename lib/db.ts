import { prisma } from "./prisma";

// Тип для объекта с path и priority
type UrlWithPriority = {
    path: string;
    priority?: number; // priority необязателен
};

const locales = ["ru", "en", "fr"];

// Функции для получения данных с типом
export async function getAllRoutesFromDB(): Promise<UrlWithPriority[]> {
    try {
        const routes = await prisma.route.findMany({
            select: { id: true },
        });

        return routes.flatMap((route) =>
            locales.map((locale) => ({
                path: `/${locale}/route/${route.id}`,
                priority: 0.8, // пример значения priority
            }))
        );
    } catch (error) {
        console.error("Ошибка при получении маршрутов:", error);
        return [];
    }
}

export async function getAllCitiesFromDB(): Promise<UrlWithPriority[]> {
    try {
        const countries = await prisma.country.findMany({
            select: { id: true },
        });

        return countries.flatMap((country) =>
            locales.map((locale) => ({
                path: `/${locale}/countries/${country.id}/cities`,
                priority: 0.7, // пример значения priority
            }))
        );
    } catch (error) {
        console.error("Ошибка при получении городов:", error);
        return [];
    }
}

export async function getAllRoutesInCitiesFromDB(): Promise<UrlWithPriority[]> {
    try {
        const countries = await prisma.country.findMany({
            select: {
                id: true,
                cities: {
                    select: { id: true },
                },
            },
        });

        const routes = countries.flatMap((country) =>
            country.cities.flatMap((city) =>
                locales.map((locale) => ({
                    path: `/${locale}/countries/${country.id}/cities/${city.id}`,
                    priority: 0.7, // пример значения priority
                }))
            )
        );

        return routes;
    } catch (error) {
        console.error("Ошибка при получении маршрутов в городах:", error);
        return [];
    }
}
