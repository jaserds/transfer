import Image from "next/image";

export default function Footer() {
    return (
        <section className="bg-[#292929] h-[340px] flex flex-col items-center">
            <div className="mt-[40px] mb-[20px]">
                <Image src="/icons/header-icons/logo-footer.svg" width={137} height={70} alt="" />
            </div>
            <ul className="flex max-w-[575px] px-5 justify-between gap-[46px] text-[#fff] mb-[120px]">
                <li className="cursor-pointer">Главная</li>
                <li className="cursor-pointer">Города</li>
                <li className="cursor-pointer">Популярные маршруты</li>
                <li className="cursor-pointer">Экскурсии</li>
            </ul>
            <div className="flex justify-center gap-5">
                <Image className="cursor-pointer" src="/icons/social-icons/wa.svg" width={40} height={40} alt="" />
                <Image className="cursor-pointer" src="/icons/social-icons/tg.svg" width={40} height={40} alt="" />
                <Image className="cursor-pointer" src="/icons/social-icons/ig.svg" width={40} height={40} alt="" />
            </div>
        </section>
    )
}