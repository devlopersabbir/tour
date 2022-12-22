import { ChakraProvider } from "@chakra-ui/react";
import theme from "../chakra/theme";
import MainLayout from "../components/layouts/MainLayout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
