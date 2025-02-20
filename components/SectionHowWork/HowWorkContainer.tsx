

import Image from "next/image";


const howWorkData = [
    {
        image: '/icons/how-work/how-work-route.svg',
        title: 'Вы указываете маршрут и выбираете автомобиль',
        text: 'Укажите начальную и конечную точку маршрута, выберите тип автомобиля и оставьте свои контактные данные',
        alt: ''
    },
    {
        image: '/icons/how-work/how-work-check.svg',
        title: 'Подтверждаете свою поездку',
        text: 'После заполнения формы мы свяжемся с вами для уточнения деталей и подтверждения бронирования',
        alt: ''
    },
    {
        image: '/icons/how-work/how-work-driver.svg',
        title: 'Водитель встречает вас с табличкой в аэропорту',
        text: 'Водитель будет ждать вас в зоне прилета с именной табличкой, чтобы вам не пришлось искать транспорт',
        alt: ''
    }
]

const HowWorkContainer = () => {
    return (
        <section className="mb-[120px] px-5">
            <h2 className={`text-[#383F47] font-[rubik] text-4xl font-semibold text-center mb-[70px]`} >Как работает сервис</h2>
            <div className="max-w-[1090px] mx-auto flex justify-between gap-5" >
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