import {
  Text,
  Flex,
  Button,
  Popover,
  PopoverBody,
  PopoverArrow,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
} from '@chakra-ui/react'
import { WishlistItem } from '.'
import { BsHeart } from 'react-icons/bs'
import { useWishlistHook } from '@src/hooks'

export const Wishlist: React.FC = () => {
  const { wishlistItems, resetItems } = useWishlistHook()

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          pos="relative"
          variant="ghost"
          color="brand.primary"
          _hover={{ bgColor: 'transparent' }}
        >
          <BsHeart size="0.9rem" /> <Text mx="1">Wishlist</Text>
          {wishlistItems.length !== 0 && (
            <Flex
              top="0px"
              right="5px"
              color="white"
              pos="absolute"
              boxSize="15px"
              align="center"
              rounded="full"
              justify="center"
              fontSize="0.6rem"
              bgColor="brand.primaryLight"
            >
              {wishlistItems.length}
            </Flex>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader color="brand.primary" fontWeight="bold">
          Wishlist
        </PopoverHeader>
        <PopoverBody p="1rem">
          {wishlistItems.length === 0 ? (
            <>Your Wishlist is Empty</>
          ) : (
            wishlistItems.map((item) => (
              <WishlistItem key={item.id} item={item} />
            ))
          )}
        </PopoverBody>
        <PopoverFooter>
          {wishlistItems.length !== 0 && (
            <Button variant="outline" mr={3} onClick={() => resetItems()}>
              Clear Wishlist
            </Button>
          )}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}
