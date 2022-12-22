import { VStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Item = () => {
  return (
    <VStack
      w="31%"
      align="center"
      justify="center"
      textAlign="center"
      boxShadow="2xl"
      p="5"
      bg="white"
      rounded="lg"
    >
      <Image src="/img/testi.png" alt="testi" />
      <Stack spacing={0}>
        <Text
          color="secondari.100"
          as="h3"
          fontSize="20px"
          fontWeight="700"
          lineHeight="26px"
        >
          Md. Golam Moktader
        </Text>
        <Text fontSize="14px" fontWeight="500">
          Managing Director
        </Text>
      </Stack>
      <Text
        fontSize="16px"
        lineHeight="27px"
        fontWeight="400"
        textAlign="center"
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </Text>
    </VStack>
  );
};

export default Item;
