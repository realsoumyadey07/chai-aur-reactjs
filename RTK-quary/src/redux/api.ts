import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

<<<<<<< HEAD
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
=======
export const posts = createApi({
     reducerPath: "api",
     baseQuery: fetchBaseQuery({
          baseUrl: 'http://localhost:3000/'
     }),
     endpoints: (builder)=>({
          getPosts: builder.query<string, string>({ query: ()=> "posts" }),
     })
})

export const { useGetPostsQuery } = posts;
>>>>>>> b713c5ec8bafe726ae4475e01b6843605efc294a
