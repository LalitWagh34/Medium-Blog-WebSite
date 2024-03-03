import z from "zod";

export const signupBody =z.object({
    username:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()

})


export const signinBody =z.object({
    username:z.string().email(),
    password:z.string().min(6),
   

})


export const createBlog = z.object({
    title:z.string(),
    content:z.string()
})


export const udateBlog = z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})

export type SignupBody = z.infer<typeof signupBody>
export type SigninBody = z.infer<typeof signinBody>
export type CreateBlog = z.infer<typeof createBlog>
export type UpdateBlog = z.infer<typeof udateBlog>
