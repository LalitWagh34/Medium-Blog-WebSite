import { Hono } from 'hono'
import {PrismaClient} from "@prisma/client/edge"
import {withAccelerate} from "@prisma/extension-accelerate"
const app = new Hono<{
    Bindings:{
        DATABASE_URL:string;
    }
}>()

app.post('/api/v1/signup' ,(c) =>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    return c.text("Hello Hono")
})

app.post('/api/v1/signin' ,(c) =>{
    return c.text("Hello Hono")
})

app.post('/api/v1/blog' ,(c) =>{
    return c.text("Hello Hono")
})

app.put('/api/v1/blog' ,(c) =>{
    return c.text("Hello Hono")
})

app.get('/api/v1/blog/:id' ,(c) =>{
    return c.text("Hello Hono")
})

app.get('/api/v1/blog/bulk' ,(c) =>{
    return c.text("Hello Hono")
})


export default app

