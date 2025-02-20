import Accordion from "./Accordion";


export default function ContactAndFAQContainer() {
    return (
        <div className="flex justify-center items-center bg-gray-50 mb-[85] pb-[35px]">
            <div className="w-full p-4 max-w-[800px]">
                <h2 className="text-[#383F47] font-[rubik] text-4xl font-semibold text-center mb-[70px] mt-[70px]">Контакты и FAQ</h2>
                <Accordion
                    title="Как я могу забронировать трансфер?"
                    content="Описание, которое раскрывается при клике на заголовок или плюс."
                />
                <Accordion
                    title="Заголовок 2"
                    content="Как я могу проверить, успешно ли обработан мой заказ?"
                />
                <Accordion
                    title="Как мне найти своего водителя?"
                    content="Третье описание."
                />
                <Accordion
                    title="Что произойдет, если данне моего рейса изменятся иои он будет серьезно задержан?"
                    content="Третье описание."
                />
                <Accordion
                    title="Будет ли водитель нести мой багаж?"
                    content="Третье описание."
                />
            </div>
        </div>
    );
}