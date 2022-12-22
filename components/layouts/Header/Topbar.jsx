import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  {
    link: "#",
    Icon: FaFacebook,
  },
  {
    link: "#",
    Icon: FaInstagram,
  },
  {
    link: "#",
    Icon: FaLinkedin,
  },
  {
    link: "#",
    Icon: FaTwitter,
  },
  {
    link: "#",
    Icon: FaYoutube,
  },
];

const Topbar = () => {
  return (
    <Box w="100%" bg="brand.100" padding={{ base: 4, md: 3, lg: 2 }}>
      <Container maxW="container.lg">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justifyContent="space-between"
          gap={4}
        >
          <Flex
            color="#F4F6F9"
            align="center"
            gap={{ base: 0, md: 4 }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex align="center" gap={2}>
              <HiOutlineMail />
              <Text>info@mirpurtoursandtravels.com</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <HiPhone />
              <Text>+8801988877799</Text>
            </Flex>
          </Flex>
          <Flex align="center" gap={3} color="white">
            {socialLinks.map((item) => (
              <SocialLink
                link={item.link}
                icon={<item.Icon fontSize="20px" />}
              />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

const SocialLink = ({ link, icon }) => {
  return <Link href={link}>{icon}</Link>;
};

export default Topbar;
