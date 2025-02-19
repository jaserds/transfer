import TransferComponent from './TransferComponent';


const TransfersContainerComponent = () => {
    return (
        <section className='flex flex-col items-center mt-[120px] mb-[120px]'>
            <div className="px-[10px]">
                <h2 className={`text-[#383F47] font-[rubik] text-4xl font-semibold text-center mb-[70px]`} >Трансферы</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[50px] justify-center">
                    <TransferComponent />
                    <TransferComponent />
                    <TransferComponent />
                    <TransferComponent />
                    <TransferComponent />
                    <TransferComponent />
                </div>
            </div>


        </section>
    );

};

export default TransfersContainerComponent;