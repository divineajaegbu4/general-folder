import React from "react";
import { ChakraProvider, extendTheme, Text } from "@chakra-ui/react";
const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      text: {
        default: "gray.900",
        _dark: "gray.50",
      },
    },
  },
});

function SemanticTokens() {
  return (
    <div>
      <ChakraProvider theme={customTheme}>
        <Text color="text">
          will be gray.900 in light mode and gray.50 in dark mode
        </Text>
      </ChakraProvider>
    </div>
  );
}

export default SemanticTokens;
