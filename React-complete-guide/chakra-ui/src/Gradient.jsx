import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Gradient() {
  const gradientExamples = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  };
  return (
    <div>
      <Box w="100%" h="200px" bgGradient="linear(to-l, #7928CA, #FF0080)">
        Gradients 1
      </Box>

      {/* Multiple colors */}
      <Box
        w="100%"
        h="200px"
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
      >
        Multiple Colors
      </Box>

      {/* Text gradients */}
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>

      {/* Responsive Gradients */}
      <Box
        w="100%"
        h="200px"
        bgGradient={[
          "linear(to-tr, teal.300, yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
      />

      {/* Changing Gradients with pseudo element */}
      <Box
        as="button"
        p={4}
        color="white"
        fontWeight="bold"
        borderRadius="md"
        bgGradient="linear(to-r, teal.500, green.500)"
        _hover={{
          bgGradient: "linear(to-r, red.500, yellow.500)",
        }}
      >
        Click here
      </Box>
    </div>
  );
}

export default Gradient;
