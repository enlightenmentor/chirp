import { PrismaClient } from '@prisma/client'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { validatePassword } from '../../../src/utils'

const prisma = new PrismaClient()

export default NextAuth({
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string
          password: string
        }
        const user = await prisma.user.findUnique({
          where: { name: username },
        })
        if (user && (await validatePassword(user, password))) {
          return user
        } else {
          throw new Error('Invalid username or password')
        }
      },
    }),
  ],
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
})
