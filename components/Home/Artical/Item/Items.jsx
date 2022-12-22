import { HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Items = ({ title, image, link }) => {
  console.log(image, title);
  return (
    <VStack boxShadow="base" p={2} rounded="2xl" spacing={5}>
      <Image src={image} alt="artical1" />
      <HStack pb={3} justify="space-between" align="center" spacing={5}>
        <Text as="h1" fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        {/* <Link href={link}> */}
        <IconButton id="all_Button" icon={<BsArrowRight />} />
        {/* </Link> */}
      </HStack>
    </VStack>
  );
};

export default Items;
