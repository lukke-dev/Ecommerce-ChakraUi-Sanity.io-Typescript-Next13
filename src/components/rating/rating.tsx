import React from 'react'
import ReactStars from 'react-stars'
import { RatingProps } from './types'
import { colors } from '@src/config/themes'
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
        color2={colors.brand.primary}
      />
      <Text fontSize="xs" mx="1">
        ({rating?.count})
      </Text>
    </Flex>
  )
}
