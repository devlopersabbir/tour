import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const NavBar = () => {
  return (
    <Flex
      w="full"
      h={{ base: "auto", md: "91px" }}
      shadow="lg"
      borderRadius="10px"
      align="center"
      justifyContent="space-between"
      bg="white"
      mt={9}
      wrap="wrap"
      gap={2}
      padding={{ base: 4, md: "0px 30px" }}
    >
      <Flex align="center" gap={3}>
        <Text fontSize="16px" fontWeight={400} cursor="pointer">
          Details
        </Text>
        <Text fontSize="16px" fontWeight={400} cursor="pointer">
          Itinerary
        </Text>
        <Text fontSize="16px" fontWeight={400} cursor="pointer">
          Photos
        </Text>
        <Text fontSize="16px" fontWeight={400} cursor="pointer">
          Information
        </Text>
      </Flex>
      <Button
        size="lg"
        colorScheme="yellow"
        bg="primary.200"
        color="white"
        rightIcon={<BsArrowRight />}
      >
        Book now
      </Button>
    </Flex>
  );
};

export default NavBar;
