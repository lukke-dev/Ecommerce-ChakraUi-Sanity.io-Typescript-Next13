import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ProductType } from '@src/entities'
import { getProductBySlug } from '@src/queries'
import React, { useEffect, useState } from 'react'
import { ProductDetails, ProductDetailsSkeleton } from '@src/components'

export default function Product() {
  const router = useRouter()
  const [product, setProduct] = useState<ProductType | undefined>()

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductBySlug(String(router.query.slug))
      if (product) {
        setProduct(product)
      }
    }

    getProduct()
  }, [router])

  return (
    <>
      <NextSeo title={`LD Shop - ${product?.name || ''}`} />
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <ProductDetailsSkeleton />
      )}
    </>
  )
}
