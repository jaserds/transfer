import { getTranslations } from "next-intl/server";
import FeaturesComponent from "./FeaturesComponent";


const WhyChooseUsContainer = async () => {
    const t = await getTranslations("AppTraslation");

    return (
        <section className="px-4 mb-[120px]">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl text-[#383F47] text-center font-semibold font-[rubik] mb-[20px]">{t("components.WhyChooseUsContainer.title")}</h2>
                <h3 className="text-[22px] text-[#373F47] font-semibold mb-[60px] text-center">{t("components.WhyChooseUsContainer.subtitle")}</h3>
            </div>
            <FeaturesComponent />
        </section>
    )
}

export default WhyChooseUsContainer;