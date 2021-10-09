import type { FC } from "react";
import type { GetServerSideProps } from "next";
import type { Session } from "next-auth";
import Head from "next/head";
import { getSession } from "next-auth/client";
import MainLayout from "../../src/components/MainLayout";
import PostCard from "../../src/components/PostCard";
import { gqlClient, Post } from "../../src/graphql/sdk";

type Props = {
  session: Session | null;
  post: Post | null;
};

const PostPage: FC<Props> = ({ post }) => (
  <>
    <Head>
      <title>Post &quot;{post?.content}&quot; / Chirp</title>
    </Head>
    <MainLayout>
      <PostCard post={post} />
    </MainLayout>
  </>
);

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const id = context.params?.postId as string | undefined;
  const [session, { post = null }] = await Promise.all([
    getSession({ req: context.req }),
    id ? gqlClient.Post({ id }) : {},
  ]);

  return {
    props: {
      post,
      session,
    },
  };
};

export default PostPage;
