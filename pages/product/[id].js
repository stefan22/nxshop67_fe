import React from 'react'
import { useRouter } from 'next/router'
import { useSingleProduct } from '../../hooks/single-product'
import ErrorMessage from '../../utils/ErrorMessage'
import ProductDetails from '../../components/product-details'

const SingleProduct = () => {
  const router = useRouter()
  const { id } = router.query

  const {
    singleProduct,
    singleProductLoading, 
    singleProductError } = useSingleProduct(id)

  if (singleProductLoading) return <p>Loading...</p>
  if (singleProductError) return <ErrorMessage error={singleProductError} />
  const { Product } = singleProduct
  return <ProductDetails product={Product} />
}

export default SingleProduct
