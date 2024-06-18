import { Box, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";

function CreateProject() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Create Project
      </Heading>
      <VStack spacing={5} align="start">
        <Box>
          <Heading as="h2" size="md">
            Operation
          </Heading>
          <Text>Details about the operation...</Text>
        </Box>
        <Box>
          <Heading as="h2" size="md">
            Finance
          </Heading>
          <Text>Details about the finance...</Text>
        </Box>
        <Box>
          <Heading as="h2" size="md">
            Desired Outcome
          </Heading>
          <Text>Details about the desired outcome...</Text>
        </Box>
        <Box>
          <Heading as="h2" size="md">
            Participants
          </Heading>
          <Text>Details about the participants...</Text>
        </Box>
        <Box>
          <Heading as="h2" size="md">
            Plans and Milestones
          </Heading>
          <Text>Details about the plans and milestones...</Text>
        </Box>
        <Box>
          <Heading as="h2" size="md">
            Footage
          </Heading>
          <HStack spacing={4}>
            <Image src="path/to/footage1.jpg" alt="Footage 1" boxSize="150px" />
            <Image src="path/to/footage2.jpg" alt="Footage 2" boxSize="150px" />
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default CreateProject;
