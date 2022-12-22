import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import BoxLayout from "../../layouts/BoxLayout";
import Carousels from "./Carousel/Carousels";

const Testimonial = () => {
  return (
    <BoxLayout>
      <Center textAlign="center">
        <Text as="h1" fontWeight="bold" fontSize="2xl">
          We help to achieve<br></br> mutual goals.
        </Text>
      </Center>

      <Box w="full" h="auto" position="relative" overflow="hidden">
        {/* testimonial */}
        <Carousels />
      </Box>
    </BoxLayout>
  );
};
export default Testimonial;
