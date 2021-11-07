import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createUser: User;
  deletePost?: Maybe<Post>;
  deleteUser?: Maybe<User>;
  updateUser: User;
};


export type MutationCreatePostArgs = {
  post: PostInput;
};


export type MutationCreateUserArgs = {
  user: UserCreateInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  user: UserUpdateInput;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
};

export type PostInput = {
  content: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  posts: Array<Post>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  cover?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserCreateInput = {
  cover?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserUpdateInput = {
  cover?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, content: string, createdAt: any }> };

export type PostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, content: string, createdAt: any } | null | undefined };

export type UserQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name: string, email: string, cover?: string | null | undefined, createdAt: any, image?: string | null | undefined, displayName?: string | null | undefined } | null | undefined };

export type RegisterUserMutationVariables = Exact<{
  user: UserCreateInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string, email: string, cover?: string | null | undefined, createdAt: any, image?: string | null | undefined, displayName?: string | null | undefined } };

export type PostFragmentFragment = { __typename?: 'Post', id: string, content: string, createdAt: any };

export type UserFragmentFragment = { __typename?: 'User', id: string, name: string, email: string, cover?: string | null | undefined, createdAt: any, image?: string | null | undefined, displayName?: string | null | undefined };

export const PostFragmentFragmentDoc = gql`
    fragment PostFragment on Post {
  id
  content
  createdAt
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  email
  cover
  createdAt
  image
  displayName
}
    `;
export const PostsDocument = gql`
    query Posts {
  posts {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export const PostDocument = gql`
    query Post($id: String!) {
  post(id: $id) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export const UserDocument = gql`
    query User($username: String!) {
  user(name: $username) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const RegisterUserDocument = gql`
    mutation RegisterUser($user: UserCreateInput!) {
  createUser(user: $user) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Posts(variables?: PostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostsQuery>(PostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Posts');
    },
    Post(variables: PostQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PostQuery>(PostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Post');
    },
    User(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>(UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'User');
    },
    RegisterUser(variables: RegisterUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterUserMutation>(RegisterUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RegisterUser');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;