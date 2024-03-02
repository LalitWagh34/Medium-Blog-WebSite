import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string;
    }
}>();

blogRouter.use('/*' , (c ,next)=>{
    next();
})

blogRouter.post('/' ,async(c) =>{
    const body =await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
      const blog = await prisma.blog.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:1
        }
      })
    return c.json({
        id:blog.id
    })
})

blogRouter.put('/' ,async(c) =>{
    const body =await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
      const blog = await prisma.blog.update({
        
        where:{
            id :body.id
        },
        data:{
            title:body.title,
            content:body.content,
        }
      })
    return c.json({
        id:blog.id
    })
    
})

blogRouter.get('/' ,async(c) =>{
    const body =await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try{   
      const blog = await prisma.blog.findFirst({
        where:{
            id :body.id
        },
        
      })
    return c.json({
      blog
    })
    }catch(err){
        console.log(err);
        c.status(411);
        return c.json ({
            msg:"error while fetching data"
        })
    }
})
// pagination
blogRouter.get('/bulk' ,async(c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs = await prisma.blog.findMany();

    return c.json({
        blogs
    })

    return c.text("Hello Hono")
})
