import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion"
import {MdFastfood,MdCloudUpload,MdDeleteForever, MdFoodBank, MdAttachMoney} from 'react-icons/md';
import { catagories } from '../utils/data';
import Loader from './Loader';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../Firebase/firebase.cnfig';
import { useDispatch } from 'react-redux';
import { saveItemTodb } from '../redux/uplodeSlice';
import CartContainer from './CartContainer';

const CreateContainer = () => {
    const [title, setTitle] = useState('')
    const [calories, setCalories] = useState('')
    const [price, setPrice] = useState('')
    const [catagory, setCatagory] = useState('other')
    const [fields, setFields] = useState(false)
    const [msg, setMsg] = useState('something ...')
    const [alertStatus, setAleartStatus] = useState('dange')
    const [imageAsset, setImageAsset] = useState(null)
    const [isLoding, setIsLoding] = useState(false)

    const dispatch = useDispatch()
    // ====== Clear Msg =========
    const clearMsg = ()=>{
        setTimeout(() => {
            setFields(false)
            setIsLoding(false)
            setAleartStatus('')
        }, 4000);
    }
    // ====== Clear Fields =========
    const clearFields = ()=>{
        setIsLoding(false)
        setTitle('');
        setCalories("");
        setPrice('')
        setImageAsset(null)
    }
     // ====== Uplode image =========
    const uplodeImage = (e)=>{
        setIsLoding(true)
        const imageFile = e.target.files[0]
        const metadata = {
            contentType: 'image/jpeg'
          };
        const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
        const uplodeTask = uploadBytesResumable(storageRef, imageFile, metadata);

        uplodeTask.on('state_changed', (snapshot)=>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFields(true);
            setAleartStatus('success')
            setMsg('Upload is ' + progress.toFixed(2) + '% done')
        }, (error)=>{
            setFields(true);
            setMsg("Error while image uploding: please Try again 😥")
            setAleartStatus('danger')
            clearMsg()
        }, ()=>{
            getDownloadURL(uplodeTask.snapshot.ref).then((downloadURL) => {
                setImageAsset(downloadURL);
                setIsLoding(false)
                setMsg("Image is uloded successfully 😍")
                setAleartStatus('success')
                setFields(true)
                clearMsg()
              })
        })
    }
        
     // ====== Delete image =========
    const deleteImage = ()=>{
        setIsLoding(true)
        const desertRef = ref(storage, imageAsset);
        // Delete the file
        deleteObject(desertRef).then(() => {
            setImageAsset(null)
            setIsLoding(false)
            setFields(true);
            setMsg("Image Delete successfully 😜")
            clearMsg()
        }).catch((error) => {
            setFields(true);
            setMsg(`Error while image Delete: please Try again 😥 ${error}`)
            clearMsg()
        });
    }
        // ======== save detailes ===========
    const saveDetails = ()=>{
            if(title && catagory && imageAsset && calories && price){
                setIsLoding(true)
                const data = {
                    id : Date.now(),
                    title,
                    imageUrl : imageAsset,
                    catagory,
                    calories,
                    price,
                    qty : 1
                }
                const funcs ={
                    setIsLoding,
                    setFields,
                    setAleartStatus,
                    setMsg,
                    clearMsg,
                    clearFields
                }
                const info = {
                    data, funcs
                }
                setIsLoding(true)
                setFields(true);
                setAleartStatus('success')
                setMsg(`please Wait data is Saving 😴 .....`)
                dispatch(saveItemTodb(info))
            }
            else{
                setIsLoding(false)
                setFields(true);
                setAleartStatus('danger')
                setMsg(`please Fill the all inpute fildes 🤦🏻‍♂️ and try again`)
                clearMsg()
            }
    }

    return (
        <div className='flex items-center justify-center w-full min-h-screen'>
            <CartContainer/>
            <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
                {/* ====== message ====== */}
                {fields && (
                    <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`text-center w-full text-lg font-semibold rounded-lg py-1 ${alertStatus === "danger" ? 'bg-red-400 text-red-900' : 'bg-green-500 text-black' }`}>
                        {msg}
                    </motion.p>
                    
                )}
                {/* ====== Title ====== */}
                <div className='flex items-center w-full gap-2 py-2 border-b border-gray-300 '>
                    <MdFastfood className='text-xl text-gray-500'/>
                    <input
                     className='w-full h-auto text-lg bg-transparent border-none outline-none text-textColor placeholder:text-gray-400'
                     type="text" 
                     required 
                     value={title} 
                     onChange={(e)=> setTitle(e.target.value)}
                     placeholder='Give me a Title ... ' 
                     />
                </div>
                {/* ====== Catagory ====== */}
                <div className='w-full'>
                    <select value={catagory}
                        onChange={(e)=>setCatagory(e.target.value)}
                        className="w-full p-2 text-base border-b-2 border-gray-200 rounded-md outline-none cursor-pointer "
                    >
                        <option value='other' className='bg-white'>
                            Select Catagory
                        </option>
                        {catagories && catagories.map(item =>(
                            <option key={item.id} value={item.urlParamName} className='text-base capitalize bg-white border-0 outline-none text-headingColor'>
                                {item.name} 
                            </option>)
                        )}
                    </select>
                </div>

                {/* ====== Image uplode ====== */}
                <div className='flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dotted rounded-lg h-225 md:h-420 group'>
                    {
                        isLoding ? (<Loader/>) : (
                            !imageAsset ? 
                            <>
                                <label className='flex flex-col items-center justify-center w-full h-full cursor-pointer'>
                                    <div className='flex flex-col items-center justify-center w-full h-full gap-2 child:text-gray-500 child-hover:text-gray-700'>
                                        <MdCloudUpload className='text-3xl md:text-6xl'/>
                                        <p className=''>Click here to Uplode</p>
                                    </div>
                                    <input type="file" name='uplodeImg' accept='image/*' className='w-0 h-0' onChange={(e)=> uplodeImage(e)}/>
                                </label>
                            </> : 
                            
                            <>
                                <div className='relative w-full h-full'>
                                    <img src={imageAsset} alt="uploded images" className='object-cover w-full h-full' />
                                    <motion.button whileTap={{scale: 0.92}} initial={{opacity: 0, scale: 0.6}} 
                                        animate={{opacity: 1, scale: 1}} 
                                        exit={{opacity: 0, scale: 0.6}} 
                                        type='button' 
                                        onClick={deleteImage}
                                        className='absolute inline-block p-2 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg right-2 bottom-2'>
                                        <MdDeleteForever className='text-2xl text-white'/>
                                    </motion.button>
                                </div>
                            </>
                        )
                    }
                </div>

                {/* ====== Calories input ====== */}
                <div className='flex items-center w-full gap-3 '>
                    <div className='flex items-center w-full gap-2 py-2 border-b border-gray-300'>
                        <MdFoodBank className='text-2xl text-gray-500'/>
                        <input 
                          type="text"
                          required
                          placeholder='Calories' 
                          value={calories}
                          onChange={(e)=> setCalories(e.target.value)}
                          className='w-full h-full text-lg bg-transparent border-none outline-none placeholder:text-gray-400' />
                    </div>
                </div>

                {/* ====== Price input ====== */}
                <div className='flex items-center w-full gap-3 '>
                    <div className='flex items-center w-full gap-2 py-2 border-b border-gray-300'>
                        <MdAttachMoney className='text-2xl text-gray-500'/>
                        <input 
                          type="number"
                          required
                          placeholder='Price' 
                          value={price}
                          onChange={(e)=> setPrice(e.target.value)}
                          className='w-full h-full text-lg bg-transparent border-none outline-none placeholder:text-gray-400' />
                    </div>
                </div>
                
                {/* Sava button */}
                <div className="flex items-center w-full">
                    <motion.button whileTap={{scale: 0.98}}
                    onClick={saveDetails}
                    type="button" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-0 w-full md:ml-auto md:w-auto">Save</motion.button>
                </div>

            </div>
        </div>

    );
};

export default CreateContainer;