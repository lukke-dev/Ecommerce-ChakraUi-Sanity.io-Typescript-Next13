import React from 'react'
import { Button } from '@chakra-ui/react'
import { useWishlistHook } from '@src/hooks'
import { AddToWishlistButtonProps } from './types'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

export const AddWishlistButton: React.FC<AddToWishlistButtonProps> = ({
  product,
}) => {
  const { addItem, removeItem, isAddedInCart } = useWishlistHook()

  return (
    <>
      {isAddedInCart(product.id) ? (
        <Button
          rounded="full"
          pos="absolute"
          variant="ghost"
          color="red.400"
          bgColor="transparent"
          title="Remove from Wishlist"
          _hover={{ bgColor: 'transparent' }}
          onClick={() => removeItem(product.id)}
        >
          <BsHeartFill />
        </Button>
      ) : (
        <Button
          rounded="full"
          pos="absolute"
          variant="ghost"
          color="red.400"
          bgColor="transparent"
          title="Add to Wishlist"
          onClick={() => addItem(product)}
          _hover={{ bgColor: 'transparent' }}
        >
          <BsHeart />
        </Button>
      )}
    </>
  )
}
