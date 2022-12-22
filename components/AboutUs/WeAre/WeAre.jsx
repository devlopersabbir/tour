import { Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BoxLayout from "../../layouts/BoxLayout";

const WeAre = () => {
  return (
    <BoxLayout>
      <Flex gap={10} align="center">
        <VStack w="40%" p="6" boxShadow="2xl" bg="white" rounded="lg">
          <Stack>
            <Image src="/img/chirman2.png" alt="chirman" w="full" h="full" />
          </Stack>
          <Text fontSize="16px" fontWeight="400" color="secondary.100">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit liqua dolor do amet sint. Velit officia This is a
            lol consequat duis enim velit mollit. Exercitation veniam consequat
            sunt nostrud amet.
          </Text>
          <Flex justify="space-between" align="center" w="full">
            <VStack spacing={0}>
              <Text fontSize="16px" fontWeight="500" color=" secondary.100">
                Alhaj Md Abdul Mannan
              </Text>
              <HStack w="full">
                <Text
                  as="span"
                  w="55px"
                  h="5px"
                  bg="blackAlpha.900"
                  rounded="full"
                ></Text>
                <Text
                  as="span"
                  color="secondary.100"
                  fontStyle="italic"
                  fontSize="16px"
                  fontWeight="400"
                >
                  Chairman
                </Text>
              </HStack>
            </VStack>

            <Image src="/img/quote-right.png" alt="right" />
          </Flex>
        </VStack>
        <VStack w="60%" align="left" spacing={5}>
          <Text
            as="h1"
            fontSize="28px"
            fontWeight="700"
            lineHeight="37px"
            color="secondary.100"
          >
            We Are!
          </Text>

          <article>
            <Text fontSize="16px" fontWeight="400">
              Mirpur Tours and Travels is a well-known and reputed Hajj-Umrah
              and Air Ticketing Agency. We provide Hajj and Umrah packages along
              with online services as well as the opportunity of opening hajj
              flights for 27 years. Your Service is our top Concern. Mirpur
              Tours and Travels is a well-known and reputed Hajj-Umrah and Air
              Ticketing Agency. We provide Hajj and Umrah packages along with
              online services as well as the opportunity of opening hajj flights
              for 27 years. Your Service is our top Concern.
            </Text>
            <br></br>
            <Text fontSize="16px" fontWeight="400">
              Mirpur Tours and Travels is a well-known and reputed Hajj-Umrah
              and Air Ticketing Agency. We provide Hajj and Umrah packages along
              with online services as well as the opportunity of opening hajj
              flights for 27 years. Your Service is our top Concern.
            </Text>
          </article>
        </VStack>
      </Flex>
    </BoxLayout>
  );
};

export default WeAre;
