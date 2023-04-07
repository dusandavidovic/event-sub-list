import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="teal" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace={"nowrap"}>Dark mode</Text>
    </HStack>
  );
};
