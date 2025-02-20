export default function ContactsFomContainer() {
    return (
        <section className="flex justify-center mb-[1000px]">
            <div className="max-w-[1480px] bg-[url('/images/contact-forma-bg.jpg')] w-full flex justify-center py-10">
                <div className="max-w-[1090px]  flex gap-5">
                    <div className="w-1/2">
                        <h3 className="mb-5">Свяжитесь с нами</h3>
                        <p className="mb-8">Остались вопросы или нужна помощь с бронированием? Заполните форму, и мы свяжемся с вами в ближайшее время!</p>
                        <h4 className="mb-5">По любым вопросам</h4>
                        <a className="mb-3" href="mailto:help@domename.ru">help@domename.ru</a>
                        <a className="mb-8" href="tel:+79999999999">Задать вопрос консультанту</a>
                        <p className="">Мы на связи 24/7 и готовы помочь вам организовать комфортное путешествие!</p>
                    </div>
                    <div className="w-1/2">
                        <div className=" bg-[#F7E8C6] flex flex-col justify-center px-[69px] py-[30px]">
                            <input className="h-[50px] mb-[20px]" type="text" />
                            <input className="h-[50px] mb-[20px]" type="text" />
                            <input className="h-[50px] mb-[44px]" type="text" />
                            <button className=""></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}