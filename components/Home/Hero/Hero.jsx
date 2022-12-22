import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import All_Button from "../../layouts/All_Button/All_Button";

const Hero = () => {
  return (
    <Box w="100%" mt={2}>
      <Container maxW="container.lg" height="100%">
        <Flex height="600px" align="center" gap={4}>
          <VStack align="flex-start" spacing={5} flex={1}>
            <Heading color="text.title" fontWeight={500} fontSize="48px">
              First of all, With everyone, On the way to Kaaba
            </Heading>
            <All_Button text="Book your seat" rightIcon={<BsArrowRight />} />
          </VStack>
          <Flex flex={1}></Flex>
        </Flex>
      </Container>
      <Box
        w="100%"
        height={{ base: "auto", lg: "301px" }}
        bg="brand.100"
        sx={{
          backgroundImage: "url(/img/shapes.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container maxW="container.lg">
          <Flex
            gap={3}
            align="center"
            direction={{ base: "column", lg: "row" }}
            height={{ base: "auto", lg: "301px" }}
            padding={{ base: 9, lg: 0 }}
          >
            <Item
              title="Adding methanks to"
              subtitle="thanks to adding methanks to adding methanks to adding me"
              iconSrc="/img/eva_calendar-fill.png"
            />
            <Item
              title="Methanks to adding me"
              subtitle="thanks to adding methanks to adding methanks to adding me"
              iconSrc="/img/si-glyph_customer-support.png"
            />
            <Item
              title="Methanks to adding me"
              subtitle="thanks to adding methanks to adding methanks to adding me"
              iconSrc="/img/entypo_price-ribbon.png"
            />
            <Item
              title="thanks to adding me"
              subtitle="thanks to adding methanks to adding methanks to adding me"
              iconSrc="/img/wpf_airplane-takeoff.png"
            />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

const Item = ({ title, subtitle, iconSrc }) => {
  return (
    <VStack align={{ base: "center", lg: "flex-start" }}>
      <Image src={iconSrc} />
      <Text color="white" fontWeight="semibold">
        {title}
      </Text>
      <Text color="whiteAlpha.800">{subtitle}</Text>
    </VStack>
  );
};

export default Hero;
