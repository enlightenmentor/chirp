import type { FC } from "react";
import type { GetServerSideProps } from "next";
import type { Session } from "next-auth";
import Head from "next/head";
import Link from "next/link";
import { getSession } from "next-auth/client";
import MainLayout from "../src/components/MainLayout";
import { LINK } from "../src/constants";
import { gql, Post } from "../src/graphql/sdk";

type Props = {
  session: Session | null;
  posts: Post[];
};

const Home: FC<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Home / Chirp</title>
    </Head>
    <MainLayout>
      {posts.map(({ id, content }) => (
        <Link href={LINK.STATUS("", id)} key={id}>
          <a>{content}</a>
        </Link>
      ))}
    </MainLayout>
  </>
);

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const session = await getSession({ req: context.req });

  if (!session?.user) {
    return {
      redirect: {
        destination: LINK.LOGIN,
        permanent: false,
      },
    };
  }

  const { posts = [] } = await gql.Posts();

  return {
    props: {
      session,
      posts,
    },
  };
};
