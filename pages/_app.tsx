import type { FC } from "react";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <ChakraProvider>
      <NextNProgress />
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
);

export default App;
