import React from 'react';
import Delivery from '../img/delivery.png'
import i1 from '../img/i1.png'
import c1 from '../img/c1.png'
import cu1 from '../img/cu1.png'
import di from '../img/d1.png'
import heroBg from '../img/heroBg.png'
const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 gap-2 md:grid-cols-2'>
{/* Left section */}
        <div className='flex flex-col items-center justify-center gap-6 py-2 md:items-start'>
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
            <button type='button' className='w-full px-4 py-2 transition-all duration-100 ease-in-out rounded-lg md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 hover:shadow-lg'>Order now</button>
        </div>
{/* Right section */}
        <div className='relative flex items-center flex-1 md:items-start'>
            {/* ------- hero img ------ */}
            <img 
            src={heroBg}
            className="w-full ml-auto h-600 lg:w-auto lg:h-650"
            alt="" 
            />
            {/* ---- CARD ---- */}
            <div className="absolute left-0 flex flex-wrap items-center justify-center w-full h-full gap-4 my-10 sm:mt-4 md:gap-2 sm:px-3 md:top-0 lg:px-32 card-warp">
               
                <div className='flex flex-col items-center justify-center p-4 lg:w-190 bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg'>
                    <img
                        src={i1}
                        className="w-20 -mt-10 lg:w-40 lg:-mt-20 "
                        alt="I1"
                    />
                    <p className='text-lg font-semibold text-textColor'>Icecream</p>
                    <p>Cholate & vanilla</p>
                </div>
                <div className='flex flex-col items-center justify-center p-4 lg:w-190 bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg'>
                    <img
                        src={c1}
                        className="w-20 -mt-10 lg:w-40 lg:-mt-20 "
                        alt="c1"
                    />
                    <p className='text-lg font-semibold text-textColor'>Icecream</p>
                    <p>Cholate & vanilla</p>
                </div>
                <div className='flex flex-col items-center justify-center p-4 lg:w-190 bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg'>
                    <img
                        src={cu1}
                        className="w-20 -mt-10 lg:w-40 lg:-mt-20 "
                        alt="cu1"
                    />
                    <p className='text-lg font-semibold text-textColor'>Icecreme</p>
                    <p>Cholate & vanilla</p>
                </div>
                <div className='flex flex-col items-center justify-center p-4 lg:w-190 bg-cardOverlay backdrop-blur-md rounded-3xl drop-shadow-lg'>
                    <img
                        src={di}
                        className="w-20 -mt-10 lg:w-40 lg:-mt-20 "
                        alt="di"
                    />
                    <p className='text-lg font-semibold text-textColor'>Icecream</p>
                    <p>Cholate & vanilla</p>
                </div>
                
            </div>
        </div>
    </section>
    );
};

export default HomeContainer;