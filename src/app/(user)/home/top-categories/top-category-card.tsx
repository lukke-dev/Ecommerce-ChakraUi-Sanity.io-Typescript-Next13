import Link from 'next/link'
import { TopCategoryCardProps } from './types'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'

export const TopCategoryCard: React.FC<TopCategoryCardProps> = ({
  category,
}) => {
  return (
    <Link href={`/categories/${category.slug}`}>
      <Card
        w="100%"
        p="10px"
        h="100%"
        align="center"
        direction="row"
        overflow="hidden"
        variant="outline"
        _hover={{ cursor: 'pointer', bgColor: 'gray.100' }}
      >
        <Image
          width={100}
          height={100}
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
