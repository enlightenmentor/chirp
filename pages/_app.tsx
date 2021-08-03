import type { FC } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
