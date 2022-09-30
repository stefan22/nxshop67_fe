import React from 'react'
import { useRouter } from 'next/router'
import useSingleProduct from '@/graphql/singleProductQuery'
import ErrorMessage from '@/lib/ErrorMessage'

const SingleProduct = () => {
  const router = useRouter()
  const { id } = router.query

  const { singleProd, singleProdLoading, singleProdError } =
    useSingleProduct({ id })

  if (singleProdLoading) return <p>Loading...</p>
  if (singleProdError) return <ErrorMessage error={singleProdError} />

  const { Product } = singleProd

  return (
    <>
      <h2>{Product?.name}</h2>
      <p>{Product?.price}</p>
      <p>{Product?.description}</p>
    </>
  )
}

const Product = () => {
  return <SingleProduct />
}

export default Product
