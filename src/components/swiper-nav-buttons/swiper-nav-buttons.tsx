import React from 'react'
import { useSwiper } from 'swiper/react'
import { IconButton, Box } from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const SwiperNavButtons: React.FC = () => {
  const swiper = useSwiper()

  return (
    <Box m="1.5rem">
      <IconButton
        mx="1"
        rounded="lg"
        bgColor="white"
        aria-label="Prev"
        borderWidth="1px"
        icon={<FaChevronLeft />}
        color="brand.primaryDark"
        borderColor="brand.primary"
        onClick={() => swiper.slidePrev()}
      />
      <IconButton
        mx="1"
        rounded="lg"
        bgColor="white"
        borderWidth="1px"
        aria-label="Next"
        color="brand.primaryDark"
        icon={<FaChevronRight />}
        borderColor="brand.primary"
        onClick={() => swiper.slideNext()}
      />
    </Box>
  )
}
