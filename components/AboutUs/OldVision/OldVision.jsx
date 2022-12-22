import { Flex, Image, VStack, Text } from "@chakra-ui/react";
import React from "react";
import BoxLayout from "../../layouts/BoxLayout";

const OldVision = () => {
  return (
    <BoxLayout>
      <Flex gap={10}>
        <VStack spacing={5} w="full" align="flex-end" justify="center">
          <Text
            as="h1"
            fontSize="28px"
            fontWeight="700"
            lineHeight="37px"
            color="secondary.100"
          >
            Old Vision
          </Text>

          <Text fontSize="16px" fontWeight="400" textAlign="right">
            Mirpur Tours and Travels is a well-known and reputed Hajj-Umrah and
            Air Ticketing Agency. We provide Hajj and Umrah packages along with
            online services as well as the opportunity of opening hajj.
          </Text>
        </VStack>
        <Flex w="full">
          <Image src="/img/oldVision.png" alt="image" />
        </Flex>
      </Flex>
    </BoxLayout>
  );
};

export default OldVision;
