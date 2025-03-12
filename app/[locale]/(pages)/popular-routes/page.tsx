import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import AllPopularRoutesSection from "@/components/PopularRoutesComponents/AllPopularRoutesSection";
import { prisma } from "@/lib/prisma";


export default async function PopularRoute() {

    const popularRoutes = await prisma.route.findMany({
        where: {
            popularRoute: true,
        },
        take: 30,
    });

    const responseData = popularRoutes.map((route) => ({
        id: route.id,
        inRoute: route.inRoute,
        toRoute: route.toRoute,
        price: route.price
    }))

    return (
        <>
            <MainComponent>
                <SearchRouteComponent />
                <Advantages />
            </MainComponent>
            {popularRoutes.length > 0 && <AllPopularRoutesSection popularRoute={responseData} />}

        </>
    );
}
