import { Link } from "@/i18n/navigation";
import { IPopularRouteResponse } from "@/lib/types";
import { getTranslations } from "next-intl/server";
import Image from "next/image";


interface PopularRouteProps {
    popularRoute: IPopularRouteResponse[];
}

const AllPopularRoutesSection = async ({ popularRoute }: PopularRouteProps) => {

    const t = await getTranslations("AppTraslation")
    return (
        <section className="mb-[120px] px-5 bg-[url('/bg-popular-routes.png')] bg-no-repeat bg-cover bg-center max-h-[732px] mt-[120px]">
            <h2 className={`text-[#383F47] font-[rubik] text-4xl font-semibold text-center mb-[70px]`} >{t("components.PopularRoutes.title")}</h2>
            <div className="max-w-[1090px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[22px] justify-items-center" >
                {popularRoute.map((route) => (
                    <div key={route.id} className="rounded-[10px] p-3 shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] text-[13px] bg-[#fff] w-[342px] cursor-pointer">
                        <Link href={`/route/${route.id}`}>
                            <div className="flex justify-between gap-7 mb-2 text-[#373F47] font-semibold">
                                <p className="w-1/2">{t("components.PopularRoutes.from")}</p>
                                <div className="w-[50px]"></div>
                                <p className="w-1/2">{t("components.PopularRoutes.to")}</p>
                            </div>
                            <div className="flex justify-between gap-5 text-[#373F47]">
                                <p className="w-1/2">{route.routeTranslation.inRoute}</p>
                                <Image src="/icons/popular-route/popular-route-icon.svg" width={50} height={50} alt="" />
                                <p className="w-1/2">{route.routeTranslation.toRoute}</p>
                            </div>
                            <p className="flex justify-end text-[#26A65B] text-base font-bold">{t("components.PopularRoutes.price")} {route.price} р.</p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllPopularRoutesSection;