import { pbkdf2, randomBytes } from 'crypto'
import { promisify } from 'util'

const encryptPassword = async (password: string) => {
  const salt = randomBytes(16).toString('hex')
  const hashBuffer = await promisify(pbkdf2)(password, salt, 1000, 64, 'sha512')
  const hash = hashBuffer.toString('hex')
  return { hash, salt }
}

export default encryptPassword
