import CarComponent from "./CarComponent";

export default function CarsComponentContainer() {
    return (
        <section className="px-4 mb-[120px] mt-[120px]">
            <div className="flex flex-col items-center mb-[72px]">
                <h2 className="text-4xl text-[#383F47] font-semibold font-[rubik] mb-[20px]">Трансфер Мальпенса - Ницца</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-[1090px] mx-auto gap-[50px]">
                <CarComponent />
                <CarComponent />
                <CarComponent />
                <CarComponent />
                <CarComponent />
            </div>

        </section>
    )
}