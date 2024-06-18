import { Box, Heading, Text, VStack, Input, Button, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";

function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [bio, setBio] = useState("A short bio about yourself.");
  const [recentActivities, setRecentActivities] = useState(["Voted on Reforestation in Amazon", "Donated $50 to Ocean Cleanup"]);

  const handleUpdateProfile = () => {
    console.log("Profile updated:", { name, email, bio });
  };

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Profile Page
      </Heading>
      <VStack align="start" spacing={4}>
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            User Information
          </Heading>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Bio:</strong> {bio}
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Recent Activities
          </Heading>
          {recentActivities.map((activity, index) => (
            <Text key={index}>{activity}</Text>
          ))}
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Update Profile
          </Heading>
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} mb={2} />
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} mb={2} />
          <Input placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} mb={2} />
          <Button onClick={handleUpdateProfile} colorScheme="teal">
            Update Profile
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default Profile;
