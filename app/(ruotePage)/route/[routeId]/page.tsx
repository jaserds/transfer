import CarsComponentContainer from "@/components/CarsComponent/CarsComponentContainer";
import Footer from "@/components/Footer/Footer";
import Advantages from "@/components/MainComponents/AdvantagesComponent";
import HeaderComponent from "@/components/MainComponents/HeaderComponent";
import MainComponent from "@/components/MainComponents/MainComponent";
import SearchRouteComponent from "@/components/MainComponents/SearchRouteComponent";



export default function Cities() {

    return (
        <>
            <HeaderComponent />
            <MainComponent>
                <SearchRouteComponent />
                <Advantages />
            </MainComponent>
            <CarsComponentContainer />
            <Footer />
        </>
    );
}
