// in service we will write business logic, not database logic
import config from '../../../config/index'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generatedUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated password
  const id = await generatedUserId()

  user.id = id
  // default password
  if (!user.password) {
    user.password = config.user_pass as string
  }

  const successfulUser = await User.create(user)
  if (!successfulUser) {
    throw new Error('User creation attempt has been failed!!!')
  }
  return null
}

export default createUser
