'use client';

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface IRouteResponce {
    id: string;
    inRoute: string;
    toRoute: string;
    city: string;
}

export default function SearchRouteComponent() {
    const [isFocusedIsWere, setIsFocusedIsWere] = useState(false);
    const [isFocusedInWere, setIsFocusedInWer] = useState(false);
    const [inputInWere, setInputInWere] = useState("");
    const [inputToWere, setInputToWere] = useState("");
    const [isOpenPassengers, setIsOpenPassengers] = useState(false);
    const [passengers, setPassengers] = useState(2);
    const [isInOpenLocations, setInOpenLocations] = useState(false);
    const [isToOpenLocations, setToOpenLocations] = useState(false);
    const [routes, setRoutes] = useState<IRouteResponce[]>([]);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const dropdownLocationsRef = useRef<HTMLDivElement | null>(null);
    const dropdownToLocationsRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const t = useTranslations("AppTraslation")
    const ticons = useTranslations("imagesAlt")
    const locale = useLocale();

    const filteredRoutesInWere = routes
        .filter(route =>
            route.inRoute.toLowerCase().includes(inputInWere.toLowerCase()) || route.city.toLowerCase().includes(inputInWere.toLowerCase())
        )
        .reduce((uniqueRoutes: IRouteResponce[], route) => {
            if (!uniqueRoutes.some(r => r.inRoute === route.inRoute)) {
                uniqueRoutes.push(route);
            }
            return uniqueRoutes;
        }, []);

    const filteredRoutesToWere = routes.filter(route => route.inRoute === inputInWere);


    const handleSearchRoute = () => {
        const findRouteId = routes.find(route => route.inRoute === inputInWere && route.toRoute === inputToWere)?.id;
        if (inputInWere && inputToWere) {
            if (findRouteId) {
                router.push(`${locale}/route/${findRouteId}`);
            } else {
                toast(t("components.SearchRouteComponent.noFindRoute"))
            }
        } else {
            toast(t("components.SearchRouteComponent.noCheckRoute"))
        }
    };

    const handleSelect = (count: number) => {
        setPassengers(count);
        setIsOpenPassengers(false);
    };

    const handleReverseInputWhere = () => {
        const temp = inputInWere;
        setInputInWere(inputToWere);
        setInputToWere(temp);
    }

    const handleLocationSelect = (location: string) => {
        setInputInWere(location);
        setInOpenLocations(false);
    };

    const handleToLocationSelect = (location: string) => {
        setInputToWere(location);
        setToOpenLocations(false);
    };

    useEffect(() => {

        async function fetchRoutes() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-routs/search-routs?locale=` + locale);
                await response.json().then((data) => {
                    setRoutes(data);
                })


            } catch (error) {
                console.error("Error loading routes:", error);
            }
        }
        fetchRoutes();

        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpenPassengers(false);
            }

            if (dropdownLocationsRef.current && !dropdownLocationsRef.current.contains(event.target as Node)) {
                setInOpenLocations(false);
            }
        }

        document.addEventListener("mousedown", (event) => {
            if (dropdownRef.current && event.target instanceof Node && !dropdownRef.current.contains(event.target)) {
                setIsOpenPassengers(false);
            }

            if (dropdownLocationsRef.current && event.target instanceof Node && !dropdownLocationsRef.current.contains(event.target)) {
                setInOpenLocations(false);
            }

            if (dropdownToLocationsRef.current && event.target instanceof Node && !dropdownToLocationsRef.current.contains(event.target)) {
                setToOpenLocations(false);
            }
        });


        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex lg:flex-row md:flex-col max-md:flex-col w-full justify-center px-5 mb-[90px]">
            <div className="flex w-full max-md:flex-col">
                <div className="relative flex flex-col w-[46%] max-md:w-full h-[60px] z-10" ref={dropdownLocationsRef}>
                    <span className="max-md:hidden block absolute right-0 w-[2px] h-[80%] top-[10%] border-l-[2px] border-dashed border-[#D2D2D2]"></span>
                    <label
                        className={`absolute left-4 transition-all ${isFocusedIsWere || inputInWere
                            ? "top-1 text-sm text-gray-500"
                            : "top-[25%] text-[20px] text-[#D2D2D2]"
                            }`}
                        htmlFor="isWhereInput"
                    >
                        {t("components.SearchRouteComponent.labelFrom")}
                    </label>
                    <input
                        className="focus:outline-none rounded-none text-[#373F47]
                      h-full w-full px-4 pt-5 pb-1 rounded-tl-[10px] lg:rounded-bl-[10px] md:rounded-bl-none max-md:rounded-t-lg"
                        type="text"
                        id="isWhereInput"
                        value={inputInWere}
                        onClick={() => { setInOpenLocations(true) }}
                        onChange={(e) => setInputInWere(e.target.value)}
                        onFocus={() => setIsFocusedIsWere(true)}
                        onBlur={() => setIsFocusedIsWere(false)}
                        autoComplete="off"
                    />
                    {isInOpenLocations && inputInWere && filteredRoutesInWere.length > 0 && (
                        <ul className="absolute left-0 top-16 w-full mt-1 bg-white border rounded-l-lg shadow-md z-10">
                            {filteredRoutesInWere.map((location, index) => (
                                <li
                                    key={index}
                                    className="relative px-4 py-2 cursor-pointer hover:bg-[#f9ab1a52] text-[#373F47] last:border-none"
                                    onClick={() => {
                                        handleLocationSelect(location.inRoute);
                                    }}
                                >
                                    {location.inRoute}
                                    <p className="text-[14px]">{location.inRoute}, {location.city}</p>
                                    <span className="block absolute bottom-0 w-[90%] h-[1px] border-b-[1px] border-[#D2D2D2]"></span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="relative flex flex-col w-[8%] h-[60px] bg-[#fff] z-0 cursor-pointer max-md:w-full max-md:border-[1px] border-[#d2d2d264]" onClick={handleReverseInputWhere}>
                    <Image src={"/icons/main-search-icons/arrow-reverse.svg"} width={30} height={30} alt={ticons("SearchRouteComponent.reverse")} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="relative flex flex-col w-[47%] max-md:w-full h-[60px] z-10" ref={dropdownToLocationsRef}>
                    <span className="max-md:hidden block absolute left-0 w-[2px] 
                                 h-[80%] top-[10%] border-l-[2px] border-dashed border-[#D2D2D2] overflow-hidden"></span>
                    <span className="max-md:hidden block absolute right-0 w-[2px] 
                                 h-[80%] top-[10%] border-l-[2px] border-dashed border-[#D2D2D2] overflow-hidden"></span>
                    <label
                        className={`absolute left-4 transition-all ${isFocusedInWere || inputInWere
                            ? "top-1 text-sm text-gray-500"
                            : "top-[25%] text-[20px] text-[#D2D2D2]"
                            }`}
                        htmlFor="inWhereInput"
                    >
                        {t("components.SearchRouteComponent.labelTo")}
                    </label>
                    <input
                        className="focus:outline-none rounded-none
                      h-full w-full px-4 pt-5 pb-1 border-l-0 focus:border-l-0 lg:rounded-tr-none md:rounded-tr-[10px] text-[#373F47]"
                        type="text"
                        id="inWhereInput"
                        value={inputToWere}
                        onClick={() => { setToOpenLocations(true) }}
                        onChange={(e) => setInputToWere(e.target.value)}
                        onFocus={() => setIsFocusedInWer(true)}
                        onBlur={() => setIsFocusedInWer(false)}
                        autoComplete="off"
                    />
                    {isToOpenLocations && filteredRoutesToWere.length > 0 && (
                        <ul className="absolute left-0 top-16 w-full mt-1 bg-white border rounded-l-lg shadow-md z-10">
                            {filteredRoutesToWere.map((location, index) => (
                                <li
                                    key={index}
                                    className="relative px-4 py-2 cursor-pointer hover:bg-[#f9ab1a52] text-[#373F47] last:border-none"
                                    onClick={() => {
                                        handleToLocationSelect(location.toRoute);
                                    }}
                                >
                                    {location.toRoute}
                                    <p className="text-[14px]">{location.toRoute}, {location.city}</p>
                                    <span className="block absolute bottom-0 w-[90%] h-[1px] border-b-[1px] border-[#D2D2D2]"></span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="flex">
                <div className="relative z-9 lg:w-auto md:w-[50%] max-md:w-1/2" ref={dropdownRef}>
                    <button
                        className={`flex items-center gap-2 px-2 py-2 h-full lg:border-none lg:rounded-none md:rounded-t-none max-md:rounded-bl-lg md:rounded-bl-lg lg:w-[180px] md:w-full max-md:w-full bg-white`}
                        onClick={() => setIsOpenPassengers(!isOpenPassengers)}
                    >
                        <svg
                            className="w-7 h-7 text-[#D2D2D2]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M13.55 2c-.139 0-.279-.047-.502-.163a8.99 8.99 0 01-.164-.088l-.004-.002a6.26 6.26 0 00-.69-.337c-.758-.3-1.756-.415-3.348.116a.5.5 0 00.316.948c1.408-.469 2.16-.334 2.664-.134.2.079.359.165.532.26.075.04.15.082.234.125.26.134.576.275.962.275.093 0 .155.011.194.023a.213.213 0 01.046.02.183.183 0 01.004.057c-.01.189-.178.577-.648 1.046A.5.5 0 0013 4.5c0 .375.013.582.026.782v.001c.012.19.024.373.024.717 0 .688-.085 1.144-.22 1.455a1.152 1.152 0 01-.559.6A.5.5 0 0012 8.5v1.158c0 .578.079 1.05.305 1.442.231.399.577.644.966.845.342.176.786.424 1.142.772.35.342.587.75.587 1.262V15.5a.5.5 0 001 0v-1.52c0-.863-.413-1.514-.888-1.978-.469-.458-1.026-.763-1.383-.947-.311-.16-.465-.295-.559-.457-.098-.17-.17-.438-.17-.94V8.78c.32-.223.57-.525.746-.925.214-.49.304-1.103.304-1.856 0-.375-.013-.582-.026-.782v-.001a9.523 9.523 0 01-.022-.518c.452-.493.766-1.042.791-1.55.015-.302-.075-.619-.334-.85-.247-.22-.576-.3-.909-.3z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <span className="text-[#373F47]">
                            {passengers} {passengers === 1 ? t("components.SearchRouteComponent.qtyOnePassengers") : passengers < 5 ? t("components.SearchRouteComponent.qty5Passengers") : t("components.SearchRouteComponent.qtyAllPassengers")}
                        </span>

                        <svg
                            className={`w-4 h-4 transition-transform ${isOpenPassengers ? "rotate-180 text-[#F9AC1A]" : "text-gray-600"
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.854 6.146a.5.5 0 00-.708 0L8 10.293 3.854 6.146a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l4.5-4.5a.5.5 0 000-.708z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {isOpenPassengers && (
                        <ul className="absolute left-0 mt-2 w-48 bg-white border shadow-md z-10">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <li
                                    key={num}
                                    className="px-4 py-2 cursor-pointer hover:bg-[#f9ab1a52] text-[#373F47]"
                                    onClick={() => handleSelect(num)}
                                >
                                    {num} {num === 1 ? t("components.SearchRouteComponent.qtyOnePassengers") : num < 5 ? t("components.SearchRouteComponent.qtyAllPassengers") : t("components.SearchRouteComponent.qtyAllPassengers")}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button onClick={handleSearchRoute} className="text-[#fff] lg:w-[250px] md:w-1/2 text-base font-semibold px-4 py-5 max-h-[60px] h-full bg-[#F9AC1A] max-md:w-1/2 max-md:rounded-br-[10px] lg:rounded-r-[10px] md:rounded-r-none md:rounded-br-[10px]">{t("components.SearchRouteComponent.button")}</button>
            </div>
        </div>
    );
}