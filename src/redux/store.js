import { configureStore , getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import uplodeSlice from './uplodeSlice'

const store = configureStore({
    reducer: {
        userSlice,
        uplodeSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store