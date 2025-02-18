'use client';

import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import TransfersContainerComponent from "@/components/SectionTransfersComponent.tsx/TransfersContainerComponent";



export default function Home() {

  return (

    <>
      <MainComponent>
        <SearchRouteComponent />
        <Advantages />
      </MainComponent>
      <TransfersContainerComponent />
    </>
  );
}
