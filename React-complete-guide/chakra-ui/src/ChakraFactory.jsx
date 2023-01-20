import React from "react";
import { chakra, Textarea } from "@chakra-ui/react";

let AutoResizeInput = chakra(Textarea);

AutoResizeInput = chakra(AutoResizeInput, {
  baseStyle: {
    bg: "papayawhip",
    color: "red.500",
  },
});

const Div = chakra('div', {
    shouldForwardProp: (prop) => !['sample'].includes(prop),
  })

function ChakraFactory() {
  return (
    <div>
      <chakra.button
        px="3"
        py="2"
        bg="green.200"
        rounded="md"
        _hover={{ bg: "green.300" }}
      >
        Click me
      </chakra.button>
      <chakra.h1 fontSize="lg"> Heading </chakra.h1>
      <AutoResizeInput bg="red.200" fontSize="12px" />
      <div>Clone with</div>
    </div>
  );
}

export default ChakraFactory;
