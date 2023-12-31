import Link from 'next/link'
import { WishlistItemProps } from '.'
import { useCartHook } from '@src/hooks'
import { useAppDispatch } from '@src/store'
import { BsCart, BsCartX, BsTrash } from 'react-icons/bs'
import { getSubstring, itemAddedInCollection } from '@src/utils'
import { Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { addItemToCart, removeItemFromWishlist } from '@src/store/slices'

export const WishlistItem: React.FC<WishlistItemProps> = ({ item }) => {
  const dispatch = useAppDispatch()

  const { cartItems } = useCartHook()
  const isAddedInCart = itemAddedInCollection({
    itemId: item.id,
    collection: cartItems,
  })

  return (
    <Grid
      my="2"
      py="1"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      templateColumns="repeat(8, 1fr)"
    >
      <GridItem>
        <Link href={item.slug}>
          <Image
            boxSize="20px"
            rounded="full"
            alt={item.name}
            borderWidth="1px"
            src={item.mainImage}
            borderColor="gray.300"
          />
        </Link>
      </GridItem>
      <GridItem colSpan={4}>
        <Link href={item.slug}>
          <Text fontSize="sm" title={item.name}>
            {getSubstring(item.name, 17)}
          </Text>
        </Link>
      </GridItem>

      <GridItem>
        <Text fontWeight="bold" fontSize="xs">
          $ {item.price}
        </Text>
      </GridItem>

      <GridItem textAlign="right">
        {isAddedInCart ? (
          <Button
            size="xs"
            bgColor="white"
            borderWidth="1px"
            borderColor="gray.300"
            color="gray.500"
            title="Remove from Cart"
            onClick={() => dispatch(removeItemFromWishlist(item.id))}
          >
            <BsCartX />
          </Button>
        ) : (
          <Button
            size="xs"
            bgColor="white"
            borderWidth="1px"
            borderColor="pink.500"
            color="pink.500"
            title="Add to Cart"
            onClick={() => dispatch(addItemToCart({ ...item, count: 1 }))}
          >
            <BsCart />
          </Button>
        )}
      </GridItem>

      <GridItem textAlign="right">
        <Button
          variant="ghost"
          colorScheme="red"
          size="xs"
          onClick={() => dispatch(removeItemFromWishlist(item.id))}
        >
          <BsTrash />
        </Button>
      </GridItem>
    </Grid>
  )
}
