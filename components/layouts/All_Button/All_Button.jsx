import React from "react";
import { Button } from "@chakra-ui/react";

const All_Button = ({ text, rightIcon }) => {
  return (
    <Button id="all_Button" size="lg" rightIcon={rightIcon}>
      {text}
    </Button>
  );
};

export default All_Button;
