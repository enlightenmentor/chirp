import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { omit } from 'ramda'
import { PrismaClient, User as DBUser } from '@prisma/client'
import { User } from '../models'
import { UserCreateInput, UserUpdateInput } from '../inputs'
import { encryptPassword } from '../../utils'

const prisma = new PrismaClient()

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async user(@Arg('name', () => String) name: string) {
    return prisma.user.findUnique({ where: { name } })
  }

  @Query(() => [User])
  async users() {
    return prisma.user.findMany()
  }

  @Mutation(() => User)
  async createUser(
    @Arg('user', () => UserCreateInput) userInput: UserCreateInput
  ) {
    const { hash, salt } = await encryptPassword(userInput.password)
    const user = {
      ...omit(['password'], userInput),
      hash,
      salt,
    }
    return prisma.user.create({ data: user })
  }

  @Mutation(() => User)
  async updateUser(
    @Arg('id', () => String) id: string,
    @Arg('user', () => UserUpdateInput) userInput: UserUpdateInput
  ) {
    const user: Partial<DBUser> = omit(['password'], userInput)
    if (userInput.password) {
      const { hash, salt } = await encryptPassword(userInput.password)
      user.hash = hash
      user.salt = salt
    }
    return prisma.user.update({ where: { id }, data: user })
  }

  @Mutation(() => User, { nullable: true })
  async deleteUser(@Arg('id', () => String) id: string) {
    return prisma.user.delete({ where: { id } })
  }
}
