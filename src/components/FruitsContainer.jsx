import React from 'react';

import { motion } from "framer-motion"
import { MdChevronLeft,  MdChevronRight} from "react-icons/md";
import CardContainer from './CardContainer';
import { useRef } from 'react';


const FruitsContainer = () => {
    const cardref = useRef()
    const scroll = (scrollOfset)=>{
        cardref.current.scrollLeft += scrollOfset
    }
    return (
        <section className='w-full my-6'>
            <div className='flex items-center justify-between w-full '>
                <p className='relative text-2xl font-semibold capitalize transition-all duration-100 ease-in-out text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-500'>
                    Our Fresh & Healthy Fruits
                </p>
                <div className='flex gap-2 ms:hidden'>
                    <motion.button whileTap={{scale: 0.90}} className='flex items-center justify-center w-8 h-8 bg-orange-300 rounded-md hover:bg-orange-500 hover:shadow-lg'>
                        <MdChevronLeft className='text-lg text-white ' onClick={()=>scroll(-400)}/>
                    </motion.button>
                    <motion.button whileTap={{scale: 0.90}} className='flex items-center justify-center w-8 h-8 bg-orange-300 rounded-md hover:bg-orange-500 hover:shadow-lg'>
                        <MdChevronRight className='text-xl text-white 'onClick={()=>scroll(400)}/>
                    </motion.button>
                </div>
            </div>
            <CardContainer ref={cardref} flag={true} catagory={"fruits"}/>
        </section>
    );
};

export default FruitsContainer;