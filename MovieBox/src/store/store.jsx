import  {configureStore} from "@reduxjs/toolkit"
import {userAuthApiSlice} from "../service/userAuthApi.jsx";
import {setupListeners} from '@reduxjs/toolkit/query'
import { movieApi} from "../service/movieApi.jsx";

export const store  = configureStore({
    reducer: {
        [userAuthApiSlice.reducerPath] : userAuthApiSlice.reducer,
        [movieApi.reducerPath]: movieApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        getDefaultMiddleware().concat(userAuthApiSlice.middleware)
    )
})


setupListeners(store.dispatch)