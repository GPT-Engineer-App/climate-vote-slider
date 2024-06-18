import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={5}>
        Project Details for {id}
      </Heading>
      <VStack align="start" spacing={4}>
        <Text fontSize="lg">Operation: Details about the operation.</Text>
        <Text fontSize="lg">Finance: Financial details.</Text>
        <Text fontSize="lg">Desired Outcome: Expected results.</Text>
        <Text fontSize="lg">Participants: List of participants.</Text>
        <Text fontSize="lg">Plans: Project plans.</Text>
        <Text fontSize="lg">Milestones: Key milestones.</Text>
        <Image src="path/to/footage.jpg" alt="Project Footage" />
      </VStack>
    </Box>
  );
};

export default ProjectDetails;
