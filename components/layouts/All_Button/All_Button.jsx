import React from "react";
import { Button } from "@chakra-ui/react";

const All_Button = ({ text, rightIcon, type }) => {
  return (
    <Button
      id="all_Button"
      size="lg"
      rightIcon={rightIcon}
      type={type ? type : "button"}
    >
      {text}
    </Button>
  );
};

export default All_Button;
