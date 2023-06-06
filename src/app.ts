import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoute from '../src/app/modules/users/user.router'
import createUser from './app/modules/users/user.service'
const app: Application = express()

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes

app.use('/api/v1', userRoute)

app.get('/test', async (req: Request, res: Response) => {
  await createUser({
    id: '999',
    password: '1234',
    role: 'student',
  })
  res.send('hello')
})

export default app
