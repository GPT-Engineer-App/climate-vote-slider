import { Link } from "react-router-dom";
import { Box, Flex, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

function Navbar() {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Logo</Box>
        <Flex alignItems={"center"}>
          <Link to="/">
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              Home
            </Button>
          </Link>
          <Button onClick={toggleColorMode} size={"sm"}>
            Toggle {useColorModeValue("Dark", "Light")}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
