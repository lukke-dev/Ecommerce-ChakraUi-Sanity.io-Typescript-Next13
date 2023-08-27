import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useRef } from 'react'
import { VscListFlat } from 'react-icons/vsc'
import { Logo } from '..'

export const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: any = useRef()

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <VscListFlat />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>
          <Divider />

          <DrawerBody>
            <Link href="/products">
              <Box
                p="0.5rem"
                _hover={{ bgColor: "pink.400", color: 'white' }}
              >
                All Products
              </Box>
            </Link>
            <Link href="/categories">
              <Box
                p="0.5rem"
                _hover={{ bgColor: "pink.400", color: 'white' }}
              >
                Categories
              </Box>
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
