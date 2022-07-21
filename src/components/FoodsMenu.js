import React from 'react';
import { MdFastfood } from "react-icons/md";
const FoodsMenu = ({setCatagory,catagory}) => {
    console.log(catagory)
    
    return (
        <div className='flex flex-wrap items-center justify-center w-full gap-8 mt-10'>
            {/* chicken */}
            <div className='flex flex-col items-center justify-center h-40 w-[8rem] transition-all rounded shadow-lg  bg-gray-50 hover:-mt-2 hover:bg-red-600 hover-p-text-white' onClick={()=> setCatagory('chicken')}>
                <div className='flex items-center justify-center p-3 bg-red-600 rounded-full'>
                    <MdFastfood className='text-3xl text-gray-200'/>
                </div>
                <p className='mt-4 font-semibold text-lightTextGray'>
                    Chicken
                </p>
            </div>
            {/* Curry */}
            <div className='flex flex-col items-center justify-center h-40 w-[8rem] transition-all rounded shadow-lg bg-gray-50 hover:-mt-2 hover:bg-red-600 hover-p-text-white' onClick={()=> setCatagory('curry')}>
                <div className='flex items-center justify-center p-3 bg-red-600 rounded-full'>
                    <MdFastfood className='text-3xl text-gray-200'/>
                </div>
                <p className='mt-4 font-semibold text-lightTextGray'>
                Curry
                </p>
            </div>
            {/* Fish */}
            <div className='flex flex-col items-center justify-center h-40 w-[8rem] transition-all rounded shadow-lg bg-gray-50 hover:-mt-2 hover:bg-red-600 hover-p-text-white' onClick={()=> setCatagory('fish')}>
                <div className='flex items-center justify-center p-3 bg-red-600 rounded-full'>
                    <MdFastfood className='text-3xl text-gray-200'/>
                </div>
                <p className='mt-4 font-semibold text-lightTextGray'>
                Fish
                </p>
            </div>
            {/* Fruits */}
            <div className='flex flex-col items-center justify-center h-40 w-[8rem] transition-all rounded shadow-lg bg-gray-50 hover:-mt-2 hover:bg-red-600 hover-p-text-white' onClick={()=> setCatagory('fruits')}>
                <div className='flex items-center justify-center p-3 bg-red-600 rounded-full'>
                    <MdFastfood className='text-3xl text-gray-200'/>
                </div>
                <p className='mt-4 font-semibold text-lightTextGray'>
                Fruits
                </p>
            </div>
            {/* Icecreams */}
            <div className='flex flex-col items-center justify-center h-40 w-[8rem] transition-all rounded shadow-lg bg-gray-50 hover:-mt-2 hover:bg-red-600 hover-p-text-white' onClick={()=> setCatagory('icecreams')}>
                <div className='flex items-center justify-center p-3 bg-red-600 rounded-full'>
                    <MdFastfood className='text-3xl text-gray-200'/>
                </div>
                <p className='mt-4 font-semibold text-lightTextGray'>
                Icecreams
                </p>
            </div>
            {/* Rice */}
            <div className='flex flex-col items-center justify-center h-40 w-[8rem] transition-all rounded shadow-lg bg-gray-50 hover:-mt-2 hover:bg-red-600 hover-p-text-white' onClick={()=> setCatagory('rice')}>
                <div className='flex items-center justify-center p-3 bg-red-600 rounded-full'>
                    <MdFastfood className='text-3xl text-gray-200'/>
                </div>
                <p className='mt-4 font-semibold text-lightTextGray'>
                Rice
                </p>
            </div>
            {/* Soft Drinks */}
            <div className='flex flex-col items-center justify-center h-40 w-[8rem] transition-all rounded shadow-lg bg-gray-50 hover:-mt-2 hover:bg-red-600 hover-p-text-white' onClick={()=> setCatagory('drinks')}>
                <div className='flex items-center justify-center p-3 bg-red-600 rounded-full'>
                    <MdFastfood className='text-3xl text-gray-200'/>
                </div>
                <p className='mt-4 font-semibold text-lightTextGray'>
                Soft Drinks
                </p>
            </div>

        </div>
    );
};

export default FoodsMenu;