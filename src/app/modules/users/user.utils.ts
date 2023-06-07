import { User } from './user.model'

export const findLastUser = async () => {
  //Fist way
  // const lastUser = await User.findOne({},{id:1,_id:0}).sort({
  //     createdAt: -1
  // }).lean()

  //Second way
  // const lastUser = await User.findOne({},{},{sort:{'created_at':-1}})

  //Third way
  // const lastUser = await User.findOne().sort({ created_at:'asc',_id: -1}).limit(1)

  //forth way
  // const olderDoc: any = await User.findOne().sort({ createdAt: 1 }).lean().exec()

  const lastUser = await User.findOne().sort({ createdAt: -1 }).lean().exec()

  return lastUser?.id
}

export const generatedUserId = async () => {
  const currentId = (await findLastUser()) || (0).toString().padStart(5, '0')
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')

  return incrementedId
}
