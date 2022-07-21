import React from 'react';
import Delivery from '../img/delivery.png'
import hero from '../img/hero.png'
const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 gap-2 md:grid-cols-2 sm:grid-cols-2'>
        <div className='flex flex-col items-center justify-center gap-6 py-2 md:items-start '>
           <div className='flex items-center justify-center gap-2 px-4 py-1 bg-orange-100 rounded-full'>
            <p className='text-base font-semibold text-orange-500'>Bike Delivery</p>
                <div className='w-6 h-6 overflow-hidden bg-white rounded-full shadow-xl'>
                    <img src={Delivery} alt="Delivery" className='object-contain w-full h-full'/>
                </div>
           </div>
            <p className='text-[2.5rem] md:text-[4rem] font-bold tracking-wide text-headingColor'>
                The Fastest Delivary in <span className='text-orange-500 text-[3rem] md:text-[4.5rem]'>Your city</span>
            </p>
            <p className='text-base text-center text-textColor md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam perferendis nulla ducimus expedita iusto non nisi obcaecati ea vero? Libero eum error odit voluptatibus explicabo iure labore, aliquam aut?</p>
            <div className='flex gap-2'>
            <button type="button" className="inline-block px-6 py-2 border-2 border-orange-500 text-orange-500 font-medium text-sm leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">order</button>
            <button type="button" className="inline-block px-6 py-2 border-2 border-orange-500 text-orange-500 font-medium text-sm  leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">see all products</button>
            </div>
        </div>
        <div className='flex min-h-[50%] items-center justify-center '>
            <img src={hero} alt="" className='lg:max-w-[75%] md:max-w-full'/>
        </div>
    </section>
    );
};

export default HomeContainer;