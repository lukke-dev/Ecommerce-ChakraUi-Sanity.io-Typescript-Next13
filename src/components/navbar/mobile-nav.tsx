import { NavMenu } from './nav-menu'
import { Box, Flex, Stack } from '@chakra-ui/react'
import { Cart, SearchField, Wishlist } from '..'

export const MobileNav: React.FC = () => {
  return (
    <>
      <Flex
        px="2rem"
        py="1rem"
        borderBottom="1px"
        alignItems="center"
        borderColor="gray.200"
        justify="space-between"
        display={{ base: 'flex', lg: 'none' }}
      >
        <NavMenu />

        <Stack direction="row" spacing={1}>
          <Wishlist />
          <Cart />
        </Stack>
      </Flex>
      <Box px="2rem" py="0.5rem" display={{ base: 'block', lg: 'none' }}>
        <SearchField />
      </Box>
    </>
  )
}
