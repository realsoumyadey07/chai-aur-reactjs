import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:5173/',
    }),
    endpoints: (builder)=> ({
        getPosts: builder.query<Post[], string>({query: () => "posts"}),
        newPosts: builder.mutation<Post, Post>({query: (post) => (
            {
                url: "posts",
                method: "POST",
                body: post,
            }
        )}) 
    })
})

export const { useGetPostsQuery, useNewPostsMutation } = myApi;