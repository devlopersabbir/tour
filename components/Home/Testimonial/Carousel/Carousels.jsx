import React from "react";
import { Flex, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { BsStarFill } from "react-icons/bs";

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
          <Flex p={10} ml={20} boxShadow="xl" rounded="2xl">
            <Image
              src="/img/testi.png"
              alt="testi1"
              position="absolute"
              left={0}
            />

            {/* content */}
            <VStack ml={10}>
              <Text as="p" fontSize="lg" pb="5">
                I went to Hajj in 2013 with this group. The Imam that
                coordinates this group is truly an amazing individual. This was
                the most spiritual uplifting experience of my life. I intend to
                go again with this group. but their tents are far more upgraded
                and well kept than the rest.
              </Text>

              <Flex justify="space-between" w="full" align="center">
                <HStack spacing={10}>
                  <VStack align="left" spacing={0}>
                    <HStack color="yellow.400" pb="3">
                      <Icon as={BsStarFill} />
                      <Icon as={BsStarFill} />
                      <Icon as={BsStarFill} />
                      <Icon as={BsStarFill} />
                      <Icon as={BsStarFill} />
                    </HStack>
                    <Text as="h2" fontWeight="bold">
                      Hafez Abu Said
                    </Text>
                    <Text>24 Oct 2023</Text>
                  </VStack>
                  <Image src="/img/video.png" alt="video" />
                </HStack>
                <Image src="/img/quote-right.png" alt="qoute" />
              </Flex>
            </VStack>
          </Flex>
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Flex p={10} ml={20} boxShadow="xl" rounded="2xl">
            <Image
              src="/img/testi.png"
              alt="testi1"
              position="absolute"
              left={0}
            />

            {/* content */}
            <VStack ml={10}>
              <Text as="p" fontSize="lg" pb="5">
                I went to Hajj in 2013 with this group. The Imam that
                coordinates this group is truly an amazing individual. This was
                the most spiritual uplifting experience of my life. I intend to
                go again with this group. but their tents are far more upgraded
                and well kept than the rest.
              </Text>

              <Flex justify="space-between" w="full" align="center">
                <HStack spacing={10}>
                  <VStack align="left" spacing={0}>
                    <HStack color="yellow.400" pb="3">
                      <Icon as={BsStarFill} />
                      <Icon as={BsStarFill} />
                      <Icon as={BsStarFill} />
                      <Icon as={BsStarFill} />
                      <Icon as={BsStarFill} />
                    </HStack>
                    <Text as="h2" fontWeight="bold">
                      Hafez Abu Said
                    </Text>
                    <Text>24 Oct 2023</Text>
                  </VStack>
                  <Image src="/img/video.png" alt="video" />
                </HStack>
                <Image src="/img/quote-right.png" alt="qoute" />
              </Flex>
            </VStack>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousels;
