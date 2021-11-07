import { User } from '@prisma/client'
import { pbkdf2 } from 'crypto'
import { promisify } from 'util'

const validatePassword = async (user: User, password: string) => {
  const hashBuffer = await promisify(pbkdf2)(
    password,
    user.salt,
    1000,
    64,
    'sha512'
  )
  return hashBuffer.toString('hex') === user.hash
}

export default validatePassword
