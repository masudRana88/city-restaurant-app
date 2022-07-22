import React from 'react';
import {catagories} from '../utils/data'
const FoodsMenu = ({setCatagory,catagory}) => {
    console.log(catagory)
    
    return (
        <div className='flex items-center w-auto gap-8 mt-10 overflow-x-scroll lg:justify-center scrollbar-none scroll-smooth'>
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
                    <div className={`group ${catagory === item.urlParamName ? "bg-red-600" : "bg-gray-50"} flex flex-col items-center justify-center h-32 md:h-40 md:w-[8rem] min-w-[6rem] transition-all ease-in-out duration-300 rounded shadow-lg   hover:-mt-2 hover:bg-red-600 `} onClick={()=>setCatagory(item.urlParamName)}>
                        <div className='flex items-center justify-center p-2 bg-red-600 rounded-full md:p-3 group-hover:bg-white'>
                            {item.icon}
                        </div>
                        <p className={`mt-4 ${catagory === item.urlParamName ? "text-white" : "text-lightTextGray"} font-semibold  group-hover:text-white`}>
                            {item.name}
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

export default FoodsMenu;