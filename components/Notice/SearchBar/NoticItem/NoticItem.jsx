import { VStack, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BsCalendar } from "react-icons/bs";

const NoticItem = () => {
  return (
    <>
      <VStack align="left" bg="white" p="6" rounded="xl" boxShadow="lg">
        <HStack color="primary.100">
          <Icon as={BsCalendar} />
          <Text as="p" fontSize={{ base: "16px", sm: "18px" }}>
            13 Jun 2021
          </Text>
        </HStack>
        <Text
          color="secondari.100"
          fontSize={{ base: "16px", sm: "18px" }}
          lineHeight="30px"
        >
          Medina is a city in western Saudi Arabia. In the city center, the vast
          Al-Masjid an-Nabawi (Prophet’s Mosque) is a major Islamic pilgrimage
          site.
        </Text>
      </VStack>
    </>
  );
};

export default NoticItem;
