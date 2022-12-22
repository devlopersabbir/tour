import { Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BoxLayout from "../../layouts/BoxLayout";
import All_Button from "../../layouts/All_Button/All_Button";
import { BsArrowRight } from "react-icons/bs";

const MeetHono = () => {
  return (
    <BoxLayout>
      <Flex gap={10}>
        <Flex w="full">
          <Image src="/img/meet.png" alt="image" />
        </Flex>
        <VStack spacing={5} w="full" align="flex-start" justify="center">
          <Text
            as="h1"
            fontSize="40px"
            fontWeight="700"
            lineHeight="52px"
            color="secondary.100"
          >
            Meet out Honorable Group leader whole over the BangladeshOld Vision
          </Text>
          <All_Button text="Meet them" rightIcon={<BsArrowRight />} />
        </VStack>
      </Flex>
    </BoxLayout>
  );
};

export default MeetHono;
