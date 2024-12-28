import React from 'react';
import Direction from '/src/assets/Direction.png';
import Arrow from '/src/assets/Arrow.png';
import Arrow3 from '/src/assets/Arrow 3.png';
import { useFetchContext } from '../../contexts/FetchContext';
interface Product {
    id: number;
    name: string;
    address: string;
    images: string[];
    day_pass_price: number;
}

const Products: React.FC = () => {
    const { data, error, loading } = useFetchContext<Product[]>();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className='px-5 lg:px-[7.5rem] max-md:mb-12 mb-20'>
            <h2 className='mb-10 md:visible max-md:hidden'>Our Space Overview</h2>
            <h2 className='mb-[1.875rem] md:hidden max-md:visible flex'>Our Spaces <img src={Arrow3} alt="Arrow" className='ml-auto my-auto' /></h2>

            <div className='md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-[2.813rem] flex flex-wrap gap-4'>
            {data?.map(item => (
                <div className='border border-white rounded-lg py-4 px-3 bg-white md:w-[22.625rem] w-80 max-md:mx-auto md:even:ml-auto' key={item.id}>
                    <div className='flex justify-between'>
                        <h3 className='text-[1.125rem] leading-[1.375rem] max-w-[12.875rem] mb-auto md:text-xl md:leading-6 font-semibold md:max-w-[14.875rem]'>{item.name}</h3>
                        <div className='md:h-[3.25rem] md:w-[3.25rem] h-11 w-11 p-2 rounded-md bg-gray-100 border-gray-200 text-center mb-[1.125rem]'>
                            <img src={Direction} alt="Direction" className='max-sm:h-4 mx-auto md:mb-2' />
                            <span className='font-medium text-[0.5rem] text-gray-300'>6 Kms</span>
                        </div>
                    </div>
                    <img src={`https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/${item.images[0]}`} alt={item.name} className='rounded-md md:w-[21.625rem] md:max-h-[12.625rem] w-[18.5rem] h-[10.938rem] mb-[1.375rem]' />

                    <div className='flex justify-between gap-3'>
                        <button className='rounded-md px-3 max-sm:px-2 py-2 bg-gray-100 border-[0.5px] border-gray-200 h-[4.125rem] grow'>
                            <span className='flex justify-between'>
                                <span className='inline-block'>
                                    <span className='block font-medium text-xs leading-[0.908rem] text-[#65624C] mb-auto md:text-sm'>Day Pass</span>
                                    <span className='block font-semibold md:text-xl text-[1.125rem] leading-6 mt-auto'>₹ {item.day_pass_price}<span className='font-medium text-heading text-xs leading-[0.875rem]'>/ Day</span></span>
                                </span>
                                <img src={Arrow} alt="Arrow" className='inline-block my-auto'/>
                            </span>
                        </button>
                        <button className='rounded-md px-3 max-sm:px-2 py-2 bg-primary-300 border-[0.5px] border-primary-400 h-[4.125rem] grow'>
                            <span className='font-medium text-[0.5rem] leading-[0.625rem] text-[#FFFDF7] bg-heading p-1 mt-[-1.2rem] ml-[-1.2rem] absolute'>20% Discount</span>
                            <span className='flex justify-between'>
                                <span className='inline-block'>
                                    <span className='block font-medium text-xs leading-[0.908rem] text-[#514D2D] mb-auto md:text-sm'>Bulk Pass</span>
                                    <span className='block font-semibold md:text-xl text-[1.125rem] leading-6 mt-auto'>₹ {item.day_pass_price * 8}<span className='font-medium text-heading text-xs leading-[0.875rem]'>/ 10 Days</span></span>
                                </span>
                                <img src={Arrow} alt="Arrow" className='inline-block my-auto'/>
                            </span>
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Products;