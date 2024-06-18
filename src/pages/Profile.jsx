import { Box, Heading, Text } from "@chakra-ui/react";

function Profile() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Profile Page
      </Heading>
      <Text>Welcome to your profile page. Here you can add details about yourself.</Text>
    </Box>
  );
}

export default Profile;
