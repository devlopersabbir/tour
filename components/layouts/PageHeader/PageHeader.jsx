import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const PageHeader = ({ title }) => {
  return (
    <Flex
      w="100%"
      h="350px"
      sx={{
        backgroundImage: "url(/img/page-header.png)",
        backgroundSize: "cover",
      }}
      align="center"
      justify="center"
    >
      {title && (
        <Text
          fontWeight="700"
          fontSize={{ base: "30px", sm: "35px", md: "42px" }}
          align="center"
          color="white"
        >
          {title}
        </Text>
      )}
    </Flex>
  );
};

export default PageHeader;
