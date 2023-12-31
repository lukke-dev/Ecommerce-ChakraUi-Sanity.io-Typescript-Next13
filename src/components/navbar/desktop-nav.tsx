import Link from 'next/link'
import { Box, Flex, Stack } from '@chakra-ui/react'
import { Cart, Logo, SearchField, Wishlist } from '..'

export const DesktopNav: React.FC = () => {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      display={{ base: 'none', lg: 'flex' }}
      px="2rem"
      py="1rem"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Stack direction="row" gap={6} flex={1} alignItems="center">
        <Box mr="1rem">
          <Logo />
        </Box>

        <Box>
          <Link href="/products">All Products</Link>
        </Box>
        <Box>
          <Link href="/categories">Categories</Link>
        </Box>

        <SearchField />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Wishlist />
        <Cart />
      </Stack>
    </Flex>
  )
}
