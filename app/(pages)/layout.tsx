import ContactAndFAQContainer from "@/components/ContactAndFAQSection/ContactAndFAQContainer";
import ContactsFomContainer from "@/components/ContactsFomSection/ContactsFomContainer";
import Footer from "@/components/Footer/Footer";
import HeaderComponent from "@/components/MainComponents/HeaderComponent";
import HowWorkContainer from "@/components/SectionHowWork/HowWorkContainer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeaderComponent />
            {children}
            <HowWorkContainer />
            <ContactAndFAQContainer />
            <ContactsFomContainer />
            <Footer />
        </>
    )
}
