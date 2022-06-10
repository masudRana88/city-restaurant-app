import { configureStore , getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './userSlice'

const store = configureStore({
    reducer: {
        userSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store