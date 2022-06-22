import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion"

const CreateContainer = () => {
    const [title, setTitle] = useState('')
    const [calories, setCalories] = useState('')
    const [price, setPrice] = useState('')
    const [catagory, setCatagory] = useState('')
    const [fields, setFields] = useState(true)
    const [msg, setMsg] = useState('something ...')
    const [alertStatus, seAleartStatus] = useState('dange')
    const [isLoding, setIsLoding] = useState(false)
    return (
        <div className='flex items-center justify-center w-full min-h-screen'>
            <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center'>
                {fields && (
                    <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`text-center w-full text-lg font-semibold rounded-lg py-1 ${alertStatus === "danger" ? 'bg-red-400 text-red-900' : 'bg-green-500 text-black' }`}>
                        {msg}
                    </motion.p>
                    
                )}
            </div>
        </div>
    );
};

export default CreateContainer;