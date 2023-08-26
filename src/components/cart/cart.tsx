import {
  Box,
  Flex,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/react'
import Link from 'next/link'
import { CartItem } from '.'
import { BsCart4 } from 'react-icons/bs'
import { useCartHook } from '@src/hooks'
import { useAppDispatch } from '@src/store'
import { resetCartItems } from '@src/store/slices'

export const Cart: React.FC = () => {
  const dispatch = useAppDispatch()
  const { cartItems, cartItemsLength, cartItemsTotalPrice } = useCartHook()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        pos="relative"
        variant="ghost"
        onClick={onOpen}
        color="pink.500"
        _hover={{ bgColor: 'transparent' }}
      >
        <BsCart4 /> <Text mx="1">Cart</Text>
        {cartItemsLength !== 0 && (
          <Flex
            top="0px"
            right="5px"
            color="white"
            boxSize="15px"
            pos="absolute"
            rounded="full"
            align="center"
            justify="center"
            fontSize="0.6rem"
            bgColor="pink.400"
          >
            {cartItemsLength}
          </Flex>
        )}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="pink.500">
            <Text>Cart ( {cartItemsLength} Items )</Text>
          </DrawerHeader>
          <DrawerBody>
            {cartItemsLength === 0 ? (
              <Text>Your Cart is Empty</Text>
            ) : (
              cartItems.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </DrawerBody>
          {cartItemsLength !== 0 && (
            <DrawerFooter justifyContent="space-between">
              <Box>
                <Button
                  variant="outline"
                  mr={3}
                  onClick={() => dispatch(resetCartItems())}
                >
                  Clear Cart
                </Button>
                <Link href="/checkout">
                  <Button
                    color="white"
                    bgColor="pink.500"
                    _hover={{ bgColor: 'brand.primaryLight' }}
                    _active={{ bgColor: 'brand.primaryLight' }}
                  >
                    Checkout
                  </Button>
                </Link>
              </Box>
              <Text fontWeight="bold">Total: $ {cartItemsTotalPrice}</Text>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}
