import {
  Flex,
  FormLabel,
  HStack,
  Icon,
  InputGroup,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  HiMail,
  HiOutlineLocationMarker,
  HiOutlineUser,
  HiPhoneIncoming,
  HiPhoneOutgoing,
} from "react-icons/hi";
import BoxLayout from "../layouts/BoxLayout";
import Inputs from "./Input/Inputs";
import All_Button from "../layouts/All_Button/All_Button";
import { BsArrowRight } from "react-icons/bs";

const ContactUs = () => {
  return (
    <BoxLayout>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        gap="5"
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <VStack
          bg="white"
          boxShadow="lg"
          rounded="lg"
          p={["4", "7"]}
          align="left"
          spacing={["4", "6"]}
          w={{ base: "100%", sm: "70%", md: "50%" }}
        >
          <Text
            as="h1"
            fontSize={["24px", "28px"]}
            color="secondary.100"
            fontWeight="700"
          >
            Office
          </Text>
          <Stack spacing={5}>
            <HStack align="flex-start">
              <Icon
                as={HiOutlineLocationMarker}
                fontSize="xl"
                color="info.main"
              />
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="400"
                color="secondary.100"
              >
                House: 11, Road: 21, Block-C, Section: 10 Mirpur, Dhaka-1216,
                Bangladesh
              </Text>
            </HStack>
            <HStack alignItems="center">
              <Icon as={HiPhoneIncoming} fontSize="xl" color="error.main" />
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="400"
                color="secondary.100"
              >
                +0880 1988877799
              </Text>
            </HStack>
            <HStack alignItems="center">
              <Icon as={HiMail} fontSize="xl" color="success.main" />
              <Stack spacing={0}>
                <Text
                  fontSize={{ base: "14px", md: "16px" }}
                  fontWeight="400"
                  color="secondary.100"
                >
                  mirpurhl1500@gmail.com
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px" }}
                  fontWeight="400"
                  color="secondary.100"
                >
                  info@mirpurtoursandtravels.com
                </Text>
              </Stack>
            </HStack>
          </Stack>
        </VStack>

        <VStack w="100%" spacing={6}>
          <Stack w="full">
            <FormLabel
              htmlFor="fullName"
              fontSize="14px"
              lineHeight="10px"
              textTransform="uppercase"
              fontWeight="500"
            >
              Full Name
            </FormLabel>
            <Inputs
              type="text"
              icon={HiOutlineUser}
              id="fullName"
              placeholder="Your name"
              key={0}
            />
          </Stack>
          <Stack w="full">
            <FormLabel
              htmlFor="mobileNumber"
              fontSize="14px"
              lineHeight="10px"
              textTransform="uppercase"
              fontWeight="500"
            >
              mobile number
            </FormLabel>
            <Inputs
              id="mobileNumber"
              placeholder="+880"
              icon={HiPhoneOutgoing}
              type="number"
              key={2}
            />
          </Stack>
          <Stack w="full">
            <FormLabel
              htmlFor="email"
              fontSize="14px"
              lineHeight="10px"
              textTransform="uppercase"
              fontWeight="500"
            >
              Email
            </FormLabel>
            <Inputs
              id="email"
              type="email"
              placeholder="Valid email"
              icon={HiMail}
              key={3}
            />
          </Stack>
          <Stack w="full">
            <FormLabel
              htmlFor="message"
              fontSize="14px"
              lineHeight="10px"
              textTransform="uppercase"
              fontWeight="500"
            >
              Message
            </FormLabel>
            <InputGroup>
              <Textarea
                required
                id="message"
                placeholder="Text here..."
                border="1px"
                borderColor="secondary.100"
                fontWeight="500"
                fontSize="16px"
                borderRadius="6px"
              />
            </InputGroup>
          </Stack>
          <Stack w="full" alignItems="flex-end">
            <All_Button
              text="Message"
              rightIcon={<BsArrowRight />}
              type="submit"
            />
          </Stack>
        </VStack>
      </Flex>
    </BoxLayout>
  );
};

export default ContactUs;
