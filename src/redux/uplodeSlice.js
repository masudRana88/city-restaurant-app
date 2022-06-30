import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../Firebase/firebase.cnfig';

const initialState = {
    id : null,
    title: null,
    imageUrl : null,
    catagory : "other",
    calories : null,
    price : null,
    qty : 1
}

export const saveItemTodb = createAsyncThunk("uplodeSlice",async(info)=>{
    const docRef = await addDoc(collection(firestore, "foodItem"), info.data);
    console.log(docRef)
    return info
})

export const uplodeSlice = createSlice({
    name : "uplodeSlice",
    initialState,
    reducers : {},
    extraReducers: (builder) =>{
        builder.addCase(saveItemTodb.fulfilled, (state,action)=>{
            action.payload.funcs.setIsLoding(true)
            action.payload.funcs.setFields(true)
            action.payload.funcs.setAleartStatus("success")
            action.payload.funcs.setMsg("Item save successfully 😍")
            action.payload.funcs.clearMsg()
            action.payload.funcs.clearFields()
            state.id = action.payload.data.id;
            state.title = action.payload.data.title;
            state.imageUrl = action.payload.data.imageUrl;
            state.catagory = action.payload.data.catagory;
            state.calories = action.payload.data.calories;
            state.price = action.payload.data.id;
            state.qty = action.payload.data.qty;
        })
        builder.addCase(saveItemTodb.rejected, (state,action)=>{
            action.payload.funcs.setIsLoding(true)
            action.payload.funcs.setFields(true)
            action.payload.funcs.setAleartStatus("danger")
            action.payload.funcs.setMsg(action.error.message)
            action.payload.funcs.clearMsg()
        })
    }
})

export default uplodeSlice.reducer