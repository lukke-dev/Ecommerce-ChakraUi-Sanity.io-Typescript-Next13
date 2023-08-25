import React, { useState } from 'react'
import { AllProductsProps } from './types'
import { usePagination } from '@mantine/hooks'
import { Button, Flex } from '@chakra-ui/react'
import { CustomBreadcrumb, ProductCard } from '@src/components'

export const AllProducts: React.FC<AllProductsProps> = ({
  products,
  breadcrumbItems,
}) => {
  const itemsPerPage = 10
  const [visibleProducts, setVisibleProducts] = useState(
    products.slice(0, itemsPerPage),
  )

  const total = Math.ceil(products.length / itemsPerPage)
  const pagination = usePagination({
    total,
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * itemsPerPage
      const end = start + itemsPerPage
      setVisibleProducts(products.slice(start, end))
    },
  })

  return (
    <>
      <CustomBreadcrumb items={breadcrumbItems} />
      <Flex
        mx="auto"
        flexWrap="wrap"
        w={{ base: '100%', lg: '90%' }}
        justify={{ base: 'center', lg: 'space-between' }}
      >
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
      {itemsPerPage < products.length && (
        <Flex
          mx="auto"
          py="2rem"
          justify="center"
          w={{ base: '100%', lg: '90%' }}
        >
          {pagination.range.map((range) =>
            range === 'dots' ? (
              <Button
                mx="1"
                key={range}
                bgColor="white"
                borderWidth="1px"
                color="brand.primary"
                borderColor="brand.primary"
              >
                ...
              </Button>
            ) : (
              <Button
                mx="1"
                key={range}
                borderWidth="1px"
                borderColor="brand.primary"
                _hover={{ bgColor: 'none' }}
                _active={{ bgColor: 'none' }}
                onClick={() => pagination.setPage(range)}
                bgColor={
                  pagination.active === range ? 'brand.primary' : 'white'
                }
                color={pagination.active === range ? 'white' : 'brand.primary'}
              >
                {range}
              </Button>
            ),
          )}
        </Flex>
      )}
    </>
  )
}
