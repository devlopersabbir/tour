import {
  Center,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import BoxLayout from "../../layouts/BoxLayout";
import Items from "./Item/Items";

const postAritcle = [
  {
    image: "/img/artical1.png",
    title: "What is Makkah",
    link: "/1",
  },
  {
    image: "/img/artical2.png",
    title: "What is Madina",
    link: "/2",
  },
  {
    image: "/img/artical3.png",
    title: "What is Haj",
    link: "/3",
  },
  {
    image: "/img/artical2.png",
    title: "What is Madina",
    link: "/2",
  },
];

const Artical = () => {
  return (
    <BoxLayout>
      <Center mb={5}>
        <Text as="h1" fontWeight="bold" fontSize="2xl">
          Usefull Articles
        </Text>
      </Center>
      <Flex p={2} gap={5} w="full" flexWrap="wrap">
        {postAritcle.map((item, index) => (
          <Items
            key={index}
            title={item.title}
            link={item.link === "/"}
            image={item.image}
          />
        ))}
      </Flex>
    </BoxLayout>
  );
};

export default Artical;
