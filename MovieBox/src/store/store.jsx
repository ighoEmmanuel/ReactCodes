import  {configureStore} from "@reduxjs/toolkit"
import {userAuthApiSlice} from "../service/userAuthApi.jsx";
import {setupListeners} from '@reduxjs/toolkit/query'

export const store  = configureStore({
    reducer: {
        [userAuthApiSlice.reducerPath] : userAuthApiSlice.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        getDefaultMiddleware().concat(userAuthApiSlice.middleware)
    )
})


setupListeners(store.dispatch)