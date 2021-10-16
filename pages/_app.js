import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { GlobalStyles, theme } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
