import { Icon, InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import React from "react";

const Inputs = ({ id, type, placeholder, icon }) => {
  return (
    <InputGroup>
      <Input
        required
        id={id}
        type={type}
        placeholder={placeholder}
        border="1px"
        borderColor="secondary.100"
        py={5}
        fontWeight="500"
        fontSize="16px"
        borderRadius="6px"
      />
      <InputRightElement>
        <Icon as={icon} fontSize="xl" />
      </InputRightElement>
    </InputGroup>
  );
};

export default Inputs;
