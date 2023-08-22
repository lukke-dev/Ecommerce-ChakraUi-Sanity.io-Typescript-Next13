import { NavMenu } from './nav-menu'
import { Box, Flex, Stack } from '@chakra-ui/react'
import { Cart, Logo, SearchField, Wishlist } from '..'

export const MobileNav: React.FC = () => {
  return (
    <>
      <Flex
        justify="space-between"
        alignItems="center"
        display={{ base: 'flex', lg: 'none' }}
        px="2rem"
        py="1rem"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <NavMenu />
        <Logo />

        <Stack direction="row" spacing={1}>
          <Wishlist />
          <Cart />
        </Stack>
      </Flex>
      <Box
        px="2rem"
        py="0.5rem"
        mb="1rem"
        display={{ base: 'block', lg: 'none' }}
      >
        <SearchField />
      </Box>
    </>
  )
}
