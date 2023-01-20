import {
  Box,
  Button,
  DarkMode,
  HStack,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("red.500", "red.200");
  const color = useColorModeValue("white", "gray.800");
  return (
    <div>
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>

        {/* Color mode value */}
        <Box mb={4} bg={bg} color={color}>
          This box's style will change based on the color mode.
        </Box>
        <Button size="sm" onClick={toggleColorMode}>
          Toggle Mode
        </Button>

        {/* Focusing on a specific mode */}
        <HStack>
          <LightMode>
            <Button size="sm" colorScheme="blue">
              Light Mode Always
            </Button>
          </LightMode>

          <DarkMode>
            <Button size="sm" colorScheme="blue">
              Dark Mode Always
            </Button>
          </DarkMode>

          <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
            Toggle Mode
          </Button>
        </HStack>
      </header>
    </div>
  );
}

export default ColorMode;
