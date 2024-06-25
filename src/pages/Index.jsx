import { Container, Text, VStack, Image, Box, Heading, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Flower Arrangements in Cd. Juarez, Mexico
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Bringing emotions and memories through flowers.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box>
            <Image src="/images/flower1.jpg" alt="Flower Arrangement 1" borderRadius="md" />
          </Box>
          <Box>
            <Image src="/images/flower2.jpg" alt="Flower Arrangement 2" borderRadius="md" />
          </Box>
          <Box>
            <Image src="/images/flower3.jpg" alt="Flower Arrangement 3" borderRadius="md" />
          </Box>
          <Box>
            <Image src="/images/flower4.jpg" alt="Flower Arrangement 4" borderRadius="md" />
          </Box>
          <Box>
            <Image src="/images/flower5.jpg" alt="Flower Arrangement 5" borderRadius="md" />
          </Box>
          <Box>
            <Image src="/images/flower6.jpg" alt="Flower Arrangement 6" borderRadius="md" />
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;