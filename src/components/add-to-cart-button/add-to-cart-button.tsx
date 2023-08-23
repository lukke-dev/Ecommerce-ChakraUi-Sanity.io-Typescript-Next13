'use client'
import React from 'react'
import { useCartHook } from '@src/hooks'
import { Button } from '@chakra-ui/react'
import { AddToCartButtonProps } from './types'

export const AddToCardButton: React.FC<AddToCartButtonProps> = ({
  product,
  count,
}) => {
  const { addItem, removeItem, isAddedInWishlist } = useCartHook()

  return (
    <>
      {isAddedInWishlist(product.id) ? (
        <Button
          w="150px"
          size="sm"
          color="gray.500"
          variant="outline"
          borderRadius="50px"
          borderColor="gray.200"
          onClick={() => removeItem(product.id)}
        >
          Remove from cart
        </Button>
      ) : (
        <Button
          w="150px"
          size="sm"
          variant="outline"
          borderRadius="50px"
          color="brand.primary"
          borderColor="brand.primary"
          onClick={() =>
            addItem({
              count,
              id: product.id,
              name: product.name,
              slug: product.slug,
              price: product.price,
              mainImage: product.mainImage,
            })
          }
        >
          Add to cart
        </Button>
      )}
    </>
  )
}
