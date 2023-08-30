import React from 'react'
import Link from 'next/link'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

export const Banner: React.FC = () => {
  return (
    <Box>
      <Flex
        gap="2"
        px="2rem"
        mx="auto"
        pt="2rem"
        align="center"
        justify="center"
        w={{ base: '100%', lg: '90%' }}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Box w={{ base: '100%', lg: '50%' }}>
          <Heading
            lineHeight="4rem"
            color="pink.500"
            size={{ base: 'xl', lg: '3xl' }}
          >
            Online Shopping <br /> Made Easy
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} py="1rem" maxW="600px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            autem voluptatem iure illo optio obcaecati accusantium fugiat
            dolores tenetur
          </Text>
          <Link href="/products">
            <Button
              minW="10rem"
              color="white"
              borderRadius="50px"
              bgColor="pink.500"
              _hover={{ bgColor: 'pink.600' }}
            >
              Shop Now
            </Button>
          </Link>
        </Box>
        <Box w={{ base: '100%', lg: '50%' }}>
          <Box
            w={{ base: '300px', lg: 'full' }}
            h={{ base: '300px', lg: '500px' }}
            bg="center no-repeat url(mockup.svg)"
          />
        </Box>
      </Flex>
    </Box>
  )
}
