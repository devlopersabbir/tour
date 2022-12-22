import React from "react";
import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Carousels = () => {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Image src="/img/shape.png" alt="Shape" position="absolute" />
          <Flex
            w="full"
            h="full"
            p="6"
            justify="space-around"
            color="tomato"
            flexDir="column"
          >
            <Text
              as="h1"
              fontSize="4xl"
              fontWeight="bold"
              color="blackAlpha.800"
            >
              Hajj
            </Text>
            <VStack
              align="left"
              borderLeft="4px"
              borderLeftColor="blackAlpha.900"
              pl="2"
            >
              <Text
                as="h3"
                textTransform="uppercase"
                fontSize="md"
                fontWeight="medium"
              >
                Total Pilgrims
              </Text>
              <Text as="h1" fontSize="5xl" lineHeight={0.7} fontWeight="bold">
                3200+
              </Text>
              <Text as="p" fontStyle="italic" fontSize="md">
                Scince 1992-2019
              </Text>
            </VStack>
          </Flex>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Image src="/img/shape.png" alt="Shape" position="absolute" />
          <Flex
            w="full"
            h="full"
            p="6"
            justify="space-around"
            color="tomato"
            flexDir="column"
          >
            <Text
              as="h1"
              fontSize="4xl"
              fontWeight="bold"
              color="blackAlpha.800"
            >
              Umrah
            </Text>
            <VStack
              align="left"
              borderLeft="4px"
              borderLeftColor="blackAlpha.900"
              pl="2"
            >
              <Text
                as="h3"
                textTransform="uppercase"
                fontSize="md"
                fontWeight="medium"
              >
                Total Pilgrims
              </Text>
              <Text as="h1" fontSize="5xl" lineHeight={0.7} fontWeight="bold">
                3200+
              </Text>
              <Text as="p" fontStyle="italic" fontSize="md">
                Scince 1992-2019
              </Text>
            </VStack>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousels;
