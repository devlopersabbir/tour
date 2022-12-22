import { Flex, Grid, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BoxLayout from "../../layouts/BoxLayout";
import Item from "./Item/Item";

const MeetOurTeam = () => {
  return (
    <BoxLayout>
      <Text
        textAlign="center"
        as="h1"
        textTransform="capitalize"
        fontSize="36px"
        fontWeight="700"
        mb={10}
      >
        meet our team
      </Text>
      <Flex flexWrap="wrap" gap={8} align="center" justify="flex-start">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Flex>
    </BoxLayout>
  );
};

export default MeetOurTeam;
