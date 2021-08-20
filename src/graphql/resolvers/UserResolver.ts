import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { User } from "../models";
import { UserInput } from "../inputs";
import { encryptPassword } from "../../utils";

const prisma = new PrismaClient();

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async user(@Arg("username", () => String) username: string) {
    return prisma.user.findUnique({ where: { username } });
  }

  @Query(() => [User])
  async users() {
    return prisma.user.findMany();
  }

  @Mutation(() => User)
  async createUser(@Arg("user", () => UserInput) userInput: UserInput) {
    const { hash, salt } = await encryptPassword(userInput.password);
    const user = {
      username: userInput.username,
      email: userInput.email,
      displayName: userInput.displayName,
      profilePhoto: userInput.profilePhoto,
      coverPhoto: userInput.coverPhoto,
      hash,
      salt,
    };
    return prisma.user.create({ data: user });
  }

  @Mutation(() => User, { nullable: true })
  async deleteUser(@Arg("id", () => String) id: string) {
    return prisma.user.delete({ where: { id } });
  }
}
