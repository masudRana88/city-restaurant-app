import React from 'react';
import { motion } from "framer-motion"
import {catagories} from '../utils/data'
const FoodsMenu = ({setCatagory,catagory}) => {
    console.log(catagory)
    
    return (
        <motion.div  className='flex items-center w-auto gap-8 mt-10 overflow-x-scroll cursor-pointer lg:justify-center scrollbar-none scroll-smooth'>
            {/* <div className='flex flex-col items-center justify-center h-32 md:h-40 md:w-[8rem] min-w-[6rem] transition-all ease-in-out duration-300 rounded shadow-lg  bg-gray-50 hover:-mt-2 hover:bg-red-600 my-card-manu-hover' onClick={()=> setCatagory('chicken')}>
                        <div className='flex items-center justify-center p-2 bg-red-600 rounded-full md:p-3 my-card-manu-circle'>
                            <MdFastfood className='text-xl text-gray-200 md:text-3xl my-card-manu-icon'/>
                        </div>
                        <p className='mt-4 font-semibold text-lightTextGray'>
                            Chicken
                        </p>
                    </div> */}
            {
                catagories.map(item=>(
                    <motion.div whileTap={{ scale: 0.9 }} className={`group ${catagory === item.urlParamName ? "bg-red-600" : "bg-gray-50"} flex flex-col items-center justify-center h-32 md:h-40 md:w-[8rem] min-w-[6rem] transition-all ease-in-out rounded shadow-lg  hover:bg-red-600 `} onClick={()=>setCatagory(item.urlParamName)}>
                        <div className={`flex ${catagory === item.urlParamName ? "bg-white" : "bg-red-600 group-hover:bg-white"} items-center justify-center p-2  rounded-full md:p-3 `}>
                            {catagory === item.urlParamName ? item.icon.t : item.icon.o}
                        </div>
                        <p className={`mt-4 ${catagory === item.urlParamName ? "text-white" : "text-lightTextGray group-hover:text-white"} font-semibold  `}>
                            {item.name}
                        </p>
                    </motion.div>
                ))
            }
        </motion.div>
    );
};

export default FoodsMenu;