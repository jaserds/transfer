'use client';

import ContactAndFAQContainer from "@/components/ContactAndFAQSection/ContactAndFAQContainer";
import ContactsFomContainer from "@/components/ContactsFomSection/ContactsFomContainer";
import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import HowWorkContainer from "@/components/SectionHowWork/HowWorkContainer";
import TransfersContainerComponent from "@/components/SectionTransfersComponent/TransfersContainerComponent";
import WhyChooseUsContainer from "@/components/SectionWhyChooseUs/WhyChooseUsContainer";



export default function Home() {

  return (

    <>
      <MainComponent>
        <SearchRouteComponent />
        <Advantages />
      </MainComponent>
      <TransfersContainerComponent />
      <WhyChooseUsContainer />
      <HowWorkContainer />
      <ContactAndFAQContainer />
      <ContactsFomContainer />
    </>
  );
}
