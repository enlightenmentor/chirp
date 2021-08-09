import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { Post } from "../models";
import { PostInput } from "../inputs";

const prisma = new PrismaClient();

@Resolver(Post)
export class PostResolver {
  @Query(returns => Post, { nullable: true })
  async post(
    @Arg("id", type => String) id: string
  ) {
    return prisma.post.findUnique({ where: { id } });
  }

  @Query(returns => [Post])
  async posts() {
    return prisma.post.findMany();
  }

  @Mutation(returns => Post)
  async createPost(
    @Arg("post", type => PostInput) postInput: PostInput
  ) {
    return prisma.post.create({ data: postInput })
  }

  @Mutation(returns => Post, { nullable: true })
  async deletePost(
    @Arg("id", type => String) id: string
  ) {
    return prisma.post.delete({ where: { id } })
  }
}
