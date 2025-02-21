import Image from "next/image";

export default function ContactsFomContainer() {


    return (
        <section className="flex justify-center mb-[120px]">
            <div className="max-w-[1480px] bg-[linear-gradient(rgba(250,243,225,0.39),rgba(250,243,225,0.3)),url('/images/contact-forma-bg.jpg')] bg-cover bg-center w-full flex justify-center py-10 rounded-[50px]">
                <div className="max-w-[1090px]  flex gap-5">
                    <div className="w-1/2 pl-5 flex flex-col">
                        <h3 className="mb-5 font-bold text-[22px] text-[#373F47]">Свяжитесь с нами</h3>
                        <p className="mb-8 text-[18px] text-[#373F47]">Остались вопросы или нужна помощь с бронированием? Заполните форму, и мы свяжемся с вами в ближайшее время!</p>
                        <h4 className="mb-5 font-bold text-[18px] text-[#373F47]">По любым вопросам</h4>
                        <a className="mb-3 text-[#373F47] flex items-center gap-[10px]" href="mailto:help@domename.ru"><Image src="/icons/contacts-form/phone-icon.svg" width={20} height={20} alt="" />help@domename.ru</a>
                        <a className="mb-8 text-[#373F47] flex items-center gap-[10px]" href="tel:+79999999999"><Image src="/icons/contacts-form/mail-icon.svg" width={20} height={20} alt="" />Позвоните нам + 7 (934)-22-33</a>
                        <p className="">Мы на связи 24/7 и готовы помочь вам организовать комфортное путешествие!</p>
                    </div>
                    <div className="w-1/2 px-5">
                        <form className=" bg-[#F7E8C6] flex flex-col justify-center px-[69px] py-[30px] rounded-[10px]">
                            <label htmlFor="contactFormName" className="mb-[5px] text-[#373F47] text-[18px]">Имя</label>
                            <input id="contactFormName" className="h-[50px] mb-[20px] rounded-[10px] px-[10px] outline-none border-none focus:outline-none focus:ring-2 focus:ring-[#F9AC1A] focus:border-[#F9AC1A] transition-shadow" type="text" />
                            <label htmlFor="contactFormPhone" className="mb-[5px] text-[#373F47] text-[18px]">Телефон</label>
                            <input id="contactFormPhone" className="h-[50px] mb-[20px] rounded-[10px] px-[10px] outline-none border-none focus:outline-none" type="text" />
                            <label htmlFor="contactFormText" className="mb-[5px] text-[#373F47] text-[18px]">Вопрос</label>
                            <textarea id="contactFormText" className="h-[170px] mb-[44px] rounded-[10px] px-[10px] outline-none border-none focus:outline-none pt-[10px]" />
                            <button className="rounded-[10px] bg-[#26A65B] text-[#fff] max-w-[176px] h-12 self-center px-11">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}