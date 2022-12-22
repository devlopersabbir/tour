import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const MobileMenu = ({ isOpen, onClose, btnRef, navLinks }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent bg="background.100">
        <DrawerCloseButton />

        <DrawerBody p={5}>
          <VStack spacing={4}>
            {navLinks.map((item) => (
              <Link href={item.link}>{item.text}</Link>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
