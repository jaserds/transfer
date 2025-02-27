"use client";

import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import TransfersContainerComponentCountry from "@/components/SectionTransfersComponent/TransfersContainerComponentCountry";
import WhyChooseUsContainer from "@/components/SectionWhyChooseUs/WhyChooseUsContainer";
import { ICountryResponse } from "@/lib/types";
import { useEffect, useState } from "react";


export default function Countries() {
  const [countries, setCountries] = useState<ICountryResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/country")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data)
        setIsLoading(false)
      }
      )
      .catch(() => {
        console.error("Failed to fetch countries")
        setIsLoading(true)
      });
  }, []);

  return (
    <>
      <MainComponent>
        <SearchRouteComponent />
        <Advantages />
      </MainComponent>
      <TransfersContainerComponentCountry dataSet={countries} isLoading={isLoading} />
      <WhyChooseUsContainer />
    </>
  );
}
