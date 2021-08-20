import type { FC } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { Post as Post, PrismaClient } from "@prisma/client";
import MainLayout from "../../src/components/MainLayout";
import PostCard from "../../src/components/PostCard";
import serialisable, { Serialisable } from "../../src/utils/serialisable";
import { useSession, getSession } from "next-auth/client";

type Props = {
  post?: Serialisable<Post>;
};

const PostPage: FC<Props> = ({ post }) => {
  const [session, loading] = useSession();

  console.log({ session, loading });

  return (
    <>
      <Head>
        <title>Post &quot;{post?.content}&quot; / Chirp</title>
      </Head>
      <MainLayout>
        <PostCard post={post} />
      </MainLayout>
    </>
  );
};

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  console.log(await getSession({ req: context.req }));
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
