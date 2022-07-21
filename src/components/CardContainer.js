import React  from 'react';
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion"
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getFoods } from '../redux/foodsSlice';
const CardContainer = ({flag}) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getFoods())
    },[])

    const foodsSlice = useSelector((state) => state.foodsSlice);
    const fruitsArry = foodsSlice.foods.filter(food =>food.catagory.stringValue === "fruits");
    console.log(fruitsArry)
    return (
        <div className={`${flag? 'my-12 w-full overflow-x-scroll bg-rowBg flex justify-start gap-4 ': 'my-12 w-full bg-rowBg overflow-x-hidden flex-wrap flex justify-center gap-4'}`}>
                {/* fruits items */}
                {
                   !foodsSlice.isLoding && fruitsArry && fruitsArry.map(fruits =>(

                    <div className='h-auto p-2 my-12 rounded-lg shadow-lg bg-cardOverlay w-340 min-w-[300px] md:min-w-[340px]'>
                        <div class="flex items-center  justify-between w-full">
                            <motion.img whileHover={{scale: 1.2}} src={fruits.imageUrl.stringValue} className='w-40 h-40 -mt-8 drop-shadow-xl '/>
                            
                            <motion.div whileTap={{scale: 0.90}} className='p-2 bg-red-500 rounded-full'>
                                <MdShoppingBasket className='text-xl text-white'/>
                            </motion.div>
                        </div>
                        <div className='mr-3 text-end'>
                            <h5 class=" text-lg text-textColor font-medium">{fruits.title.stringValue}</h5>
                            <p class="text-gray-500 md:text-lg text-base">
                            calories : {fruits.calories.stringValue}
                            </p>
                            <p class="text-gray-700 text-lg font-semibold">
                                <span className='text-red-500'>$</span>{fruits.price.stringValue}
                            </p>
                        </div>
                    </div>

                   ))
                }
        </div>
    );
};

export default CardContainer;