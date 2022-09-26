import React from 'react'
import { useRouter } from 'next/router'
import SingleProduct from '@/graphql/singleProductQuery'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  return <SingleProduct id={id} />
}

export default Product
