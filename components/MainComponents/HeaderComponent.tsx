import Image from "next/image";
import Link from "next/link";

export default function HeaderComponent() {
    return (
        <div className="w-full h-[70px] bg-[#fff] flex justify-center px-[15px] relative">
            <Image className="absolute left-0 ml-4" src="/icons/header-icons/logo.svg" width={137} height={70} alt=""></Image>
            <div className="w-[1070px] flex items-center justify-between">
                <nav>
                    <ul className="flex items-center">
                        <li className="mr-12"><Link href="#">Главная</Link></li>
                        <li className="mr-12"><Link href="#">Города</Link></li>
                        <li className="mr-12"><Link href="#">Популярные маршруты</Link></li>
                        <li className=""><Link className="flex items-center " href="#"><Image className="mr-2" src="/icons/header-icons/excursionsLogo.svg"
                            width={35}
                            height={35}
                            alt="" />Экскурсии</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center gap-10">
                    <div className="flex justify-start items-center gap-5">
                        <Image src='/icons/social-icons/wa.svg' width={40} height={40} alt="" />
                        <Image src='/icons/social-icons/tg.svg' width={40} height={40} alt="" />
                        <Image src='/icons/social-icons/ig.svg' width={40} height={40} alt="" />
                    </div>
                    <div className="bg-[#fff] border-[1px] border-[DFE2E6] shadow-[0px_0px_2px_1px_rgba(55,63,71,0.05)] px-9 py-3 rounded-[5px]">Войти</div>
                </div>

            </div>
        </div>
    );
}