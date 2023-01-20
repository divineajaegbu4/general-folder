import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function StyledProps() {
  const group = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "250px",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
    px: 4,
    background:
      "url(https://picsum.photos/id/1080/200/300) center/cover no-repeat",
  };

  const outerBoxStyles = {
    boxSize: "250px",
    p: "10",
    background:
      "url(https://picsum.photos/id/1068/200/300) center/cover no-repeat",
  };

  const innerBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "full",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
  };
  return (
    <div>
      <Box m={2}>Tomato</Box>
      <Box maxW="960px" mx="auto" color="gray.100">
        gray
      </Box>
      <Box
        m={[2, 10]}
        color="#f00"
        bgGradient="linear(to-r, crimson, purple.50)"
      >
        white
      </Box>
      <Box bg="tomato">tomato background</Box>
      {/* Text */}
      <Text
        fontSize="sm"
        textAlign={["left", "center"]}
        bg={["purple"]}
        color="white"
        boxSize="200"
      >
        Typography
      </Text>
      {/* Flex */}
      <Box display="flex" alignItems="center" justifyContent="center">
        Box with Flex props
      </Box>
      <Flex align="center" justify="center">
        <li>Orange</li>
        <li>Male</li>
        <li>Female</li>
      </Flex>
      {/* Grid */}
      <Box display="grid" gridGap={2} gridAutoFlow="row dense">
        Grid
      </Box>
      <Grid gap={2} autoFlow="row dense" gridTemplateColumns="repeat(2, 300px)">
        <li>Orange</li>
        <li>Male</li>
        <li>Female</li>
        <li>Orange</li>
        <li>Male</li>
        <li>Female</li>
      </Grid>
      {/* Border */}
      <Box
        border="1px solid red"
        borderTopWidth="30px"
        borderTopRightRadius="20px"
      >
        Card
      </Box>
      {/* Position */}
      <Box position="absolute" zIndex="10">
        Cover
      </Box>
      {/* SimpleGrid */}
      <SimpleGrid
        bg="gray.50"
        columns={{ md: 4, sm: 2 }}
        spacing="8"
        p="10"
        textAlign="center"
        rounded="lg"
        color="gray.400"
      >
        <Box boxShadow="xs" p="6" rounded="md" bg="white">
          xs
        </Box>
        <Box boxShadow="sm" p="6" rounded="md" bg="white">
          sm
        </Box>
        <Box boxShadow="base" p="6" rounded="md" bg="white">
          Base
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          md
        </Box>
        <Box boxShadow="lg" p="6" rounded="md" bg="white">
          lg
        </Box>
        <Box boxShadow="xl" p="6" rounded="md" bg="white">
          xl
        </Box>
        <Box boxShadow="2xl" p="6" rounded="md" bg="white">
          2xl
        </Box>
        <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
          Dark lg
        </Box>
        <Box boxShadow="outline" p="6" rounded="md" bg="white">
          Outline
        </Box>
        <Box boxShadow="inner" p="6" rounded="md" bg="white">
          Inner
        </Box>
      </SimpleGrid>

      {/* TextShadow */}

      <Text textShadow="1px 1px #ff0000" marginTop="-6">
        Text with shadows
      </Text>

      {/* Filter */}

      <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
        {/* adding filter property to the element */}
        <Box sx={group} filter="grayscale(80%)">
          Box with Filter
        </Box>
        {/* adding blur property to the element */}
        <Box sx={group} filter="auto" blur="1px">
          Box with Blur
        </Box>
        {/* adding brightness property to the element */}
        <Box sx={group} filter="auto" brightness="40%">
          Box with Brightness
        </Box>
      </Flex>

      {/* Another Filter */}

      <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
        {/* adding backdrop-filter property to the element */}
        <Box sx={outerBoxStyles}>
          <Box sx={innerBoxStyles} backdropFilter="invert(80%)">
            Box with Backdrop Filter
          </Box>
        </Box>
        {/* adding backdrop-blur property to the element */}
        <Box sx={outerBoxStyles}>
          <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="8px">
            Box with Backdrop Blur
          </Box>
        </Box>
        {/* adding backdrop-contrast property to the element */}
        <Box sx={outerBoxStyles}>
          <Box sx={innerBoxStyles} backdropFilter="auto" backdropContrast="30%">
            Box with Backdrop Contrast
          </Box>
        </Box>
      </Flex>

      <Button
        colorScheme="teal"
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        Hover me
      </Button>

      <Box role="group">
        <Box
          _hover={{ fontWeight: "semibold" }}
          _groupHover={{ color: "tomato" }}
        ></Box>
      </Box>

      <Box _before={{ content: '"🙂"', display: "inline-block", mr: "5px" }}>
        A pseudo element
      </Box>

      <Button
        as="a"
        target="_blank"
        variant="outline"
        href="https://chakra-ui.com"
      >
        Hello
      </Button>
    </div>
  );
}

export default StyledProps;
