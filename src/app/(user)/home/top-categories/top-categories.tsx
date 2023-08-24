'use client'

import Link from 'next/link'
import { TopCategoriesProps } from '.'
import { TopCategoryCard } from './top-category-card'
import { Box, Button, Grid, GridItem, Heading } from '@chakra-ui/react'

export const TopCategories: React.FC<TopCategoriesProps> = ({ categories }) => {
  return (
    <Box w={{ base: '100%', lg: '90%' }} mx="auto" py="3rem" px="2rem">
      <Heading size="md" my="1.5rem">
        Shop Our Top Categories
      </Heading>

      <Grid
        templateColumns={{
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
          base: 'repeat(1, 1fr)',
        }}
        gap="4"
      >
        {categories.map((category) => (
          <GridItem key={category.id}>
            <TopCategoryCard category={category} />
          </GridItem>
        ))}
      </Grid>

      <Link href="/categories">
        <Button
          my="1rem"
          rounded="full"
          bgColor="white"
          variant="outline"
          color="pink.500"
          borderColor="pink.500"
        >
          Browse All Categories
        </Button>
      </Link>
    </Box>
  )
}
