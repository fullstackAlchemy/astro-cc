// Define Schema for my Blog Posts


import {defineCollection, z} from "astro:content"

const postsCollection = defineCollection({
    
    schema: ({image}) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    }),
})

export const collections = {
    // The Collection name should match name of the directory where its content is located
    posts: postsCollection 
}