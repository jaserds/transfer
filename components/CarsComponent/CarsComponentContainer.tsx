import CarComponent from "./CarComponent";

interface TransferCar {
    id: string;
    name: string;
    imageUrl: string;
    cars: string;
    qtyPerson: number;
    qtyBags: number;
    price: number;
}

interface CarsComponentContainerProps {
    onlyTransferCars: TransferCar[];
}

export default function CarsComponentContainer({ onlyTransferCars }: CarsComponentContainerProps) {

    return (
        <section className="px-4 mb-[120px] mt-[120px]">
            <div className="flex flex-col items-center mb-[72px]">
                <h2 className="text-4xl text-[#383F47] font-semibold font-[rubik] mb-[20px]">Трансфер Мальпенса - Ницца</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-[1090px] mx-auto gap-[50px]">
                {onlyTransferCars.map((car) => <CarComponent key={car.id} carData={car} />)}
            </div>

        </section>
    )
}