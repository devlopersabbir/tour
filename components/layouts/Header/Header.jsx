import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Topbar from "./Topbar";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

const navLinks = [
  {
    link: "/",
    text: "Home",
  },

  {
    link: "/about-us",
    text: "About",
  },
  {
    link: "/hajiumrah",
    text: "Haji & Umrah",
  },
  {
    link: "/flight",
    text: "Flight",
  },
  {
    link: "/notice",
    text: "Notice",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const btnRef = useRef(null);
  return (
    <>
      <Box boxShadow="md">
        <Topbar />
        <Container maxW="container.lg">
          <Flex height="100px" align="center" justify="space-between">
            <Link href="/">
              <Image src="/img/logo.png" width="126" height="64" />
            </Link>
            <Flex align="center" gap={4} display={{ base: "none", md: "flex" }}>
              {navLinks.map((item) => (
                <NavLink
                  text={item.text}
                  active={item.link === "/"}
                  link={item.link}
                />
              ))}
              <Button
                color="white"
                size="lg"
                bg="tomato"
                _hover={{ bg: "red.400", transition: "ease all 0.3s" }}
              >
                Let's Talk
              </Button>
            </Flex>
            <IconButton
              color="tomato"
              onClick={() => setIsOpen(true)}
              display={{ base: "block", md: "none" }}
              size="lg"
              aria-label="menu-toggle"
              colorScheme="yellow"
              variant="ghost"
              ref={btnRef}
              icon={<Icon as={AiOutlineMenu} fontSize="3xl" />}
            />
          </Flex>
        </Container>
      </Box>
      <MobileMenu
        isOpen={isOpen}
        navLinks={navLinks}
        onClose={onClose}
        btnRef={btnRef}
      />
    </>
  );
};

const NavLink = ({ active, text, link }) => {
  return (
    <Link href={link}>
      <Text
        fontSize="16px"
        fontWeight={500}
        color={active ? "primary.100" : "text.title"}
      >
        {text}
      </Text>
    </Link>
  );
};
export default Header;
