import "reflect-metadata";
import { resolve } from "path";
import { buildSchemaSync } from "type-graphql";
import { graphqlHTTP } from "express-graphql";
import { resolvers } from "../../src/graphql/resolvers";

const schema = buildSchemaSync({
  resolvers,
  validate: false,
  emitSchemaFile: process.env["VERCEL_ENV"] === "development" && {
    path: resolve(__dirname, "../../../../src/graphql/schema.gql"),
    commentDescriptions: true
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default graphqlHTTP({
  schema,
  graphiql: true
});
