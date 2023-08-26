import {
  Box,
  Input,
  InputGroup,
  useOutsideClick,
  InputLeftElement,
} from '@chakra-ui/react'
import { SearchedProductsList } from '.'
import { ProductType } from '@src/entities'
import { searchProducts } from '@src/queries'
import { SearchIcon } from '@chakra-ui/icons'
import { useEffect, useRef, useState } from 'react'

export const SearchField: React.FC = () => {
  const ref = useRef<any>()
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])

  useOutsideClick({
    ref,
    handler: () => {
      setIsModalOpen(false)
      setProducts([])
    },
  })

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      const products: ProductType[] = await searchProducts(searchText)
      setProducts(products)
      setIsLoading(false)
    }

    const timeout = setTimeout(() => {
      if (searchText.trim().length >= 3) {
        fetchProducts()
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [searchText])

  return (
    <Box pos="relative" w={{ base: '100%', lg: '32rem' }} ref={ref}>
      <InputGroup w={{ base: '100%', lg: '32rem' }} size="sm">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          type="text"
          borderWidth="1px"
          borderRadius="md"
          value={searchText}
          borderColor="gray.400"
          placeholder="Search..."
          focusBorderColor="pink.400"
          onClick={() => setIsModalOpen(true)}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </InputGroup>

      {isModalOpen && (
        <Box
          w="100%"
          bg="white"
          shadow="md"
          maxH="500px"
          pos="absolute"
          padding="0.5rem"
          overflowY="auto"
          boxSizing="border-box"
        >
          {products.length === 0 ? (
            isLoading ? (
              <>Loading...</>
            ) : (
              <> No Products Found</>
            )
          ) : (
            <SearchedProductsList products={products} />
          )}
        </Box>
      )}
    </Box>
  )
}
