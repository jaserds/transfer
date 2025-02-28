"use client";

import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import PopularRoutesSection from "@/components/PopularRoutesComponents/PopularRoutesSection";
import TransfersContainerComponentCity from "@/components/SectionTransfersComponent/TransfersContainerComponentCity";
import { ICityByCountryResponse, IPopularRouteResponse } from "@/lib/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



export default function Cities() {

    const params = useParams();
    const [cities, setCities] = useState<ICityByCountryResponse[]>([]);
    const [popularRoute, setPopularRoute] = useState<IPopularRouteResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/city/${params.countryId}`)
            .then((res) => res.json())
            .then((data) => {
                setCities(data)
                setIsLoading(false)
            }
            )
            .catch(() => {
                console.error("Failed to fetch countries")
                setIsLoading(true)
            });
        fetch(`/api/country/${params.countryId}/popular-routes`)
            .then((res) => res.json())
            .then((data) => {
                setPopularRoute(data)
            })
    }, [params.countryId]);

    return (
        <>
            <MainComponent>
                <SearchRouteComponent />
                <Advantages />
            </MainComponent>
            <TransfersContainerComponentCity dataSet={cities} isLoading={isLoading} />
            <PopularRoutesSection popularRoute={popularRoute} />
        </>
    );
}
