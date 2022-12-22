import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineEye } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { TbDetails } from "react-icons/tb";

const HeaderCard = () => {
  return (
    <Card
      width="570px"
      bg="white"
      height="350px"
      marginTop="-175px"
      zIndex={3}
      p={4}
    >
      <CardBody h="full">
        <Flex h="full">
          <Stack justify="space-between" h="full" flex={2}>
            <Heading
              as="h3"
              fontWeight={700}
              fontSize="28px"
              lineHeight="36.4px"
            >
              Express <br /> Haji Package
            </Heading>
            <Stack spacing={4}>
              <Flex align="center" gap={2}>
                <BiTimeFive fontSize="24px" />
                <Text fontWeight={400} fontSize="16px">
                  40 Days
                </Text>
              </Flex>
              <Flex align="center" gap={2}>
                <BiTimeFive fontSize="24px" />
                <Text fontWeight={400} fontSize="16px">
                  Availabilty : 21 July
                </Text>
              </Flex>
              <Flex align="center" gap={2}>
                <TbDetails fontSize="24px" />
                <Text fontWeight={400} fontSize="16px">
                  Bangladesh Arilince
                </Text>
              </Flex>
            </Stack>
          </Stack>
          <Stack justify="space-between" h="full" flex={1}>
            <Flex direction="column">
              <Text fontSize="16px" fontWeight={400}>
                From
              </Text>
              <Text
                fontWeight={700}
                fontSize="20px"
                lineHeight="26px"
                color="primary.100"
              >
                3,60,000tk
              </Text>
            </Flex>
            <Flex
              padding="15px 18px"
              borderRadius="10px"
              width="124px"
              height="60px"
              bg="#D3F2ED"
              align="center"
              gap={2}
            >
              <HiOutlineEye fontSize="28px" color="#1EAD95" />
              <Text fontSize="18px" fontWeight={700} color="#1EAD95">
                2540
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default HeaderCard;
