import React from "react";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import TextView from "./text";
import StyledProps from "./StyledProps";
import Gradient from "./Gradient";
import ColorMode from "./ColorMode";
import SemanticTokens from "./SemanticTokens";
import ResponsiveStyles from "./ResponsiveStyles";
import ChakraFactory from "./ChakraFactory";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <StyledProps/>
      <Gradient/>
      <ColorMode/>
      <SemanticTokens/>
      <ResponsiveStyles/>
      <ChakraFactory/>
    </ChakraProvider>
  );
}

export default App;
