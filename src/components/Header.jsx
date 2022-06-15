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
        <header className='fixed top-0 z-50 w-screen p-3 px-5 md:p-6 md:px-16 bg-zinc-200'>
            {/* For dexktop ant tablate */}
            <div className='hidden w-full h-full md:flex '>
                {/* Logo */}
                <Link to={"/"} className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" className='object-cover w-8'/>
                    <p className='text-xl font-bold text-headingColor'> City</p>
                </Link>
                {/* Menu */}
                <div className='flex justify-center w-full gap-8'>
                <motion.ul 
                    initial={{opacity:0 , x: -200}}
                    animate={{opacity:1 , x: 0}}
                    exit={{opacity:0 , x: -200}}
                className='flex items-center gap-8 ml-auto'>
                    <li className='text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor'>Home</li>
                    <li className='text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor'>Menu</li>
                    <li className='text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor'>About us</li>
                    <li className='text-base transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor'>Service</li>
                </motion.ul>
                {/* cart */}
                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-2xl transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor'/>
                    <div className='absolute top-0 flex items-center justify-center w-5 h-5 rounded-full -right-2 bg-cartNumBg'>
                        <p className='text-xs font-semibold text-white '>3</p>
                    </div>
                </div>

                {/* user profile */}
                <div className='relative h-full '>
                    
                    <motion.img whileTap={{scale: 0.8}} src={user && user.userInfo ? user.userInfo.photoURL : Avatar} alt="user profile"  className='w-10 h-10 min-h-[40px] min-w-[40px] drop-shadow-lg cursor-pointer rounded-full' onClick={hendlLoginMd}/>

                    {manu && (
                        <motion.div 
                        initial={{opacity: 0, scale: 0.6}} 
                        animate={{opacity: 1, scale: 1}} 
                        exit={{opacity: 0, scale: 0.6}} 
                        className='absolute flex flex-col w-40 px-3 py-2 rounded-md shadow-xl top-11 -right-2 bg-gray-50'>
                        <Link to={createcontainer}>
                        <p className='flex items-center justify-center gap-3 px-2 py-2 transition-all duration-100 ease-out rounded cursor-pointer hover:bg-slate-200'>New Item <MdAdd/> </p>
                        </Link>
                        <p className='flex items-center justify-center gap-3 px-2 py-2 transition-all duration-100 ease-out rounded cursor-pointer hover:bg-slate-200' onClick={handleLodOut}>Log out <MdLogout/></p>
                    </motion.div>
                    )}
                </div>
                </div>
            </div>

            {/* For mobile */}
            <div className='flex items-center justify-between w-full h-full md:hidden'>
                {/* cart  */}
                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-2xl transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor'/>
                    <div className='absolute top-0 flex items-center justify-center w-5 h-5 rounded-full -right-2 bg-cartNumBg'>
                        <p className='text-xs font-semibold text-white '>3</p>
                    </div>
                </div>

                {/* Logo */}
                <Link to={"/"} className='flex items-center gap-2'>
                    <img src={Logo} alt="logo" className='object-cover w-8'/>
                    <p className='text-xl font-bold text-headingColor'> City</p>
                </Link>
                {/* user profile */}
                <div className='relative h-full'>
                    <motion.img whileTap={{scale: 0.8}} src={user && user.userInfo ? user.userInfo.photoURL : Avatar} alt="user profile"  className='w-10 h-10 min-h-[40px] min-w-[40px] drop-shadow-lg cursor-pointer rounded-full' onClick={hendleOpenManu}/>

                    {manu && (
                        <motion.div 
                        initial={{opacity: 0, scale: 0.6}} 
                        animate={{opacity: 1, scale: 1}} 
                        exit={{opacity: 0, scale: 0.6}} 
                        className='absolute flex flex-col px-3 py-2 rounded-md shadow-xl top-11 right-2 w-36 bg-gray-50'>
                        {   !user &&
                            <p className='flex items-center justify-start gap-3 px-2 py-2 transition-all duration-100 ease-out rounded cursor-pointer hover:bg-blue-300' onClick={hendlLoginSm}>Log In<MdOutlineLogin/></p>
                        }
                        { user &&
                            <Link to={createcontainer}>
                            <p className='flex items-center justify-start gap-3 px-2 py-2 transition-all duration-100 ease-out rounded cursor-pointer hover:bg-slate-200'>New Item <MdAdd/> </p>
                            </Link>
                        }
                        <ul className='flex flex-col'>
                            <li className='flex items-center px-2 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-200 hover:text-headingColor'>Home</li>
                            <li className='flex items-center px-2 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-200 hover:text-headingColor'>Menu</li>
                            <li className='flex items-center px-2 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-200 hover:text-headingColor'>About us</li>
                            <li className='flex items-center px-2 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-200 hover:text-headingColor'>Service</li>
                        </ul>
                        {   user &&
                            <p className='flex items-center justify-start gap-3 px-2 py-2 transition-all duration-100 ease-out rounded cursor-pointer hover:bg-red-200' onClick={handleLodOut}>Log out <MdLogout/></p>
                        }
                    </motion.div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;