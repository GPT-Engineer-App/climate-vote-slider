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
        <Text fontSize="lg">
          <strong>Operation:</strong> Details about the operation.
        </Text>
        <Text fontSize="lg">
          <strong>Finance:</strong> Financial details.
        </Text>
        <Text fontSize="lg">
          <strong>Desired Outcome:</strong> Expected results.
        </Text>
        <Text fontSize="lg">
          <strong>Participants:</strong> List of participants.
        </Text>
        <Text fontSize="lg">
          <strong>Plans:</strong> Project plans.
        </Text>
        <Text fontSize="lg">
          <strong>Milestones:</strong> Key milestones.
        </Text>
        <Image src="https://via.placeholder.com/400" alt="Project Footage" />
        <Input placeholder="Add details about your project" value={details} onChange={(e) => setDetails(e.target.value)} />
        <Button onClick={handleAddDetails} colorScheme="teal">
          Add Details
        </Button>
      </VStack>
    </Box>
  );
};

export default ProjectDetails;
