import { useTranslations } from "next-intl";




export default function MainComponent({ children }: Readonly<{ children: React.ReactNode }>) {
    const t = useTranslations("AppTraslation");

    return (
        <div className="min-h-[500px] w-full bg-[url('/main-bg.png')] bg-cover bg-no-repeat bg-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative flex flex-col items-center max-w-[1060px] my-0 mx-auto">
                <h1 className={`
                    text-white 
                    text-4xl 
                    text-center 
                    mt-[60px] 
                    max-w-[800px] 
                    font-[rubik]
                    font-[600]
                    mb-[50px]
                    px-5
                    `}>
                    {t('components.MainComponent.title')}
                </h1>
                {children}
            </div>
        </div>
    );
}