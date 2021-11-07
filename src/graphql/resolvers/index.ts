import { PostResolver } from './PostResolver'
import { UserResolver } from './UserResolver'

export const resolvers = [PostResolver, UserResolver] as const
