import type { FC } from "react";
import type { GetServerSideProps } from "next";
import type { Session } from "next-auth";
import Head from "next/head";
import { getSession, useSession } from "next-auth/client";
import MainLayout from "../src/components/MainLayout";
import { LINK } from "../src/constants";
import ProfilePage from "../src/components/ProfilePage";

type Props = {
  session: Session | null;
};

const Profile: FC = () => {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>@{session?.user?.name} / Chirp</title>
      </Head>
      <MainLayout>
        <ProfilePage />
      </MainLayout>
    </>
  );
};

export default Profile;

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
