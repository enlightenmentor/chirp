import type { FC } from "react";
import Head from "next/head";
import MainLayout from "../src/components/MainLayout";

const Home: FC = () => (
  <>
    <Head>
      <title>Home / Chirp</title>
    </Head>
    <MainLayout>Home</MainLayout>
  </>
);

export default Home;
