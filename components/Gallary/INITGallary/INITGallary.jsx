import {
  Box,
  Center,
  Divider,
  Image,
  Stack,
  Text,
  Grid,
} from "@chakra-ui/react";
import React from "react";

const INITGallary = ({ title, date }) => {
  return (
    <Stack w="full">
      <Text fontSize={{ base: "18px", md: "24px" }} fontWeight="700">
        {title} - ({date})
      </Text>
      <Divider borderBottom="1px" borderBottomColor="#BDBDBD" />

      {/* gallary slider here */}

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Center w="full" boxShadow="lg" bg="yellow.100" rounded="lg">
          {/* <Image src="/img/artical1.png" alt="image" objectFit="cover" /> */}
        </Center>
        <Center
          w="370px"
          maxW="full"
          h="300px"
          maxH="full"
          boxShadow="lg"
          bg="yellow.100"
          rounded="lg"
        >
          {/* <Image src="/img/artical1.png" alt="image" objectFit="cover" /> */}
        </Center>
        <Center w="full" boxShadow="lg" bg="yellow.100" rounded="lg">
          {/* <Image src="/img/artical1.png" alt="image" objectFit="cover" /> */}
        </Center>
        <Center w="full" boxShadow="lg" bg="yellow.100" rounded="lg">
          {/* <Image src="/img/artical1.png" alt="image" objectFit="cover" /> */}
        </Center>
        <Center w="full" boxShadow="lg" bg="yellow.100" rounded="lg">
          {/* <Image src="/img/artical1.png" alt="image" objectFit="cover" /> */}
        </Center>
      </Grid>
    </Stack>
  );
};

export default INITGallary;
