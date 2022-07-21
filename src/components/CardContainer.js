import React, { useRef }  from 'react';
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion"
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getFoods } from '../redux/foodsSlice';
import Loader from './Loader';
const CardContainer = React.forwardRef((props,ref) => {
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getFoods())
    },[])
    const foodsSlice = useSelector((state) => state.foodsSlice);
    const fruitsArry = foodsSlice.foods.filter(food =>food.catagory.stringValue === props.catagory);
    return (
        <div ref={ref} className={`${props.flag? 'my-12 w-full overflow-x-scroll bg-rowBg flex justify-start gap-4 scrollbar-none scroll-smooth': 'my-12 w-full bg-rowBg overflow-x-hidden flex-wrap flex justify-center gap-4'}`}>
                {/* fruits items */}
                {
                   !foodsSlice.isLoding && fruitsArry ? fruitsArry.map(fruits =>(

                    <div key={fruits.id.integerValue} className='h-auto p-2 my-12 rounded-lg shadow-lg bg-cardOverlay w-340 min-w-[300px] md:min-w-[340px]'>
                        <div className="flex items-center justify-between w-full">
                            <motion.img whileHover={{scale: 1.2}} src={fruits.imageUrl.stringValue} className='w-40 h-40 -mt-8 drop-shadow-xl '/>
                            
                            <motion.div whileTap={{scale: 0.90}} className='p-2 bg-red-500 rounded-full'>
                                <MdShoppingBasket className='text-xl text-white'/>
                            </motion.div>
                        </div>
                        <div className='mr-3 text-end'>
                            <h5 className="text-lg font-medium text-textColor">{fruits.title.stringValue}</h5>
                            <p className="text-base text-gray-500 md:text-lg">
                            calories : {fruits.calories.stringValue}
                            </p>
                            <p className="text-lg font-semibold text-gray-700">
                                <span className='text-red-500'>$</span>{fruits.price.stringValue}
                            </p>
                        </div>
                    </div>

                   )):
                   <div className='flex items-center justify-center w-full'>
                        <Loader big={true}/>
                   </div>
                }
        </div>
    );
});

export default CardContainer;