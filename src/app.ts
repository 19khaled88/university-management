import express, { Application } from 'express'
import cors from 'cors'
const app : Application= express()


//middleware
app.use(cors())
app.use(express.urlencoded({extended:true}))


//routes
app.get("/",(req,res)=>{
    res.send("hello")
})



export default app