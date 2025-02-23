import Image from "next/image";

const TransferComponent = () => {
    return (
        <div className="relative min-w-[290px] max-w-[330px] min-h-[311px] max-h-[351px] pt-[10px] px-[10px] shadow-[0px_0px_10px_2px_rgba(73,73,73,0.10)] bg-white rounded-[10px]">
            <p className="absolute top-[40px] right-[40px] text-white text-3xl font-semibold font-['Rubik'] leading-[15px]"></p>
            <Image className="brightness-13 mb-[20px]" src="/images/italy.png" width={330} height={351} alt="" />
            <div className="flex pl-[10px] pb-[13px]">
                <Image src="/icons/transfer-icons/transfer-route-icon.svg" width={20} height={20} alt="" />
                <p className="text-base font-semibold text-[#373F47] ml-[5px]">91 трансфер</p>
            </div>
        </div>
    );
};

export default TransferComponent;