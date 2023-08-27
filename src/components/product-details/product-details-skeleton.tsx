import { Skeleton, VStack } from '@chakra-ui/react'

export const ProductDetailsSkeleton: React.FC = () => {
  return (
    <VStack align="flex-start" px="16" py="1" spacing="8">
      <Skeleton mx="4px" h="6" w="80" />
      <Skeleton mx="4px" h="80vh" w="full" />
    </VStack>
  )
}
