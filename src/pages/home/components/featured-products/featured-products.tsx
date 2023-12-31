import React from 'react'
import { SwiperOptions } from 'swiper/types'
import { Box, Heading } from '@chakra-ui/react'
import { FeaturedProductsProps } from './types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, A11y } from 'swiper/modules'
import { ProductCard, SwiperNavButtons } from '@src/components'

export const FeaturedProducts = ({
  title,
  products,
}: FeaturedProductsProps) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 10,
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  }

  return (
    <Box w={{ base: '100%', lg: '90%' }} mx="auto" p="2rem">
      <Heading size="md" my="1.5rem">
        {title}
      </Heading>
      <Box w="100%" h="100%">
        <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              style={{
                maxWidth: '350px',
                boxSizing: 'border-box',
              }}
            >
              <ProductCard product={product} />
            </SwiperSlide>
          ))}

          <SwiperNavButtons />
        </Swiper>
      </Box>
    </Box>
  )
}
