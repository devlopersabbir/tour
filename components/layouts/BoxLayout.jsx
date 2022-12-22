import React from "react";
import { Box, Container } from "@chakra-ui/react";

const BoxLayout = ({ children }) => {
  return (
    <Box w="100%" mt={20}>
      <Container maxW="container.lg" height="100%">
        {children}
      </Container>
    </Box>
  );
};

export default BoxLayout;
