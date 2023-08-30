import React from 'react'
import Link from 'next/link'
import { LogoProps } from './types'
import { Text } from '@chakra-ui/react'

export const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <Link href="/" onClick={onClick}>
      <Text color="gray.800" fontWeight="bold">
        LD{' '}
        <Text as="span" color="pink.500">
          Shop
        </Text>
      </Text>
    </Link>
  )
}
