import React from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'

export const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Text color="gray.800" fontWeight="bold">
        LS{' '}
        <Text as="span" color="brand.primary">
          shop
        </Text>
      </Text>
    </Link>
  )
}