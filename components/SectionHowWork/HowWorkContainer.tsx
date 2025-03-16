"use server";

import { getTranslations } from "next-intl/server";
import Image from "next/image";

const HowWorkContainer = async () => {
    const t = await getTranslations("AppTraslation")
    const ticons = await getTranslations("imagesAlt")

    const howWorkData = [
        {
            image: '/icons/how-work/how-work-route.svg',
            title: t("components.HowWorkContainer.title1"),
            text: t("components.HowWorkContainer.text1"),
            alt: ticons("HowWorkContainer.icon1")
        },
        {
            image: '/icons/how-work/how-work-check.svg',
            title: t("components.HowWorkContainer.title2"),
            text: t("components.HowWorkContainer.text2"),
            alt: ticons("HowWorkContainer.icon2")
        },
        {
            image: '/icons/how-work/how-work-driver.svg',
            title: t("components.HowWorkContainer.title3"),
            text: t("components.HowWorkContainer.text3"),
            alt: ticons("HowWorkContainer.icon3")
        }
    ]

    return (
        <section className="mb-[120px] px-5">
            <h2 className={`text-[#383F47] font-[rubik] text-4xl font-semibold text-center mb-[70px]`} >{t("components.HowWorkContainer.pageTitle")}</h2>
            <div className="max-w-[1090px] mx-auto flex flex-col sm:flex-row flex-wrap justify-center gap-5 lg:justify-between">
                {
                    howWorkData.map((howWorkItem, index) => {
                        return (
                            <div className="
                            relative
                            min-w-[300px] max-w-[300px]
                            border-dash-16
                            px-[15px]
                            py-[25px]
                            flex
                            flex-col
                            "
                                key={index}>
                                <Image className="mx-auto mb-[22px]" src={howWorkItem.image} width={120} height={120} alt={howWorkItem.alt} />
                                <h4 className="text-[rubik] font-semibold text-[16px] text-[#373F47] text-center mb-4">{howWorkItem.title}</h4>
                                <p className="text-[16px] text-[#373F47] text-center mt-auto">{howWorkItem.text}</p>
                            </div>
                        )

                    })
                }
            </div>
        </section>
    );
};

export default HowWorkContainer;