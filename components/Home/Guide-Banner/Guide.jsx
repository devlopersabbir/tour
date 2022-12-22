import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import BoxLayout from "../../layouts/BoxLayout";
import All_Button from "../../layouts/All_Button/All_Button";
import { BsArrowRight } from "react-icons/bs";

const Guide = () => {
  return (
    <Box
      my={"20"}
      w="full"
      sx={{
        backgroundImage: "url(/img/downloadBG.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <BoxLayout>
        <Flex align="center" justify="center" py="8" gap={10}>
          <Image src="/img/mokka.png" alt="guide" mt={-20} w="60" />
          <VStack spacing={4}>
            <Text
              as="h1"
              fontWeight="semibold"
              fontSize="2xl"
              color="white"
              lineHeight={1.4}
            >
              Download free<br></br> Hajj Guide
            </Text>
            <All_Button text="Download" rightIcon={<BsArrowRight />} />
          </VStack>
        </Flex>
      </BoxLayout>
    </Box>
  );
};

export default Guide;
