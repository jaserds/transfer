"use client"

import { Link } from "@/i18n/navigation";
import { useSignOut } from "@/lib/auth/use-sign-out";
import { useAppSession } from "@/lib/use-app-session";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { signIn } from "next-auth/react";
import Image from "next/image";
import LocaleSwitcher from "../ui/other/LocaleSwitcher";
import { useTranslations } from "next-intl";
import { useState } from "react";


export default function HeaderComponent() {

    const session = useAppSession();
    const signOut = useSignOut();
    const t = useTranslations('AppTraslation');
    const ticons = useTranslations('imagesAlt');
    const [menuOpen, setMenuOpen] = useState(false);



    return (
        <div className="w-full h-[70px] bg-[#fff] flex lg:justify-center max-md:justify-between md:justify-between px-[15px] relative">

            <Image className="ml-4 mr-8" src="/icons/header-icons/logo.svg" width={137} height={70} alt={ticons("HeaderComponent.logo")}></Image>

            <div className="max-w-[1070px] flex items-center justify-between max-md:hidden md:hidden lg:flex">
                <nav>
                    <ul className="flex items-center">
                        <li className="mr-12 text-[#373F47]"><Link href="/">{t("components.HeaderComponent.homeLink")}</Link></li>
                        <li className="mr-12 text-[#373F47]"><Link href="/cities">{t("components.HeaderComponent.citiesLink")}</Link></li>
                        <li className="mr-12 text-[#373F47]"><Link href="/popular-routes">{t("components.HeaderComponent.popularRoutesLink")}</Link></li>
                        {session.data?.user.role === "ADMIN" && <li className="mr-12 text-[#373F47]"><Link href="/admin-panel">АП</Link></li>}
                        {/* <li className=""><Link className="flex items-center " href="#"><Image className="mr-2" src="/icons/header-icons/excursionsLogo.svg"
                            width={35}
                            height={35}
                            alt="" />Экскурсии</Link></li> */}
                    </ul>
                </nav>
                <div className="flex items-center gap-10">
                    <div className="flex justify-start items-center gap-5">
                        <Image src='/icons/social-icons/wa.svg' width={40} height={40} alt={ticons("HeaderComponent.wa")} />
                        <Image src='/icons/social-icons/tg.svg' width={40} height={40} alt={ticons("HeaderComponent.telegram")} />
                        <Image src='/icons/social-icons/ig.svg' width={40} height={40} alt={ticons("HeaderComponent.ins")} />
                        <LocaleSwitcher />
                    </div>
                    {session.status === 'loading' && <div className="bg-gray-200 animate-pulse px-9 py-3 rounded-[5px] w-[100px] h-[40px]"></div>}
                    {session.status === "unauthenticated" ?
                        <div className="bg-[#fff] text-[#373F47] border-[1px] border-[#DFE2E6] shadow-[0px_0px_2px_1px_rgba(55,63,71,0.05)] px-9 py-3 rounded-[5px] cursor-pointer"
                            onClick={() => signIn()}
                        >{t("components.HeaderComponent.signIn")}</div>
                        :
                        session.status === "authenticated" &&
                        <div className="bg-[#fff] text-[#373F47] border-[1px] border-[#DFE2E6] shadow-[0px_0px_2px_1px_rgba(55,63,71,0.05)] px-9 py-3 rounded-[5px] cursor-pointer"
                            onClick={() => signOut.signOut()}
                        >{t("components.HeaderComponent.signOut")}</div>
                    }

                </div>

            </div>
            <button className="lg:hidden text-gray-700 text-2xl px-4" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}
            </button>
            <nav className={`absolute left-0 top-[70px] w-full bg-white shadow-md border-t border-gray-200
                    ${menuOpen ? 'animate-expandHeight opacity-1 z-50' : 'animate-expandHeightOut opacity-0 z-[-50]'}
                    overflow-hidden
                    transition-all duration-700
                `}>
                <ul className="flex flex-col items-start p-4 space-y-4">
                    <li><Link href="/" className="text-[#373F47] block py-2" onClick={() => setMenuOpen(false)}>{t("components.HeaderComponent.homeLink")}</Link></li>
                    <li><Link href="/cities" className="text-[#373F47] block py-2" onClick={() => setMenuOpen(false)}>{t("components.HeaderComponent.citiesLink")}</Link></li>
                    <li><Link href="/popular-routes" className="text-[#373F47] block py-2" onClick={() => setMenuOpen(false)}>{t("components.HeaderComponent.popularRoutesLink")}</Link></li>
                    {session.data?.user.role === "ADMIN" && (
                        <li><Link href="/admin-panel" className="text-[#373F47] block py-2" onClick={() => setMenuOpen(false)}>АП</Link></li>
                    )}
                    <li className="flex items-center gap-4">
                        <Image src='/icons/social-icons/wa.svg' width={30} height={30} alt={ticons("HeaderComponent.wa")} />
                        <Image src='/icons/social-icons/tg.svg' width={30} height={30} alt={ticons("HeaderComponent.telegram")} />
                        <Image src='/icons/social-icons/ig.svg' width={30} height={30} alt={ticons("HeaderComponent.ins")} />
                    </li>
                    <li>
                        <LocaleSwitcher />
                    </li>
                    <li>
                        {session.status === "unauthenticated" ? (
                            <button className="w-full text-left text-[#373F47] border border-gray-300 px-4 py-2 rounded-md"
                                onClick={() => { signIn(); setMenuOpen(false); }}
                            >{t("components.HeaderComponent.signIn")}</button>
                        ) : (
                            session.status === "authenticated" && (
                                <button className="w-full text-left text-[#373F47] border border-gray-300 px-4 py-2 rounded-md"
                                    onClick={() => { signOut.signOut(); setMenuOpen(false); }}
                                >{t("components.HeaderComponent.signOut")}</button>
                            )
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}