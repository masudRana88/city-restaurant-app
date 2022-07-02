import { configureStore , getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import uplodeSlice from './uplodeSlice'
import foodsSlice from './foodsSlice'

const store = configureStore({
    reducer: {
        userSlice,
        uplodeSlice,
        foodsSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store