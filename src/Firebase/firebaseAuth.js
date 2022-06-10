
import { GoogleAuthProvider,getAuth, signInWithPopup, } from "firebase/auth";
import { app } from "./firebase.cnfig";
import { createAsyncThunk } from "@reduxjs/toolkit";


const provider = new GoogleAuthProvider();
const auth = getAuth(app);



const singInWithGoogle = createAsyncThunk("userSlice",async()=>{
        const responce = await signInWithPopup(auth, provider)
        const {providerData, stsTokenManager} = responce.user
        const userInfo = providerData[0]
         return {userInfo, stsTokenManager}
})

export {singInWithGoogle}