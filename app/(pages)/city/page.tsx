import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";
import TransfersContainerComponent from "@/components/SectionTransfersComponent/TransfersContainerComponent";

export default function City() {
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
