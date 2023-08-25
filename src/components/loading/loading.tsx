import React from 'react'
import Image from 'next/image'
import { Flex, Text } from '@chakra-ui/react'

export const Loading: React.FC = () => {
  return (
    <Flex
      minH="calc(100vh - 150px)"
      justify="center"
      align="center"
      flexDir="column"
    >
      <Image
        src="/loading-cart.gif"
        alt="loading cart"
        width={200}
        height={200}
      />
      <Text>Loading...</Text>
    </Flex>
  )
}
