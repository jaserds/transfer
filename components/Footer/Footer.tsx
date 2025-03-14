import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Footer() {

    const t = await getTranslations("AppTraslation")
    const ticons = await getTranslations("imagesAlt")

    return (
        <section className="bg-[#292929] h-[340px] flex flex-col items-center">
            <div className="mt-[40px] mb-[20px]">
                <Image src="/icons/header-icons/logo-footer.svg" width={137} height={70} alt={ticons("Footer.logo")} />
            </div>
            <ul className="flex max-w-[575px] px-5 justify-between gap-[46px] text-[#fff] mb-[120px]">
                <li className="cursor-pointer"><Link href={"/"}>{t("components.footer.homeLink")}</Link></li>
                <li className="cursor-pointer"><Link href={"/cities"}>{t("components.footer.citiesLink")}</Link></li>
                <li className="cursor-pointer"><Link href={"/popular-routes"}>{t("components.footer.popularRoutesLink")}</Link></li>
                {/* <li className="cursor-pointer">Экскурсии</li> */}
            </ul>
            <div className="flex justify-center gap-5">
                <Image className="cursor-pointer" src="/icons/social-icons/wa.svg" width={40} height={40} alt={ticons("Footer.wa")} />
                <Image className="cursor-pointer" src="/icons/social-icons/tg.svg" width={40} height={40} alt={ticons("Footer.telegram")} />
                <Image className="cursor-pointer" src="/icons/social-icons/ig.svg" width={40} height={40} alt={ticons("Footer.ins")} />
            </div>
        </section>
    )
}