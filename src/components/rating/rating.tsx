import React from 'react'
import ReactStars from 'react-stars'
import { RatingProps } from './types'
import { Flex, Text } from '@chakra-ui/react'

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <Flex align="center">
      <ReactStars
        count={5}
        size={18}
        half={true}
        edit={false}
        value={rating?.rate}
        color2="var(--chakra-colors-purple-500)"
      />
      <Text fontSize="xs" mx="1">
        ({rating?.count})
      </Text>
    </Flex>
  )
}
