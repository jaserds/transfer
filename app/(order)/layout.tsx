import Footer from "@/components/Footer/Footer";
import HeaderComponent from "@/components/MainComponents/HeaderComponent";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeaderComponent />
            {children}
            <Footer />
        </>
    )
}