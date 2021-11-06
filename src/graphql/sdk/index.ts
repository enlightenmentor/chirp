import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated";

const ENDPOINT = `${process.env.NEXTAUTH_URL ?? "/"}api/graphql`;
const client = new GraphQLClient(ENDPOINT);
const gql = getSdk(client);

export * from "../generated";
export { gql };
