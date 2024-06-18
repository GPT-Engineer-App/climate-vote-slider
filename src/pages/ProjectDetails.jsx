import { Box, Heading, Text, VStack, Image, Container, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState("");

  const handleAddDetails = () => {
    console.log("Details added:", details);
  };

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
        <Input placeholder="Add details about your project" value={details} onChange={(e) => setDetails(e.target.value)} />
        <Button onClick={handleAddDetails} colorScheme="teal">
          Add Details
        </Button>
      </VStack>
    </Box>
  );
};

export default ProjectDetails;
