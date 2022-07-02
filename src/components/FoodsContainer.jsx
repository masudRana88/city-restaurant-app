import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFoods } from '../redux/foodsSlice';


const FoodsContainer = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getFoods())
    },[])
    return (
        <div className='flex flex-col'>
            <h2>Our Fresh & Healthy Fruits</h2>
        </div>
    );
};

export default FoodsContainer;