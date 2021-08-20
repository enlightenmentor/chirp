import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { UserInput } from "../../../src/graphql/inputs";
import { validatePassword } from "../../../src/utils";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize({
        username,
        password,
      }: Pick<UserInput, "username" | "password">) {
        const user = await prisma.user.findUnique({ where: { username } });
        if (user && (await validatePassword(user, password))) {
          return user;
        } else {
          throw new Error("Invalid username or password");
        }
      },
    }),
  ],
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
});
