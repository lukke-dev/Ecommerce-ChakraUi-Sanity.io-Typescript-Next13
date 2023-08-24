'use client'
import React from 'react'
import Link from 'next/link'
import { HeroProps } from './types'
import { Box, Button, Card, Heading, Image, Text } from '@chakra-ui/react'

export const Hero: React.FC<HeroProps> = ({
  heading,
  description,
  imageUrl,
  btnLabel,
  btnLink,
}) => {
  return (
    <Card
      p="2rem"
      mx="auto"
      mb="2rem"
      shadow="sm"
      align="center"
      overflow="hidden"
      variant="outline"
      justify="space-between"
      w={{ base: '100%', lg: '90%' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Box mx="2rem" w={{ base: '100%', md: '50%' }}>
        <Heading size="2xl">{heading}</Heading>
        <Text py="1rem">{description}</Text>

        <Link href={btnLink}>
          <Button variant="outline">{btnLabel}</Button>
        </Link>
      </Box>
      <Box mx="2rem" w={{ base: '100%', md: '50%' }} mt="1rem">
        <Image
          rounded="md"
          alt={heading}
          src={imageUrl}
          objectFit="cover"
          maxW={{ base: '100%' }}
        />
      </Box>
    </Card>
  )
}
