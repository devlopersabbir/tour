import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Box } from "@chakra-ui/react";

const MainLayout = ({ children }) => {
  return (
    <Box bg="background.100">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
