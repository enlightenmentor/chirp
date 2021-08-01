import type { FC } from "react";
import Head from "next/head";
import MainLayout from "../src/components/MainLayout";

const Notifications: FC = () => (
  <>
    <Head>
      <title>Notifications / Chirp</title>
    </Head>
    <MainLayout>Notifications</MainLayout>
  </>
);

export default Notifications;
