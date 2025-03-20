"use server";

import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import TransfersContainerComponentCountry from "@/components/SectionTransfersComponent/TransfersContainerComponentCountry";
import WhyChooseUsContainer from "@/components/SectionWhyChooseUs/WhyChooseUsContainer";
import { ICountryResponse } from "@/lib/types";


export default async function Countries() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/country`);
  if (!res.ok) {
    const errorText = await res.text();
    console.error("API request returned an error:", errorText);
    throw new Error("API request returned an error");
  }

  const countries: ICountryResponse[] = await res.json();

  return (
    <>
      <MainComponent>
        <SearchRouteComponent />
        <Advantages />
      </MainComponent>
      <TransfersContainerComponentCountry dataSet={countries} isLoading={false} />
      <WhyChooseUsContainer />
    </>
  );
}
