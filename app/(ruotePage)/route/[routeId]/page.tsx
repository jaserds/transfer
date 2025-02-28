import CarsComponentContainer from "@/components/CarsComponent/CarsComponentContainer";
import Advantages from "@/components/MainComponents/AdvantagesComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";



export default function Cities() {

    return (
        <>
            <MainComponent>
                <SearchRouteComponent />
                <Advantages />
            </MainComponent>
            <CarsComponentContainer />
        </>
    );
}
