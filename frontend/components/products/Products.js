import React from 'react'
import Product from '../product'
import { ProductsContainer } from './Products.styled'
import { useProductsPagination } from '../../features/all-products'
import { Pagination } from '../pagination'
import Modal from '../login-modal'

const Products = ({ page }) => {
  const { items } = useProductsPagination({ page })

  return (
    <>
      <ProductsContainer data-testid="all-products">
        {items?.map(item => (
          <Product key={item?.id} product={item} />
        ))}
      </ProductsContainer>
      <Modal />
      <Pagination page={page} />
    </>
  )
}

export default Products
