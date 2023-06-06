import { Request, Response } from 'express'
import createUser from './user.service'

export const createdUser = async (req: Request, res: Response) => {
  const body = req.body

  try {
    const result = await createUser(body)
    res.status(200).json({ result })
  } catch (error) {
    res.status(400).json({ success: 'failure', message: error })
  }
}
