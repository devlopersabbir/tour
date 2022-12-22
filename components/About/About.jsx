import React from "react";
import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import All_Button from "../layouts/All_Button/All_Button";
import { BsArrowRight } from "react-icons/bs";
// data
import { aboutus } from "../../Data/Data";
import AboutUsImage from "../../public/img/aboutus.png";
import Carousels from "./Carousel/Carousels";
import Link from "next/link";
import BoxLayout from "../layouts/BoxLayout";

const About = () => {
  return (
    <BoxLayout>
      <Flex flexDir="row" w="full">
        <Box mr="32" position="relative">
          <Stack align="left">
            <Image
              w="370px"
              h="470px"
              objectFit="cover"
              src="/img/aboutus.png"
              alt="about us image"
            />
            <HStack ml={-20}>
              <Image src="/img/chirman.png" alt="chirman" />

              <VStack w="full" align="left">
                <Text as="h3" fontWeight="medium">
                  Alhaj Mohammad
                </Text>
                <Text as="h3" fontWeight="medium">
                  Abdul Mannan
                </Text>
                <HStack>
                  <Text
                    as="span"
                    w="55px"
                    h="5px"
                    bg="blackAlpha.900"
                    rounded="full"
                  ></Text>
                  <Text as="span">Chairman</Text>
                </HStack>
              </VStack>
            </HStack>
          </Stack>

          {/* card */}
          <Box
            w="237px"
            h="300px"
            position="absolute"
            bottom={0}
            right={-28}
            boxShadow="md"
            bg="white"
            rounded="lg"
          >
            <Carousels />
          </Box>
        </Box>
        <VStack align="left" w="50%" justify="center">
          <Text
            as="h1"
            mb={2}
            fontWeight="bold"
            fontSize="2xl"
            color="blackAlpha.800"
          >
            {aboutus.title}
          </Text>
          <Text as="p" pb={5}>
            {aboutus.description}
          </Text>
          <Link href={"/"}>
            <All_Button text={"Read More"} rightIcon={<BsArrowRight />} />
          </Link>
        </VStack>
      </Flex>
    </BoxLayout>
  );
};

export default About;
