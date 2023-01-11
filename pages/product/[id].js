import React from 'react'
import { useRouter } from 'next/router'
import { useSingleProduct } from '../../hooks/single-product'
import ErrorMessage from '@/lib/ErrorMessage'
import ProductDetails from '@/components/product-details'

const SingleProduct = () => {
  const router = useRouter()
  const { id } = router.query

  const { singleProd, singleProdLoading, singleProdError } =
    useSingleProduct(id)

  if (singleProdLoading) return <p>Loading...</p>
  if (singleProdError) return <ErrorMessage error={singleProdError} />
  const { Product } = singleProd
  return <ProductDetails product={Product} />
}

export default SingleProduct
