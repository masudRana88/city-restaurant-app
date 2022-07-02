import React from 'react';
import Delivery from '../img/delivery.png'
import heroBg from '../img/heroBg.png'
import hero from '../img/hero.png'
import { heroData } from '../utils/data';
const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 gap-2 md:grid-cols-2 sm:grid-cols-2'>
{/* Left section */}
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
            <button type="button" class="inline-block px-6 py-2 border-2 border-orange-500 text-orange-500 font-medium text-sm leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">order</button>
            <button type="button" class="inline-block px-6 py-2 border-2 border-orange-500 text-orange-500 font-medium text-sm  leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">see all products</button>
            </div>
        </div>
{/* Right section */}
        {/* <div className='relative flex items-center py-2 '>
            
            <img 
            src={heroBg}
            className="w-full ml-auto h-420 lg:w-auto lg:h-650 "
            alt="" 
            />
            <div className="absolute top-0 left-0 flex flex-wrap items-center justify-center w-full h-full gap-4 mt-10 lg:mt-5">
                { heroData &&
                    heroData.map(card=>(
                        <div className='flex flex-col items-center justify-center p-4 lg:w-190 bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg' key={card.id}>
                            <img
                                src={card.imageSrc}
                                className="w-20 -mt-10 lg:w-40 lg:-mt-20 "
                                alt="I1"
                            />
                            <p className='mt-2 text-base font-semibold lg:text-xl lg:mt-4 text-textColor'>{card.name}</p>

                            <p className='my-1 lg:text-sm text-[12px] font-semibold lg:my-3 text-lightTextGray'>{card.dep}</p>

                            <p className='text-sm font-semibold text-headingColor'>
                                <span className='text-red-400'>$</span> {card.price}
                            </p>
                        </div>
                    ))
                }
                
            </div>
        </div> */}
        <div className='flex items-center justify-center p-0 lg:p-10'>
            <img src={hero} alt="" className='w-full h-full'/>
        </div>
    </section>
    );
};

export default HomeContainer;