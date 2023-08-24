'use client'
import React from 'react'
import { useCartHook } from '@src/hooks'
import { Button } from '@chakra-ui/react'
import { useAppDispatch } from '@src/store'
import { AddToCartButtonProps } from './types'
import { itemAddedInCollection } from '@src/utils'
import { addItemToCart, removeItemFromCart } from '@src/store/slices'

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  count,
}) => {
  const dispatch = useAppDispatch()
  const { cartItems } = useCartHook()
  const isAddedInCart = itemAddedInCollection({
    itemId: product.id,
    collection: cartItems,
  })

  return (
    <>
      {isAddedInCart ? (
        <Button
          w="150px"
          size="sm"
          color="gray.500"
          variant="outline"
          borderRadius="50px"
          borderColor="gray.200"
          onClick={() => dispatch(removeItemFromCart(product.id))}
        >
          Remove from cart
        </Button>
      ) : (
        <Button
          w="150px"
          size="sm"
          variant="outline"
          borderRadius="50px"
          color="pink.500"
          borderColor="pink.500"
          onClick={() =>
            dispatch(
              addItemToCart({
                count,
                id: product.id,
                name: product.name,
                slug: product.slug,
                price: product.price,
                mainImage: product.mainImage,
              }),
            )
          }
        >
          Add to cart
        </Button>
      )}
    </>
  )
}
