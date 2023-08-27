import {
  Box,
  Grid,
  Flex,
  Text,
  Stack,
  Link,
  Image,
  Button,
  Heading,
  Divider,
  GridItem,
} from '@chakra-ui/react'
import {
  Rating,
  QuantityInput,
  AddToCartButton,
  CustomBreadcrumb,
  AddToWishlistButton,
} from '..'
import { useState } from 'react'
import NextLink from 'next/link'
import { useCartHook } from '@src/hooks'
import { useAppDispatch } from '@src/store'
import { ProductDetailsProps } from './types'
import { getSubstring, itemAddedInCollection } from '@src/utils'
import { addItemToCart, resetCartItems } from '@src/store/slices'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useAppDispatch()

  const { cartItems } = useCartHook()
  const isAddedInCart = itemAddedInCollection({
    itemId: product.id,
    collection: cartItems,
  })

  return (
    <>
      <CustomBreadcrumb
        items={[
          {
            name: 'Products',
            link: '/products',
          },
          {
            name: 'Categories',
            link: '/categories',
          },
          {
            name: product.category.name,
            link: `/categories/${product.category.slug}`,
          },
          {
            name: getSubstring(product.name, 20),
            link: `/products/${product.slug}`,
          },
        ]}
      />
      <Grid
        gap="20"
        p="2rem"
        mx="auto"
        border="1px"
        borderRadius="md"
        borderColor="gray.200"
        w={{ base: '100%', lg: '90%' }}
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
      >
        <GridItem p="1rem">
          <AddToWishlistButton product={product} />
          <Image src={product?.mainImage} alt={product.name} mx="auto" />
          <Flex>
            {product.gallery?.length !== 0 &&
              product.gallery?.map((image) => (
                <Image
                  mx="auto"
                  shadow="sm"
                  key={image}
                  src={image}
                  rounded="md"
                  boxSize="70px"
                  borderWidth="1px"
                  alt={product.name}
                  borderColor="gray.100"
                />
              ))}
          </Flex>
        </GridItem>
        <GridItem p="1rem">
          <Heading>{product.name}</Heading>
          <Text my="1rem">{product.description}</Text>
          <Rating rating={product.rating} />

          <Text fontWeight="bold" fontSize="2rem">
            ${product.price}
          </Text>
          <Divider my="1rem" />
          <QuantityInput
            quantity={quantity}
            disabled={isAddedInCart}
            setQuantity={setQuantity}
          />
          <Divider my="1rem" />
          <Box>
            <NextLink href="/checkout">
              <Button
                size="sm"
                w="160px"
                mr="1rem"
                my="0.5rem"
                colorScheme="pink"
                borderRadius="50px"
                onClick={() => {
                  dispatch(resetCartItems())
                  dispatch(addItemToCart({ ...product, count: quantity }))
                }}
              >
                Buy Now
              </Button>
            </NextLink>
            <AddToCartButton product={product} count={quantity} />
          </Box>

          <Stack py="2rem">
            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Free Deliver</Text>
              <Link textDecor="underline" color="gray.500">
                Enter Your postal Code for Delivery Availability
              </Link>
            </Box>

            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Return Delivery</Text>
              <Text color="gray.500">
                Free 30 Days Delivery Returns
                <Link textDecor="underline"> Details</Link>
              </Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </>
  )
}
