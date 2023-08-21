import {
  Text,
  Grid,
  Image,
  Input,
  HStack,
  Button,
  GridItem,
} from '@chakra-ui/react'
import Link from 'next/link'
import { CartItemProps } from '.'
import { BsTrash } from 'react-icons/bs'
import { useCartHook } from '@src/hooks'

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { increaseCount, decreaseCount, removeItem } = useCartHook()

  return (
    <Grid
      my="2"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      templateColumns={{ base: 'repeat(6, 1fr)', lg: 'repeat(8, 1fr)' }}
    >
      <GridItem>
        <Link href={`/products/${item.slug}`}>
          <Image
            boxSize="40px"
            rounded="full"
            alt={item.name}
            borderWidth="1px"
            src={item.mainImage}
            borderColor="gray.300"
          />
        </Link>
      </GridItem>
      <GridItem colSpan={{ base: 5, lg: 3 }}>
        <Link href={`/products/${item.slug}`}>
          <Text>{item.name}</Text>
        </Link>
      </GridItem>
      <GridItem colSpan={{ base: 3, lg: 2 }} justifyContent="flex-end">
        <HStack my="0.5rem" justifyContent="flex-end">
          <Button onClick={() => decreaseCount(item.id)}>-</Button>
          <Input
            min="1"
            max="20"
            minW="52px"
            maxW="55px"
            type="number"
            readOnly={true}
            value={item.count}
          />
          <Button onClick={() => increaseCount(item.id)}>+</Button>
        </HStack>
      </GridItem>
      <GridItem textAlign="right" colSpan={{ base: 2, lg: 1 }}>
        <Text fontWeight="bold">$ {item.price * item.count}</Text>
      </GridItem>
      <GridItem textAlign="right">
        <Button
          variant="ghost"
          colorScheme="red"
          onClick={() => removeItem(item.id)}
        >
          <BsTrash />
        </Button>
      </GridItem>
    </Grid>
  )
}
