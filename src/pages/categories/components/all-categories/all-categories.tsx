import { Grid } from '@chakra-ui/react'
import { AllCategoriesProps } from './types'
import { CategoryCard } from '@src/components'

export const AllCategories: React.FC<AllCategoriesProps> = ({ categories }) => {
  return (
    <Grid
      mx="auto"
      py="2rem"
      gap="20px"
      w={{ base: '100%', lg: '90%' }}
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
    >
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Grid>
  )
}
