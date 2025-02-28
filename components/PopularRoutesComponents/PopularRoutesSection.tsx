import { IPopularRouteResponse } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface PopularRouteProps {
    popularRoute: IPopularRouteResponse[];
}

const PopularRoutesSection = ({ popularRoute, itemName }: PopularRouteProps & { itemName: string }) => {

    return (
        <section className="mb-[120px] px-5 bg-[url('/bg-popular-routes.png')] bg-no-repeat bg-cover bg-center max-h-[732px]">
            <h2 className={`text-[#383F47] font-[rubik] text-4xl font-semibold text-center mb-[70px]`} >Популярные маршруты {itemName}</h2>
            <div className="max-w-[1090px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[22px] justify-items-center" >
                {popularRoute.map((route) => (
                    <div key={route.id} className="rounded-[10px] p-3 shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] text-[13px] bg-[#fff] w-[342px] cursor-pointer">
                        <Link href={`/route/${route.id}`}>
                            <div className="flex justify-between gap-7 mb-2 text-[#373F47] font-semibold">
                                <p className="w-1/2">От куда</p>
                                <div className="w-[50px]"></div>
                                <p className="w-1/2">Куда</p>
                            </div>
                            <div className="flex justify-between gap-5 text-[#373F47]">
                                <p className="w-1/2">{route.inRoute}</p>
                                <Image src="/icons/popular-route/popular-route-icon.svg" width={50} height={50} alt="" />
                                <p className="w-1/2">{route.toRoute}</p>
                            </div>
                            <p className="flex justify-end text-[#26A65B] text-base font-bold">От 13 500 р.</p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularRoutesSection;