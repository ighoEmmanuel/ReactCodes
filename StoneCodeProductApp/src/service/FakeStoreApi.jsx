import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productUrl = 'https://fakestoreapi.com'



export const fakeStoreApi = createApi({
    reducerPath: 'fakeStoreApi',
    baseQuery: fetchBaseQuery({baseUrl: `${productUrl}`}),
    endpoints:(builder)=>({
        getFakeStoreProducts: builder.query({
            query: () => `/products`
        })
    })
})


export const {useGetFakeStoreProductsQuery} = fakeStoreApi
