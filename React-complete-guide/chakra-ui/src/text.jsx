import React from "react";
import { Box, Button, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";

function TextView() {
  let basicBoxStyles = {
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

  let anotherImage = {
    background:
      "url(https://picsum.photos/id/1080/200/300) center/cover no-repeat",
  };

  const outerBoxStyles = {
    boxSie: "250px",
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
      <h1>I am heading towards Ibafo right now!.</h1>
      <SimpleGrid
        bg="gray.50"
        columns={{ sm: 2, md: 4 }}
        spacing="8"
        p="10"
        textAlign="center"
        rounded="lg"
        color="gray.400"
      >
        <Box
          sx={basicBoxStyles}
          filter="auto"
          blur="2px"
          m={2}
          color="red"
          bg="black"
          w="100px"
          pl={5}
        >
          Tomato
        </Box>
        <Box
          display={"flex"}
          w="700px"
          justifyContent={"space-between"}
          alignItems="center"
          sx={basicBoxStyles}
          backdropFilter="auto"
          backdropContrast="30%"
          //   backdropFilter='auto' backdropBlur='8px'
          //   backdropFilter="invert(100%)"
          //   filter='auto' brightness='40%'
        >
          <li>Orange</li>
          <li>Watermelon</li>
          <li>grandnut</li>
          <li>Pear</li>
          <li>Coconut</li>
        </Box>

        <Flex
          justify={"space-around"}
          w="400px"
          h="10vh"
          alignItems="center"
          bg="crimson"
          color="white"
          fontWeight="bold"
          bgGradient="linear(to-tr, crimson, purple.100)"
        >
          <p>Loveth</p>
          <p>Chinedu</p>
          <p>Ajaegbu</p>
          <p>Bekee</p>
        </Flex>

        <Grid
          gridTemplateColumns={"repeat(2, 100px)"}
          gridColumnGap="100"
          bg="whitesmoke"
          gridRowGap={2}
          _hover={{
            bgGradient: "linear(to-tr, teal.300, yellow)",
            cursor: "pointer"
          }}
        >
          <p>Loveth</p>
          <p>Chinedu</p>
          <p>Ajaegbu</p>
          <p>Bekee</p>
        </Grid>
        <Text
          bgGradient="linear(to-l,  #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3rem"
          fontWeight="extrabold"
          textAlign="center"
          boxShadow={["1px 1px 2px #000000"]}
        >
          Welcome to Chakra UI
        </Text>
        <Button
          colorScheme="teal"
          _hover={{ bg: "crimson", color: "teal.500" }}
        >
          Hover me
        </Button>
        <Box role="group">
          <Box
            _hover={{ fontWeight: "semibold" }}
            _groupHover={{ color: "tomato" }}
            cursor={"pointer"}
            _before={{ content: '"🙂"', display: "inline-block", mr: "5px" }}
            _after={{ content: '"🙂"', display: "inline-block", mr: "5px" }}
          >
            Hover2 me
          </Box>
        </Box>
        <Box sx={anotherImage} boxShadow="xs" p="10" rounded="md" bg="red">
          xs
        </Box>
        <Box
          sx={anotherImage}
          boxShadow="sm"
          p="6"
          rounded="md"
          bg="purple"
          color="white"
        >
          sm
        </Box>
        <Box sx={anotherImage} boxShadow="base" p="6" rounded="md" bg="purple">
          Base
        </Box>
        <Box sx={anotherImage} boxShadow="md" p="6" rounded="md" bg="purple">
          md
        </Box>
        <Box sx={anotherImage} boxShadow="lg" p="6" rounded="md" bg="purple">
          lg
        </Box>
        <Box sx={anotherImage} boxShadow="xl" p="6" rounded="md" bg="purple">
          xl
        </Box>
        <Box sx={anotherImage} boxShadow="2xl" p="6" rounded="md" bg="purple">
          2xl
        </Box>
        <Box boxShadow="dark-lg" p="6" rounded="md" bg="purple">
          Dark lg
        </Box>
        <Box boxShadow="outline" p="6" rounded="md" bg="purple">
          Outline
        </Box>
        <Box boxShadow="inner" p="6" rounded="md" bg="purple">
          Inner
        </Box>

        <Box sx={outerBoxStyles}>
          <Box sx={innerBoxStyles} backdropFilter="invert(100%)">
            Box with Backdrop Filter
          </Box>
        </Box>

        <Box sx={outerBoxStyles}>
          <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="8px">
            Box with Backdrop Blur
          </Box>
        </Box>

        <Box sx={outerBoxStyles}>
          <Box sx={innerBoxStyles} backdropFilter="auto" backdropContrast="30%">
            Box with Backdrop Contrast
          </Box>
        </Box>
      </SimpleGrid>
      <Box maxW="960px" mx="auto" />
    </div>
  );
}

export default TextView;
