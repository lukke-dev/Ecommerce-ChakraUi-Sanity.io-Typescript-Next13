import React from 'react'
import {
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { CustomBreadcrumbProps } from './types'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({
  items = [],
}) => {
  return (
    <>
      {items.length > 0 && (
        <Breadcrumb
          py="2rem"
          px="1rem"
          mx="auto"
          spacing="8px"
          w={{ base: '100%', lg: '90%' }}
          fontSize={{ base: 'xs', md: 'md' }}
          separator={<ChevronRightIcon color="gray.500" />}
        >
          {items.map((item, index) =>
            index !== items.length - 1 ? (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={index}>
                <Text color="gray.500">{item.name}</Text>
              </BreadcrumbItem>
            ),
          )}
        </Breadcrumb>
      )}
    </>
  )
}
