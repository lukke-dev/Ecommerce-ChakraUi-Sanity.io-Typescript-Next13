import {
  Box,
  Text,
  Card,
  Flex,
  Stack,
  Heading,
  CardBody,
} from '@chakra-ui/react'
import Link from 'next/link'
import { ProductCardProps } from './types'
import { AddToWishlistButton, Rating, AddToCartButton } from '..'

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getSubstring = (text: string, substringEnd: number): string => {
    return text?.length > substringEnd
      ? `${text?.substring(0, substringEnd)}...`
      : text
  }
  return (
    <Card w="xs" pos="relative" m="0.5rem">
      <AddToWishlistButton product={product} />
      <CardBody>
        <Link href={`/products/${product.slug}`}>
          <Box
            mx="auto"
            boxSize="200px"
            borderRadius="lg"
            bg={`center / contain no-repeat url(${product.mainImage})`}
          />
        </Link>
        <Stack mt="6" spacing="3">
          <Flex justify="space-between" align="center">
            <Link href={`/products/${product.slug}`}>
              <Heading size="sm">{getSubstring(product.name, 20)}</Heading>
            </Link>
            <Flex color="pink.600" fontWeight="bold">
              <Text fontSize="sm">$ </Text>
              <Text fontSize="lg">{product.price}</Text>
            </Flex>
          </Flex>
          <Text fontSize="sm"> {getSubstring(product.description, 30)} </Text>
          <Rating rating={product.rating} />

          <AddToCartButton product={product} count={1} />
        </Stack>
      </CardBody>
    </Card>
  )
}
