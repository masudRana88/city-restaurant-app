import i1 from '../img/i1.png'
import f1 from '../img/f1.png'
import c3 from '../img/c3.png'
import fi1 from '../img/fi1.png'
import { MdFastfood } from "react-icons/md";
export const heroData = [
    {id: 1, name : 'Icecream', dep: 'Cholate & vanilla', price: 5.35, imageSrc : i1},
    {id: 2, name : 'Strawberries', dep: 'Fresh Straberry', price: 10.25, imageSrc : f1},
    {id: 3, name : 'Chicken Kebab', dep: 'Mixed kebab plate', price: 8.25, imageSrc : c3},
    {id: 4, name : 'Fish kebab', dep: 'Mixed Fish Kebab', price: 5.35, imageSrc : fi1}
]

export const catagories = [
    {
        id : 1,
        name : "Chicken",
        urlParamName : 'chicken',
        icon: <MdFastfood className={`text-xl text-gray-200  md:text-3xl group-hover:text-red-500`}/>
    },
    {
        id : 2,
        name : "Curry",
        urlParamName : 'curry',
        icon: <MdFastfood className='text-xl text-gray-200 md:text-3xl group-hover:text-red-500'/>
    },
    {
        id : 3,
        name : "Fish",
        urlParamName : 'fish',
        icon: <MdFastfood className='text-xl text-gray-200 md:text-3xl group-hover:text-red-500'/>
    },
    {
        id : 4,
        name : "Fruits",
        urlParamName : 'fruits',
        icon: <MdFastfood className='text-xl text-gray-200 md:text-3xl group-hover:text-red-500'/>
    },
    {
        id : 5,
        name : "Icecreams",
        urlParamName : 'icecreams',
        icon: <MdFastfood className='text-xl text-gray-200 md:text-3xl group-hover:text-red-500'/>
    },
    {
        id : 6,
        name : "Rice",
        urlParamName : 'rice',
        icon: <MdFastfood className='text-xl text-gray-200 md:text-3xl group-hover:text-red-500'/>
    },
    {
        id : 7,
        name : "Soft Drinks",
        urlParamName : 'drinks',
        icon: <MdFastfood className='text-xl text-gray-200 md:text-3xl group-hover:text-red-500'/>
    },
]