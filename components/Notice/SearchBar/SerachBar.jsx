import {
  Center,
  Container,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsCalendar, BsSearch } from "react-icons/bs";
import NoticItem from "./NoticItem/NoticItem";

const SerachBar = () => {
  return (
    <Container maxW="container.md" mt={14}>
      <Center>
        <InputGroup>
          <InputLeftElement>
            <Icon as={BsSearch} />
          </InputLeftElement>
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </Center>

      <Flex flexDir="column" gap={5} mt={10}>
        <NoticItem />
        <NoticItem />
        <NoticItem />
        <NoticItem />
        <NoticItem />
        <NoticItem />
        <NoticItem />
      </Flex>
    </Container>
  );
};

export default SerachBar;
