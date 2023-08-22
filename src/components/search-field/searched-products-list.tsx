import Link from 'next/link'
import { SearchedProductsListProps } from './types'
import { Box, Flex, Image, Tag, Text } from '@chakra-ui/react'

export const SearchedProductsList: React.FC<SearchedProductsListProps> = ({
  products,
}) => {
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.slug}`}>
          <Box
            p="2"
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            _hover={{ bgColor: 'gray.100' }}
          >
            <Flex align="center">
              <Image
                mr="10px"
                boxSize="24px"
                alt={product.name}
                src={product.mainImage}
              />
              <Text>{product.name}</Text>
            </Flex>
            <Flex justify="flex-end">
              <Tag size="sm">{product.category.name}</Tag>
            </Flex>
          </Box>
        </Link>
      ))}
    </>
  )
}
