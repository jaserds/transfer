import { getTranslations } from "next-intl/server";
import Accordion from "./Accordion";


export default async function ContactAndFAQContainer() {
    const t = await getTranslations("AppTraslation");
    return (
        <div className="flex justify-center items-center bg-gray-50 pb-[35px]">
            <div className="w-full p-4 max-w-[800px]">
                <h2 className="text-[#383F47] font-[rubik] text-4xl font-semibold text-center mb-[70px] mt-[70px]">{t("components.ContactAndFAQContainer.pageTitle")}</h2>
                <Accordion
                    title={t("components.ContactAndFAQContainer.title1")}
                    content={t("components.ContactAndFAQContainer.text1")}
                />
                <Accordion
                    title={t("components.ContactAndFAQContainer.title2")}
                    content={t("components.ContactAndFAQContainer.text2")}
                />
                <Accordion
                    title={t("components.ContactAndFAQContainer.title3")}
                    content={t("components.ContactAndFAQContainer.text3")}
                />
                <Accordion
                    title={t("components.ContactAndFAQContainer.title4")}
                    content={t("components.ContactAndFAQContainer.text4")}
                />
                <Accordion
                    title={t("components.ContactAndFAQContainer.title5")}
                    content={t("components.ContactAndFAQContainer.text5")}
                />
            </div>
        </div>
    );
}