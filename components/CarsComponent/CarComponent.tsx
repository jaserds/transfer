import { Link } from "@/i18n/navigation";
import { ITransferCars } from "@/lib/types";
import Image from "next/image";


interface ICarComponentProps {
    carData: ITransferCars;
    routeData: {
        id: string;
        toRoute: string;
        description: string;
        imageUrl: string;
        inRoute: string;
        price: number;
    };
}

export default function CarComponent({ carData, routeData }: ICarComponentProps) {
    return (
        <div className="shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] pb-24 bg-[#fff] w-[500px] rounded-[10px] mx-auto relative">
            <div className="flex px-5 pt-[20px] pb-[37px] gap-[30px]">
                <div className="max-w-[215px]">
                    <Image className="mb-[10px]" src={carData.imageUrl} width={215} height={95} alt="" />
                    <div className="bg-[#F6F7F8] rounded-[5px] text-[#6C7C8C]">
                        <p className="py-1 px-3 text-[13px] text-center">
                            {carData.cars}
                        </p>
                    </div>
                </div>
                <div className="max-w-[199px]">
                    <h3 className="font-rubik text-[#373F47] text-[28px] mb-[15px] font-bold">{carData.name}</h3>
                    <div className="flex gap-[20px] text-[18px] text-[#373F47] font-rubik font-bold mb-[20px]">
                        <div className="flex gap-[7px]">
                            <Image src={"/icons/car-icons/car-qty-person.svg"} width={24} height={24} alt="" />
                            <span>{carData.qtyPerson}</span>
                        </div>
                        <div className="flex gap-[7px]">
                            <Image src={"/icons/car-icons/car-bag.svg"} width={24} height={24} alt="" />
                            <span>{carData.qtyBags}</span>
                        </div>
                    </div>
                    <div className="flex gap-[5px] mb-[10px]">
                        <Image src={"/icons/car-icons/car-ex-order.svg"} width={20} height={20} alt="" />
                        <span className="text-[#6C7C8C] text-[13px]">Бесплатная отмена заказа</span>
                    </div>
                    <div className="flex gap-[5px]">
                        <Image src={"/icons/car-icons/car-time.svg"} width={20} height={20} alt="" />
                        <span className="text-[#6C7C8C] text-[13px]">Бесплатная отмена заказа</span>
                    </div>
                </div>
            </div>
            <div className="bg-[#292929] py-[29px] px-[27px] flex justify-between rounded-b-[10px] absolute bottom-0 w-full">
                <p className="text-[28px] text-white font-rubik font-bold">{carData.price.toLocaleString("ru-RU")} RUB</p>
                <Link href={
                    `/booking?rid=${routeData.id}&inRoute=${routeData.inRoute}&toRoute=${routeData.toRoute}&price=${routeData.price}&name=${carData.name}&qtyPerson=${carData.qtyPerson}&qtyBags=${carData.qtyBags}`
                }
                    className="bg-[#F9AC1A] text-white py-[13px] px-[15px] rounded-[5px]">Забронировать</Link>
            </div>
        </div>
    )
}