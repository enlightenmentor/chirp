import type { FC } from "react";
import type { GetServerSideProps } from "next";
import type { Session } from "next-auth";
import Head from "next/head";
import { getSession } from "next-auth/client";
import { Post as Post, PrismaClient } from "@prisma/client";
import MainLayout from "../../src/components/MainLayout";
import PostCard from "../../src/components/PostCard";
import serialisable, { Serialisable } from "../../src/utils/serialisable";

type Props = {
  session: Session | null;
  post: Serialisable<Post> | null;
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

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const id = context.params?.postId as string | undefined;
  const [session, dbPost] = await Promise.all([
    getSession({ req: context.req }),
    prisma.post.findUnique({ where: { id } }),
  ]);
  const post = serialisable(dbPost);

  return {
    props: {
      post,
      session,
    },
  };
};

export default PostPage;
