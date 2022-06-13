import React, { useState } from 'react';
import { MdShoppingBasket,MdAdd,MdLogout ,MdOutlineLogin} from "react-icons/md";
import { motion } from 'framer-motion';

import Logo from "./../img/logo.png"
import Avatar from "../img/avatar.png"
import { Link } from 'react-router-dom';
import { singInWithGoogle } from '../Firebase/firebaseAuth';
import { useDispatch,useSelector } from 'react-redux';
import { createcontainer } from '../path';
import MainContainer from './MainContainer';
import { logOut } from '../redux/userSlice';




const Header = () => {
    const dispatch = useDispatch()
    const {user,isLoding,error} = useSelector(state=> state.userSlice)
    // console.log(user.userInfo);
    const [manu , setMane] = useState(false)

    const hendlLoginMd = async()=>{
        if(!user){
            await dispatch(singInWithGoogle())
        }
        else{
            setMane(!manu)
        }
    } 
    const hendlLoginSm = async() =>{
        if(!user){
            await dispatch(singInWithGoogle())
            setMane(!manu)
        }
    } 
    const hendleOpenManu = async()=>{
        setMane(!manu)
    }
    const handleLodOut =()=>{
        dispatch(logOut())
        setMane(!manu)
    }
    return (
        <header className='fixed top-0 w-screen z-50 md:p-6 md:px-16 p-3 px-5 bg-zinc-200'>
            {/* For dexktop ant tablate */}
            <div className='md:flex hidden w-full h-full '>
                {/* Logo */}
                <Link to={"/"} className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" className='w-8 object-cover'/>
                    <p className='text-headingColor text-xl font-bold'> City</p>
                </Link>
                {/* Menu */}
                <div className='flex justify-center w-full gap-8'>
                <motion.ul 
                    initial={{opacity:0 , x: -200}}
                    animate={{opacity:1 , x: 0}}
                    exit={{opacity:0 , x: -200}}
                className='flex items-center gap-8 ml-auto'>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </motion.ul>
                {/* cart */}
                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'/>
                    <div className='absolute top-0 -right-2 w-5 h-5 bg-cartNumBg flex items-center justify-center rounded-full'>
                        <p className='text-white text-xs font-semibold '>3</p>
                    </div>
                </div>

                {/* user profile */}
                <div className='h-full relative '>
                    
                    <motion.img whileTap={{scale: 0.8}} src={user && user.userInfo ? user.userInfo.photoURL : Avatar} alt="user profile"  className='w-10 h-10 min-h-[40px] min-w-[40px] drop-shadow-lg cursor-pointer rounded-full' onClick={hendlLoginMd}/>

                    {manu && (
                        <motion.div 
                        initial={{opacity: 0, scale: 0.6}} 
                        animate={{opacity: 1, scale: 1}} 
                        exit={{opacity: 0, scale: 0.6}} 
                        className='flex flex-col absolute top-11 -right-2 w-40 bg-gray-50 px-3 py-2 shadow-xl rounded-md'>
                        <Link to={createcontainer}>
                        <p className='flex px-2 py-2 items-center justify-center cursor-pointer gap-3 hover:bg-slate-200 transition-all duration-100 ease-out rounded'>New Item <MdAdd/> </p>
                        </Link>
                        <p className='flex px-2 py-2 items-center justify-center cursor-pointer gap-3 hover:bg-slate-200 transition-all duration-100 ease-out rounded' onClick={handleLodOut}>Log out <MdLogout/></p>
                    </motion.div>
                    )}
                </div>
                </div>
            </div>

            {/* For mobile */}
            <div className='md:hidden flex items-center justify-between w-full h-full'>
                {/* cart  */}
                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'/>
                    <div className='absolute top-0 -right-2 w-5 h-5 bg-cartNumBg flex items-center justify-center rounded-full'>
                        <p className='text-white text-xs font-semibold '>3</p>
                    </div>
                </div>

                {/* Logo */}
                <Link to={"/"} className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" className='w-8 object-cover'/>
                    <p className='text-headingColor text-xl font-bold'> City</p>
                </Link>
                {/* user profile */}
                <div className='h-full relative'>
                    <motion.img whileTap={{scale: 0.8}} src={user && user.userInfo ? user.userInfo.photoURL : Avatar} alt="user profile"  className='w-10 h-10 min-h-[40px] min-w-[40px] drop-shadow-lg cursor-pointer rounded-full' onClick={hendleOpenManu}/>

                    {manu && (
                        <motion.div 
                        initial={{opacity: 0, scale: 0.6}} 
                        animate={{opacity: 1, scale: 1}} 
                        exit={{opacity: 0, scale: 0.6}} 
                        className='flex flex-col absolute top-11 right-2 w-36 bg-gray-50 px-3 py-2 shadow-xl rounded-md'>
                        {   !user &&
                            <p className='flex px-2 py-2 items-center justify-start cursor-pointer gap-3 hover:bg-blue-300 transition-all duration-100 ease-out rounded' onClick={hendlLoginSm}>Log In<MdOutlineLogin/></p>
                        }
                        { user &&
                            <Link to={createcontainer}>
                            <p className='flex px-2 py-2 items-center justify-start cursor-pointer gap-3 hover:bg-slate-200 transition-all duration-100 ease-out rounded'>New Item <MdAdd/> </p>
                            </Link>
                        }
                        <ul className='flex flex-col'>
                            <li className='flex px-2 py-2 items-center hover:bg-slate-200 text-base  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                            <li className='flex px-2 py-2 items-center hover:bg-slate-200 text-base hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                            <li className='flex px-2 py-2 items-center hover:bg-slate-200 text-base  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
                            <li className='flex px-2 py-2 items-center hover:bg-slate-200 text-base hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                        </ul>
                        {   user &&
                            <p className='flex px-2 py-2 items-center justify-start cursor-pointer gap-3 hover:bg-red-200 transition-all duration-100 ease-out rounded' onClick={handleLodOut}>Log out <MdLogout/></p>
                        }
                    </motion.div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;