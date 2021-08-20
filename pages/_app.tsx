import type { FC } from "react";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { ChakraProvider } from "@chakra-ui/react";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider session={pageProps.session}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
);

export default App;
