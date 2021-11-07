import type { FC } from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import BreakpointsProvider from "../src/components/BreakpointsProvider";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <SessionProvider session={pageProps.session}>
    <BreakpointsProvider>
      <ChakraProvider>
        <NextNProgress />
        <Component {...pageProps} />
      </ChakraProvider>
    </BreakpointsProvider>
  </SessionProvider>
);

export default App;
