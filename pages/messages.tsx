import type { FC } from "react";
import Head from "next/head";
import MainLayout from "../src/components/MainLayout";

const Messages: FC = () => (
  <>
    <Head>
      <title>Messages / Chirp</title>
    </Head>
    <MainLayout>Messages</MainLayout>
  </>
);

export default Messages;
