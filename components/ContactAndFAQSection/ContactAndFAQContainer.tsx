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
                    content={<>
                        <p className="text-[#383F47]">{t("components.ContactAndFAQContainer.text1.p1")}</p>
                        <ul className="list-disc pl-5 mt-2 text-[#383F47]">
                            <li><strong>{t("components.ContactAndFAQContainer.text1.li1.strong")}</strong> – {t("components.ContactAndFAQContainer.text1.li1.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text1.li2.strong")}</strong> – {t("components.ContactAndFAQContainer.text1.li2.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text1.li3.strong")}</strong> – {t("components.ContactAndFAQContainer.text1.li3.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text1.li4.strong")}</strong> – {t("components.ContactAndFAQContainer.text1.li4.text")}</li>
                        </ul>
                        <p className="mt-2 text-[#383F47]"><strong>{t("components.ContactAndFAQContainer.text1.p2")}</strong></p>
                    </>}
                />
                {/* <Accordion
                    title={t("components.ContactAndFAQContainer.title2")}
                    content={t("components.ContactAndFAQContainer.text2")}
                /> */}
                <Accordion
                    title={t("components.ContactAndFAQContainer.title3")}
                    content={<>
                        <p>{t("components.ContactAndFAQContainer.text2.p1")}</p>
                        <ul className="list-disc pl-5 mt-2 text-[#383F47]">
                            <li><strong>{t("components.ContactAndFAQContainer.text2.li1.strong")}</strong> – {t("components.ContactAndFAQContainer.text2.li1.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text2.li2.strong")}</strong> – {t("components.ContactAndFAQContainer.text2.li2.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text2.li3.strong")}</strong> – {t("components.ContactAndFAQContainer.text2.li3.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text2.li4.strong")}</strong> – {t("components.ContactAndFAQContainer.text2.li4.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text2.li5.strong")}</strong> – {t("components.ContactAndFAQContainer.text2.li5.text")}</li>
                        </ul>
                    </>}
                />
                <Accordion
                    title={t("components.ContactAndFAQContainer.title4")}
                    content={<>
                        <p>{t("components.ContactAndFAQContainer.text3.p1")}</p>
                        <ul className="list-disc pl-5 mt-2 mb-4 text-[#383F47]">
                            <li><strong>{t("components.ContactAndFAQContainer.text3.li1.strong")}</strong> – {t("components.ContactAndFAQContainer.text3.li1.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text3.li2.strong")}</strong> – {t("components.ContactAndFAQContainer.text3.li2.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text3.li3.strong")}</strong> – {t("components.ContactAndFAQContainer.text3.li3.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text3.li4.strong")}</strong> – {t("components.ContactAndFAQContainer.text3.li4.text")}</li>
                        </ul>
                        <p>{t("components.ContactAndFAQContainer.text3.p2")}</p>
                    </>}
                />
                <Accordion
                    title={t("components.ContactAndFAQContainer.title5")}
                    content={<>
                        <p>{t("components.ContactAndFAQContainer.text4.p1")}</p>
                        <ul className="list-disc pl-5 mt-2 mb-4 text-[#383F47]">
                            <li><strong>{t("components.ContactAndFAQContainer.text4.li1.strong")}</strong> – {t("components.ContactAndFAQContainer.text4.li1.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text4.li2.strong")}</strong> – {t("components.ContactAndFAQContainer.text4.li2.text")}</li>
                            <li><strong>{t("components.ContactAndFAQContainer.text4.li3.strong")}</strong> – {t("components.ContactAndFAQContainer.text4.li3.text")}</li>
                        </ul>
                        <p>{t("components.ContactAndFAQContainer.text4.p2")}</p>
                    </>}
                />
            </div>
        </div>
    );
}