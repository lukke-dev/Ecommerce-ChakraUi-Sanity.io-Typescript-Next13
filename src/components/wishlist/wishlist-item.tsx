import Link from 'next/link'
import { WishlistItemProps } from '.'
import { useWishlistHook } from '@src/hooks'
import { BsCart, BsCartX, BsTrash } from 'react-icons/bs'
import { Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'

export const WishlistItem: React.FC<WishlistItemProps> = ({ item }) => {
  const { addItem, removeItem, isAddedInCart } = useWishlistHook()

  const getSubstring = (text: string, substringEnd: number): string => {
    return text?.length > substringEnd
      ? `${text?.substring(0, substringEnd)}...`
      : text
  }

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
        {isAddedInCart(item.id) ? (
          <Button
            size="xs"
            bgColor="white"
            borderWidth="1px"
            borderColor="gray.300"
            color="gray.500"
            title="Remove from Cart"
            onClick={() => removeItem(item.id)}
          >
            <BsCartX />
          </Button>
        ) : (
          <Button
            size="xs"
            bgColor="white"
            borderWidth="1px"
            borderColor="brand.primary"
            color="brand.primary"
            title="Add to Cart"
            onClick={() => addItem(item)}
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
          onClick={() => removeItem(item.id)}
        >
          <BsTrash />
        </Button>
      </GridItem>
    </Grid>
  )
}
