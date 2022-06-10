import React, { useState } from 'react';
import { MdShoppingBasket } from "react-icons/md";
import { motion } from 'framer-motion';

import Logo from "./../img/logo.png"
import Avatar from "../img/avatar.png"
import { Link } from 'react-router-dom';
import { singInWithGoogle } from '../Firebase/firebaseAuth';
import { useDispatch,useSelector } from 'react-redux';




const Header = () => {
    const dispatch = useDispatch()
    const {user,isLoding,error} = useSelector(state=> state.userSlice)
    // console.log(user.userInfo);
    const hendlLogin = async()=>{
        if(!user){
            await dispatch(singInWithGoogle())
        }
    } 
    return (
        <header className='fixed top-0 w-screen z-50  p-6 px-16'>
            {/* For dexktop ant tablate */}
            <div className='md:flex hidden w-full h-full '>
                {/* Logo */}
                <Link to={"/"} className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" className='w-8 object-cover'/>
                    <p className='text-headingColor text-xl font-bold'> City</p>
                </Link>
                {/* Menu */}
                <div className='flex justify-center w-full gap-8'>
                <ul className='flex items-center gap-8 ml-auto'>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </ul>
                {/* cart */}
                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'/>
                    <div className='absolute top-0 -right-2 w-5 h-5 bg-cartNumBg flex items-center justify-center rounded-full'>
                        <p className='text-white text-xs font-semibold '>3</p>
                    </div>
                </div>

                {/* user profile */}
                <div className='h-full flex justify-center items-center '>
                    <motion.img whileTap={{scale: 0.8}} src={user && user.userInfo ? user.userInfo.photoURL : Avatar} alt="user profile"  className='w-10 h-10 min-h-[40px] min-w-[40px] drop-shadow-lg cursor-pointer rounded-full' onClick={hendlLogin}/>
                </div>
                </div>
            </div>

            {/* For mobile */}
            <div className='md:hidden flex w-full h-full '>

            </div>
        </header>
    );
};

export default Header;