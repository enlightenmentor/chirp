import "reflect-metadata";
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";
import { resolvers } from "@generated/type-graphql";
import { buildSchema } from "type-graphql";
import { graphqlHTTP } from "express-graphql";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest & { url: string }, res: NextApiResponse) => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  await graphqlHTTP({
    schema,
    graphiql: true,
    context: { prisma }
  })(req, res);
}

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
}
