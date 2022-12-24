import {
  Checkbox,
  Flex,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  HiLocationMarker,
  HiMail,
  HiOutlineUser,
  HiPhoneOutgoing,
  HiUpload,
} from "react-icons/hi";
import All_Button from "../../layouts/All_Button/All_Button";
import {
  adultOption,
  children,
  classs,
  infants,
  parfectAirline,
} from "../Data/Data";

const Form = () => {
  return (
    <>
      <form>
        <Stack spacing={[2, 8]} direction={["column", "row"]}>
          <Checkbox size="lg" colorScheme="blue" defaultChecked>
            ROUND TRIP
          </Checkbox>
          <Checkbox size="lg" colorScheme="orange">
            ONE WAY
          </Checkbox>
          <Checkbox size="lg" colorScheme="purple">
            MULTI CITY
          </Checkbox>
        </Stack>
        <VStack mt={[3, 8]} spacing={[3, 7]}>
          {/* from and to */}
          <Flex w="full" flexDir={["column", "row"]} gap={[2, 5]}>
            <WithLabel
              id="from"
              name="from"
              icon={HiLocationMarker}
              placeholder="Enter city"
              type="text"
              key={0}
            />
            <WithLabel
              id="to"
              name="to"
              icon={HiLocationMarker}
              placeholder="Enter city"
              type="text"
              key={0}
            />
          </Flex>
          {/* journy date */}
          <Flex w="full" flexDir={["column", "row"]} gap={[2, 5]}>
            <WithLabel
              name="Journey Date"
              id="journeyDate"
              type="date"
              key={1}
            />
            <WithLabel
              name="return date (optional)"
              id="returnDate"
              type="date"
              key={2}
            />
          </Flex>
          {/* all select option */}
          <Flex w="full" flexDir={["column", "row"]} gap={[2, 5]}>
            <SelectOption
              name="adults"
              placeholder="01 Audlt"
              option={adultOption}
            />
            <SelectOption
              name="children (2-12)"
              option={children}
              placeholder="02 Children"
            />
            <SelectOption
              name="infents (0-2)"
              placeholder="01 Infent"
              option={infants}
            />
          </Flex>
          <Flex w="full" flexDir={["column", "row"]} gap={[2, 5]}>
            <SelectOption
              name="class"
              placeholder="All Class/Cabin"
              option={classs}
            />
            <SelectOption
              name="PREFERRED AIRLINE"
              option={parfectAirline}
              placeholder="Select"
            />
          </Flex>
          {/* name phone number */}
          <Flex w="full" flexDir={["column", "row"]} gap={[2, 5]}>
            <WithLabel
              icon={HiOutlineUser}
              id="fullName"
              name="Full Name"
              placeholder="Your name"
              type="text"
              key={10}
            />
            <WithLabel
              icon={HiPhoneOutgoing}
              id="mobileNo"
              name="mobile no."
              placeholder="+880"
              type="number"
              key={12}
            />
          </Flex>
          <Flex w="full" flexDir={["column", "row"]} gap={[2, 5]}>
            <WithLabel
              icon={HiMail}
              id="mail"
              name="email"
              placeholder="Valid email"
              type="email"
              key={13}
            />
            <Stack w="full">
              <FormLabel
                htmlFor="file"
                fontSize="14px"
                lineHeight="10px"
                textTransform="uppercase"
                fontWeight="500"
              >
                PASSPORT COPY (OPTIONAL)
              </FormLabel>
              <InputGroup
                border="1px"
                borderColor="secondary.100"
                py={5}
                fontWeight="500"
                fontSize="16px"
                borderRadius="6px"
                position="relative"
              >
                <Input
                  type="file"
                  id="file"
                  w="full"
                  placeholder="Passport copy"
                  display="none"
                />
                <Text pos="absolute" left={4} opacity={0.7} top={2}>
                  Passport copy
                </Text>
                <label htmlFor="file">
                  <InputRightElement>
                    <Icon as={HiUpload} fontSize="xl" cursor="pointer" />
                  </InputRightElement>
                </label>
              </InputGroup>
            </Stack>
          </Flex>
          <Stack w="full" alignItems="flex-end">
            <All_Button
              rightIcon={<BsArrowRight />}
              text="Submit"
              type="submit"
              key={111}
            />
          </Stack>
        </VStack>
      </form>
    </>
  );
};

export default Form;

const SelectOption = ({ name, option, placeholder }) => {
  return (
    <Stack w="100%">
      <FormLabel
        htmlFor="none"
        fontSize="14px"
        lineHeight="10px"
        textTransform="uppercase"
        fontWeight="500"
      >
        {name}
      </FormLabel>
      <Select
        placeholder={placeholder}
        border="1px"
        borderColor="secondary.100"
      >
        {option.map((item, index) => {
          <option value={item.adult} key={index}>
            {item.adult}
          </option>;
        })}
      </Select>
    </Stack>
  );
};

const WithLabel = ({ name, id, type, icon, placeholder }) => {
  return (
    <Stack w="100%">
      <FormLabel
        htmlFor={id}
        fontSize="14px"
        lineHeight="10px"
        textTransform="uppercase"
        fontWeight="500"
      >
        {name}
      </FormLabel>
      <InputProps
        type={type}
        id={id}
        icon={icon && icon}
        placeholder={placeholder && placeholder}
        key={0}
      />
    </Stack>
  );
};

const InputProps = ({ type, icon, id, placeholder }) => {
  return (
    <InputGroup>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        border="1px"
        borderColor="secondary.100"
        py={5}
        fontWeight="500"
        fontSize="16px"
        borderRadius="6px"
        w="full"
      />
      {icon ? (
        <InputRightElement>
          <Icon as={icon} fontSize="xl" />
        </InputRightElement>
      ) : null}
    </InputGroup>
  );
};
