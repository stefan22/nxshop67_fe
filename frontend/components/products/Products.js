import React from 'react'
import Product from '../product'
import { ProductsContainer } from './Products.styles'
import { useProductsPagination } from '../../features/all-products'
import { Pagination } from '../pagination'

const Products = ({ page }) => {
  const { items } = useProductsPagination({ page })

  return (
    <>
      <ProductsContainer data-testid="all-products">
        {items?.map(item => (
          <Product key={item?.id} product={item} />
        ))}
      </ProductsContainer>
      <Pagination page={page} />
    </>
  )
}

export default Products
