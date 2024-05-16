import React, { useState } from "react";
import { Container, VStack, HStack, Text, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button, Input, Image, IconButton } from "@chakra-ui/react";
import { FaDonate, FaVoteYea } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Reforestation in Amazon",
    description: "Planting trees in the Amazon rainforest to combat deforestation.",
    image: "https://images.unsplash.com/photo-1598064902710-b3b0ebb32ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWZvcmVzdGF0aW9ufGVufDB8fHx8MTcxNTg1MDkzM3ww&ixlib=rb-4.0.3&q=80&w=1080",
    committed: ["Alice", "Bob", "Charlie"],
  },
  {
    id: 2,
    name: "Ocean Cleanup",
    description: "Removing plastic waste from the oceans.",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGNsZWFudXB8ZW58MHx8fHwxNzE1ODUwOTM0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    committed: ["Dave", "Eve", "Frank"],
  },
  {
    id: 3,
    name: "Renewable Energy",
    description: "Investing in solar and wind energy projects.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3l8ZW58MHx8fHwxNzE1ODUwOTM1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    committed: ["Grace", "Heidi", "Ivan"],
  },
];

const ProjectCard = ({ project, onVote, onDonate }) => {
  const [voteValue, setVoteValue] = useState(50);
  const [donation, setDonation] = useState("");

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="100%">
      <Image src={project.image} alt={project.name} mb={4} />
      <Text fontSize="xl" fontWeight="bold">
        {project.name}
      </Text>
      <Text mb={4}>{project.description}</Text>
      <Text mb={2}>Committed: {project.committed.join(", ")}</Text>
      <HStack mb={4}>
        <Text>Vote:</Text>
        <Slider value={voteValue} onChange={(val) => setVoteValue(val)} min={0} max={100} flex="1">
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <IconButton aria-label="Vote" icon={<FaVoteYea />} onClick={() => onVote(project.id, voteValue)} />
      </HStack>
      <HStack>
        <Input placeholder="Donation Amount" value={donation} onChange={(e) => setDonation(e.target.value)} />
        <IconButton aria-label="Donate" icon={<FaDonate />} onClick={() => onDonate(project.id, donation)} />
      </HStack>
    </Box>
  );
};

const Index = () => {
  const handleVote = (projectId, voteValue) => {
    console.log(`Voted ${voteValue} for project ${projectId}`);
  };

  const handleDonate = (projectId, amount) => {
    console.log(`Donated ${amount} to project ${projectId}`);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} w="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Climate Projects
        </Text>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onVote={handleVote} onDonate={handleDonate} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
