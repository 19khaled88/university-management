import express, { Application } from 'express'
import cors from 'cors'
const app : Application= express()


//middleware
app.use(express.urlencoded({extended:true}))
app.use(cors())



//routes
app.get("/test",(req,res)=>{
    res.send("hello")
})



export default app