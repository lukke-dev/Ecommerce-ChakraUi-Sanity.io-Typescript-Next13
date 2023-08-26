import Link from 'next/link'
import Image from 'next/image'
import { CategoryCardProps } from './types'
import { Card, CardBody, Heading } from '@chakra-ui/react'

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link href={`/categories/${category.slug}`}>
      <Card
        w="100%"
        p="10px"
        h="100%"
        align="center"
        variant="outline"
        overflow="hidden"
        direction="column"
        _hover={{ cursor: 'pointer', bgColor: 'gray.100' }}
      >
        <Image
          width={200}
          height={200}
          alt={category.name}
          src={category.image}
        />

        <CardBody>
          <Heading size={{ base: 'sm', lg: 'md' }}>{category.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  )
}
