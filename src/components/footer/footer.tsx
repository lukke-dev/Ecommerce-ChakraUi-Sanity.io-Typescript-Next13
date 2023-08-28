import {
  Box,
  Text,
  Link,
  Input,
  Stack,
  chakra,
  Container,
  IconButton,
  SimpleGrid,
  VisuallyHidden,
} from '@chakra-ui/react'
import { Logo } from '../logo'
import { BiMailSend } from 'react-icons/bi'
import { ListHeaderProps, SocialButtonProps } from './types'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const SocialButton: React.FC<SocialButtonProps> = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      w={8}
      h={8}
      as="a"
      href={href}
      rounded="full"
      cursor="pointer"
      bg="blackAlpha.100"
      alignItems={'center'}
      display={'inline-flex'}
      justifyContent={'center'}
      _hover={{ bg: 'blackAlpha.200' }}
      transition={'background 0.3s ease'}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader: React.FC<ListHeaderProps> = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export const Footer: React.FC = () => {
  return (
    <Box bg="pink.50" color="gray.700" mt="2rem">
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize="sm">© 2023 LD Shop. All rights reserved</Text>
            <Stack direction="row" spacing={6}>
              <SocialButton label="Twitter" href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label="Facebook" href={'#'}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label="Instagram" href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Privacy Policy</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Get the best deals</ListHeader>
            <Stack direction={'row'}>
              <Input
                border={0}
                bg="blackAlpha.100"
                placeholder="Your email address"
                _focus={{ bg: 'whiteAlpha.300' }}
              />
              <IconButton
                colorScheme="pink"
                icon={<BiMailSend />}
                aria-label="Subscribe"
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
