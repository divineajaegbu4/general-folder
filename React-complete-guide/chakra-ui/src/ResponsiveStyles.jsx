import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

function ResponsiveStyles() {
  // These are the default breakpoints
  let breakpoints = {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  };

  // Internally, we transform to this
  breakpoints = ["0em", "30em", "48em", "62em", "80em", "96em"];
  return (
    <div>
      <Box bg="red.200" w="400px">
        This is a box
      </Box>
      <Box bg="red.200" w={[300, 400, 500]}>
        This is a box
      </Box>
      <Text fontSize="40px">This is a text</Text>
      <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
        This is responsive text
      </Text>

      <>
        <Box
          height={{
            base: "100%", // 0-48em
            md: "50%", // 48em-80em,
            xl: "25%", // 80em+
          }}
          bg="teal.400"
          width={[
            "100%", // 0-30em
            "50%", // 30em-48em
            "25%", // 48em-62em
            "15%", // 62em+
          ]}
        />
        {/* responsive font size */}
        <Box fontSize={["sm", "md", "lg", "xl"]}>Font Size</Box>
        {/* responsive margin */}
        <Box mt={[2, 4, 6, 8]} width="full" height="24px" bg="tomato" />
        {/* responsive padding */}
        <Box bg="papayawhip" p={[2, 4, 6, 8]}>
          Padding
        </Box>
      </>

      <Box p={4} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ md: 40 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Marketing
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Finding customers for your new business
          </Link>
          <Text mt={2} color="gray.500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </Text>
        </Box>
      </Box>
    </div>
  );
}

export default ResponsiveStyles;
