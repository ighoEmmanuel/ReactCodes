import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productUrl = 'https://dummyjson.com'



export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: `${productUrl}`}),
    endpoints:(builder)=>({
        getProducts: builder.query({
            query: () => `/products`
        }),
        getProductDetails: builder.query({
            query: (id) => `/products/${id}`
        })
    })
})


export const {useGetProductsQuery,useGetProductDetailsQuery} = productApi
