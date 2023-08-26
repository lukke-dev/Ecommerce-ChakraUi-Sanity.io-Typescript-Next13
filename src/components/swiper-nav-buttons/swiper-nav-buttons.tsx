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
        color="pink.600"
        borderColor="pink.500"
        onClick={() => swiper.slidePrev()}
      />
      <IconButton
        mx="1"
        rounded="lg"
        bgColor="white"
        borderWidth="1px"
        aria-label="Next"
        color="pink.600"
        icon={<FaChevronRight />}
        borderColor="pink.500"
        onClick={() => swiper.slideNext()}
      />
    </Box>
  )
}
