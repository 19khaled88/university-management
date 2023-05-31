import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
app.get('/test', (req: Request, res: Response) => {
  res.send('hello')
})

export default app
