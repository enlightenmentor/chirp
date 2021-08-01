import type { FC } from "react";
import Head from "next/head";
import MainLayout from "../src/components/MainLayout";

const Profile: FC = () => (
  <>
    <Head>
      <title>Profile / Chirp</title>
    </Head>
    <MainLayout>Profile</MainLayout>
  </>
);

export default Profile;
