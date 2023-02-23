import React, { useEffect } from 'react'
import Product from '../product'
import { ProductsContainer } from './Products.styles'
import { useProductsPagination } from '../../features/all-products'
import { Pagination } from '../pagination'

const Products = ({ page }) => {
  const { items, loading, setLoading } = useProductsPagination({ page })

  useEffect(() => {
    setLoading(false)
  }, [setLoading])

  if (loading) return <p>Loading...</p>

  return (
    <>
      <ProductsContainer data-testid="all-products">
        {!loading && items?.map(item => <Product key={item?.id} product={item} />)}
      </ProductsContainer>
      <Pagination page={page} />
    </>
  )
}

export default Products
