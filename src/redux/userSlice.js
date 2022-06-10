import { createSlice } from '@reduxjs/toolkit';
import { singInWithGoogle } from '../Firebase/firebaseAuth';


const initialState = {
    user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    error : null,
    isLoding : false
}


export const userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers :{},
    extraReducers: (builder) =>{
        builder.addCase(singInWithGoogle.pending,(state)=>{
            state.isLoding = true;
            state.error = null
        })
        builder.addCase(singInWithGoogle.fulfilled, (state, action)=>{
            state.user = action.payload;
            state.error = null;
            state.isLoding = false;
            localStorage.setItem("user", JSON.stringify(action.payload))
        })
        builder.addCase(singInWithGoogle.rejected, (state, action)=>{
            state.error = action.error.message;
            state.isLoding = false;
        })
    }
})

export default userSlice.reducer