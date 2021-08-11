import type { FC } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import MainLayout from "../../src/components/MainLayout";
import PostCard from "../../src/components/PostCard";

type PostType = {
  id: string
  content: string
  createdAt: string
}

type Props = {
  post?: PostType
}

const Post: FC<Props> = ({ post }) => (
  <>
    <Head>
      <title>Post &quot;{post?.content}&quot; / Chirp</title>
    </Head>
    <MainLayout>
      <PostCard post={post}/>
    </MainLayout>
  </>
);

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const id = context.params?.postId as string | undefined;
  const rawPost = id
    ? await prisma.post.findUnique({ where: { id } }) || undefined
    : undefined;
  
  const post = rawPost
    ? {
      ...rawPost,
      createdAt: rawPost.createdAt.toISOString()
    }
    : undefined;

  return {
    props: {
      post
    }
  }
}


export default Post;
