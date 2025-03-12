import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import TransferContainerComponentAllCities from "@/components/SectionTransfersComponent/TransferContainerComponentAllCities";
import { prisma } from "@/lib/prisma";


export default async function Cities() {

    const cities = await prisma.city.findMany({
        include: {
            _count: {
                select: { routes: true },
            },
        },
    });
    console.log(cities);



    const formattedCities = cities.map(city => ({

        id: city.id,
        name: city.name,
        imageUrl: city.imageUrl,
        countryId: city.countryId,
        routeCount: city._count.routes,

    }));

    return (
        <>
            <MainComponent>
                <SearchRouteComponent />
                <Advantages />
            </MainComponent>
            {cities.length > 0 && <TransferContainerComponentAllCities dataSet={formattedCities} isLoading={false} />}

        </>
    );
}
