import FeaturesComponent from "./FeaturesComponent";


const WhyChooseUsContainer = () => {
    return (
        <section className="px-4 mb-[120px]">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl text-[#383F47] font-semibold font-[rubik] mb-[20px]">Почему выбирают нас?</h2>
                <h3 className="text-[22px] text-[#373F47] font-semibold mb-[60px] text-center">Выбирая нас, вы выбираете качество, безопасность и комфорт!</h3>
            </div>
            <FeaturesComponent />
        </section>
    )
}

export default WhyChooseUsContainer;