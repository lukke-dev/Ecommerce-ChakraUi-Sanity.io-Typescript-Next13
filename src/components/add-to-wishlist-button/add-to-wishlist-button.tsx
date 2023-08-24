import React from 'react'
import { Button } from '@chakra-ui/react'
import { useAppDispatch } from '@src/store'
import { useWishlistHook } from '@src/hooks'
import { itemAddedInCollection } from '@src/utils'
import { AddToWishlistButtonProps } from './types'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { addItemToWishlist, removeItemFromWishlist } from '@src/store/slices'

export const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({
  product,
}) => {
  const dispatch = useAppDispatch()
  const { wishlistItems } = useWishlistHook()
  const isAddedInWishlist = itemAddedInCollection({
    itemId: product.id,
    collection: wishlistItems,
  })

  return (
    <>
      {isAddedInWishlist ? (
        <Button
          rounded="full"
          pos="absolute"
          variant="ghost"
          color="red.400"
          bgColor="transparent"
          title="Remove from Wishlist"
          _hover={{ bgColor: 'transparent' }}
          onClick={() => dispatch(removeItemFromWishlist(product.id))}
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
          onClick={() => dispatch(addItemToWishlist(product))}
          _hover={{ bgColor: 'transparent' }}
        >
          <BsHeart />
        </Button>
      )}
    </>
  )
}
