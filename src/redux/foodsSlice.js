
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from "firebase/firestore"; 
import { firestore } from '../Firebase/firebase.cnfig';

const initialState = {
    isLoding : false,
    msg : null,
    foods : []
}

export const getFoods = createAsyncThunk('foodsSlice', async()=>{
    const foods = [];
    const querySnapshot = await getDocs(collection(firestore, "foodItem"));
    querySnapshot.forEach((doc) => {
        foods.push(doc._document.data.value.mapValue.fields)
    })
    return foods
})

export const foodsSlice = createSlice({
    name: 'foodsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getFoods.pending, (state)=>{
            state.isLoding = true;
            state.msg = null
            state.foods = []
        })
        builder.addCase(getFoods.fulfilled, (state,action)=>{
            state.isLoding = false;
            state.msg = "Item load seccessfully"
            state.foods = action.payload
        })
        builder.addCase(getFoods.rejected, (state,action)=>{
            state.isLoding = false;
            state.msg = action.error.message
            state.foods = []
        })
    }
})

export default foodsSlice.reducer