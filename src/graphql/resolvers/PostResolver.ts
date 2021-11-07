import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { PrismaClient } from '@prisma/client'
import { Post } from '../models'
import { PostInput } from '../inputs'

const prisma = new PrismaClient()

@Resolver(Post)
export class PostResolver {
  @Query(() => Post, { nullable: true })
  async post(@Arg('id', () => String) id: string) {
    return prisma.post.findUnique({ where: { id } })
  }

  @Query(() => [Post])
  async posts() {
    return prisma.post.findMany()
  }

  @Mutation(() => Post)
  async createPost(@Arg('post', () => PostInput) postInput: PostInput) {
    return prisma.post.create({ data: postInput })
  }

  @Mutation(() => Post, { nullable: true })
  async deletePost(@Arg('id', () => String) id: string) {
    return prisma.post.delete({ where: { id } })
  }
}
