import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import BoxLayout from "../layouts/BoxLayout";
import Form from "./Form/Form";

const Flight = () => {
  return (
    <BoxLayout>
      <Stack spacing={4} color="secondary.100">
        <Text as="h2" fontSize={["24px", "28px"]} fontWeight="700">
          Send us your flight bookings requirements
        </Text>
        <Text fontSize="16px" fontWeight="400">
          Kindly fill in the details below to let us know your desired booking
          preference. One of our agents will get back to your with best flight
          booking options as soon as possible.
        </Text>
      </Stack>
      <Flex mt={[2, 5]} flexDir="column">
        <Form />
      </Flex>
    </BoxLayout>
  );
};

export default Flight;
