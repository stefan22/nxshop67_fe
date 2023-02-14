import React from 'react'
import { useRouter } from 'next/router'
import Products from '../../components/products'
import { Pagination } from '../../components/pagination'
import { perPage } from '../../next.config'

const ProductsPage = () => {
  const { query } = useRouter()
  const page = parseInt(query.page)
  return (
    <>
      <Products page={page} perPage={perPage} />
      <Pagination page={page || 1} />
    </>
  )
}

export default ProductsPage
