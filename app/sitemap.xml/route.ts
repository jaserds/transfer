import { getAllRoutesFromDB, getAllCitiesFromDB, getAllRoutesInCitiesFromDB } from "@/lib/db";

export async function GET() {
    const staticPages = [
        { path: "/en", priority: 1.0 },
        { path: "/ru", priority: 1.0 },
        { path: "/fr", priority: 1.0 },
        { path: "/en/cities", priority: 0.8 },
        { path: "/ru/cities", priority: 0.8 },
        { path: "/fr/cities", priority: 0.8 },
        { path: "/en/popular-routes ", priority: 0.7 },
        { path: "/ru/popular-routes ", priority: 0.7 },
        { path: "/fr/popular-routes ", priority: 0.7 },
        { path: "/en/booking ", priority: 0.6 },
        { path: "/ru/booking ", priority: 0.6 },
        { path: "/fr/booking ", priority: 0.6 },
        { path: "/en/signin ", priority: 0.2 },
        { path: "/ru/signin ", priority: 0.2 },
        { path: "/fr/signin ", priority: 0.2 },
    ];

    const dynamicRoutes = await getAllRoutesFromDB();
    const dynamicCities = await getAllCitiesFromDB();
    const dynamicRoutesInCities = await getAllRoutesInCitiesFromDB();

    // Добавляем динамичные маршруты в список
    const allUrls = [
        ...staticPages,
        ...dynamicRoutes,
        ...dynamicCities,
        ...dynamicRoutesInCities,
    ];

    const urls = allUrls
        .map(({ path, priority = 0.7 }) => `
            <url>
                <loc>https://mysite.com${path}</loc>
                <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
                <priority>${priority}</priority>
            </url>
        `)
        .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
