import React from 'react';
import { useState } from 'react';
import CardContainer from './CardContainer';
import FoodsMenu from './FoodsMenu';

const FoodsContainer = () => {
    const [catagory, setCatagory] = useState('chicken')
    return (
        <section className='w-full my-6'>
            <p className='relative text-2xl font-semibold capitalize transition-all duration-100 ease-in-out text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-500'>
                Our Hot Dishes
            </p>
            <FoodsMenu catagory={catagory} setCatagory={setCatagory}/>
            <CardContainer flag={false} catagory={catagory}/>
        </section>
    );
};

export default FoodsContainer;