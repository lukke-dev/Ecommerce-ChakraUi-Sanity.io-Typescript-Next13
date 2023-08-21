import { Box } from '@chakra-ui/react'
import { DesktopNav, MobileNav } from '.'

export const Navbar: React.FC = () => {
  return (
    <Box h="120px">
      <Box pos="fixed" w="100%" bgColor="white" mb="1rem" zIndex={10}>
        <DesktopNav />
        <MobileNav />
      </Box>
    </Box>
  )
}
