import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoNewsHeaders = {
        'X-RapidAPI-Key': '17c8830ffcmshb524541fae4c94ep157127jsn78353489cb3f',
        'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';

const createRequest = (url) => ({url, headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({count}) => createRequest(`/v1/coindesk/?limit=${count}`),
        })
    })
})



export const { useGetCryptoNewsQuery, } = cryptoNewsApi;