import type { FC } from "react";
import type { GetServerSideProps } from "next";
import type { Session } from "next-auth";
import Head from "next/head";
import { getSession } from "next-auth/client";
import MainLayout from "../src/components/MainLayout";
import { LINK } from "../src/constants";

type Props = {
  session: Session | null;
};

const Notifications: FC = () => (
  <>
    <Head>
      <title>Notifications / Chirp</title>
    </Head>
    <MainLayout>Notifications</MainLayout>
  </>
);

export default Notifications;

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

  return {
    props: {
      session,
    },
  };
};
