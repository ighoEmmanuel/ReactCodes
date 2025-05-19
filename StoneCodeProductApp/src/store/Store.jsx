import  {configureStore} from "@reduxjs/toolkit"
import {setupListeners} from '@reduxjs/toolkit/query'
import { productApi} from "../service/ProductApi.jsx";
import {fakeStoreApi} from "../service/FakeStoreApi.jsx";

export const store  = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            productApi.middleware,
            fakeStoreApi.middleware
        )

})


setupListeners(store.dispatch)