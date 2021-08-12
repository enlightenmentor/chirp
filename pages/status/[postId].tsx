import type { FC } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { Post as Post, PrismaClient } from "@prisma/client";
import MainLayout from "../../src/components/MainLayout";
import PostCard from "../../src/components/PostCard";
import serialisable, { Serialisable } from "../../src/utils/serialisable";

type Props = {
  post?: Serialisable<Post>;
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
  const post = id
    ? serialisable(await prisma.post.findUnique({ where: { id } })) || undefined
    : undefined;

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
