
import { Rubik } from 'next/font/google';
import TransferComponent from './TransferComponent';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '700', '900'] });

const TransfersContainerComponent = () => {
    return (
        <section className='flex flex-col items-center mt-[120px] mb-[120px]'>
            <div className="px-[10px]">
                <h2 className={`text-[#383F47] ${rubik.className} text-4xl font-semibold text-center mb-[70px]`} >Трансферы</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[50px] justify-center">привет
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