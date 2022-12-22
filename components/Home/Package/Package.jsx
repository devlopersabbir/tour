import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowRight, BsStopwatch } from "react-icons/bs";
import BoxLayout from "../../layouts/BoxLayout";

const Package = () => {
  return (
    <BoxLayout>
      <Stack align="center" textAlign="center" mb={5}>
        <Text as="h1" fontWeight="bold" fontSize="2xl">
          Hajj Package
        </Text>
        <Text as="p">
          We are the authorized/appointed Hajj Travel Agents in Bangladesh
          <br></br> by Saudi Hajj Ministry.
        </Text>
      </Stack>
      <Tabs variant="unstyled" pt="5">
        <TabList justifyContent="center" w="full" mb={10}>
          <Flex
            shadow="base"
            rounded="md"
            p="1"
            gap={2}
            transition="ease all"
            transitionDuration="0.3s"
          >
            <Tab
              bg="transparent"
              color="blackAlpha.900"
              rounded="md"
              px={10}
              fontWeight="semibold"
              _selected={{ color: "white", bg: "tomato" }}
            >
              Hajj
            </Tab>
            <Tab
              bg="transparent"
              color="blackAlpha.900"
              rounded="md"
              px={10}
              fontWeight="semibold"
              _selected={{ color: "white", bg: "tomato" }}
            >
              Umrah
            </Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex w="full" boxShadow="lg" rounded="lg" bg="white" gap={7} p={7}>
              <VStack p={5} align="left" w="full" h="full" rounded="3xl">
                <Text as="h2" fontWeight="bold" fontSize="xl" pb={2}>
                  Normal
                </Text>
                <Stack spacing={3} pb={3}>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                </Stack>
                <VStack align="left" spacing={0} pb={3}>
                  <Text>From</Text>
                  <Text as="h3" fontWeight="bold">
                    5,36,000tk
                  </Text>
                </VStack>

                <VStack align="center">
                  <Button
                    variant="ghost"
                    border="1px"
                    borderColor="tomato"
                    color="blackAlpha.900"
                    fontWeight="semibold"
                    rightIcon={<BsArrowRight />}
                    _hover={{ bg: "tomato", color: "white" }}
                  >
                    Book Now
                  </Button>
                </VStack>
              </VStack>
              <VStack
                align="left"
                bg="#1e284b"
                p={5}
                color="white"
                w="full"
                h="full"
                mt={-10}
                rounded="3xl"
                sx={{
                  backgroundImage: "url(/img/package-BG-shape.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Text
                  as="h2"
                  fontWeight="bold"
                  fontSize="xl"
                  pb={3}
                  color="tomato"
                >
                  Express
                </Text>
                <Stack spacing={3} pb={3}>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                </Stack>
                <VStack align="left" spacing={0} pb={4}>
                  <Text>From</Text>
                  <Text as="h3" fontWeight="bold" color="tomato">
                    5,36,000tk
                  </Text>
                </VStack>

                <VStack align="center">
                  <Button
                    variant="solid"
                    border="1px"
                    borderColor="tomato"
                    _hover={{
                      borderColor: "tomato",
                      text: "blackAlpha.900",
                      bg: "unset",
                    }}
                    color="white"
                    bg="tomato"
                    fontWeight="semibold"
                    rightIcon={<BsArrowRight />}
                  >
                    Book Now
                  </Button>
                </VStack>
              </VStack>
              <VStack p={5} align="left" w="full" h="full" rounded="3xl">
                <Text as="h2" fontWeight="bold" fontSize="xl" pb={2}>
                  Normal
                </Text>
                <Stack spacing={3} pb={3}>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                </Stack>
                <VStack align="left" spacing={0} pb={3}>
                  <Text>From</Text>
                  <Text as="h3" fontWeight="bold">
                    5,36,000tk
                  </Text>
                </VStack>

                <VStack align="center">
                  <Button
                    variant="ghost"
                    border="1px"
                    borderColor="tomato"
                    color="blackAlpha.900"
                    fontWeight="semibold"
                    rightIcon={<BsArrowRight />}
                    _hover={{ bg: "tomato", color: "white" }}
                  >
                    Book Now
                  </Button>
                </VStack>
              </VStack>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex rounded="lg" w="full" boxShadow="lg" bg="white" gap={7} p={7}>
              <VStack p={5} align="left" w="full" h="full" rounded="3xl">
                <Text as="h2" fontWeight="bold" fontSize="xl" pb={2}>
                  Normal 2
                </Text>
                <Stack spacing={3} pb={3}>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                </Stack>
                <VStack align="left" spacing={0} pb={3}>
                  <Text>From</Text>
                  <Text as="h3" fontWeight="bold">
                    5,36,000tk
                  </Text>
                </VStack>

                <VStack align="center">
                  <Button
                    variant="ghost"
                    border="1px"
                    borderColor="tomato"
                    color="blackAlpha.900"
                    fontWeight="semibold"
                    rightIcon={<BsArrowRight />}
                    _hover={{ bg: "tomato", color: "white" }}
                  >
                    Book Now
                  </Button>
                </VStack>
              </VStack>
              <VStack
                align="left"
                bg="#1e284b"
                p={5}
                color="white"
                w="full"
                h="full"
                mt={-10}
                rounded="3xl"
                sx={{
                  backgroundImage: "url(/img/package-BG-shape.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Text
                  as="h2"
                  fontWeight="bold"
                  fontSize="xl"
                  pb={3}
                  color="tomato"
                >
                  Express 2
                </Text>
                <Stack spacing={3} pb={3}>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                </Stack>
                <VStack align="left" spacing={0} pb={4}>
                  <Text>From</Text>
                  <Text as="h3" fontWeight="bold" color="tomato">
                    5,36,000tk
                  </Text>
                </VStack>

                <VStack align="center">
                  <Button
                    variant="solid"
                    border="1px"
                    borderColor="tomato"
                    _hover={{
                      borderColor: "tomato",
                      text: "blackAlpha.900",
                      bg: "unset",
                    }}
                    color="white"
                    bg="tomato"
                    fontWeight="semibold"
                    rightIcon={<BsArrowRight />}
                  >
                    Book Now
                  </Button>
                </VStack>
              </VStack>
              <VStack p={5} align="left" w="full" h="full" rounded="3xl">
                <Text as="h2" fontWeight="bold" fontSize="xl" pb={2}>
                  Normal 2
                </Text>
                <Stack spacing={3} pb={3}>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={BsStopwatch} />
                    <Text>40 days</Text>
                  </HStack>
                </Stack>
                <VStack align="left" spacing={0} pb={3}>
                  <Text>From</Text>
                  <Text as="h3" fontWeight="bold">
                    5,36,000tk
                  </Text>
                </VStack>

                <VStack align="center">
                  <Button
                    variant="ghost"
                    border="1px"
                    borderColor="tomato"
                    color="blackAlpha.900"
                    fontWeight="semibold"
                    rightIcon={<BsArrowRight />}
                    _hover={{ bg: "tomato", color: "white" }}
                  >
                    Book Now
                  </Button>
                </VStack>
              </VStack>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </BoxLayout>
  );
};

export default Package;
