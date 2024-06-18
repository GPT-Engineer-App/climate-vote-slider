import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" p={5} bg="gray.800" color="white" textAlign="center">
      <Text>&copy; 2024 Your Company. All rights reserved.</Text>
    </Box>
  );
}

export default Footer;
