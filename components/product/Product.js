import React from 'react'
import Link from 'next/link'
import {
  TitleContainer,
  OnSaleContainer,
  PriceTag,
  ItemContainer
} from './Product.styles'
import { GBPCurrencyFormat as poundFormat } from '@/lib/currencyFormat'

const Product = ({ product }) => (
  <ItemContainer data-testid="product">
    <OnSaleContainer>ON-SALE!</OnSaleContainer>
    <Link href={`/product/${product?.id}`}>
      <picture>
        <source srcSet={product?.photo?.image.publicUrlTransformed} />
        <img
          src={product?.photo?.image.publicUrlTransformed}
          alt={product?.name}
        />
      </picture>
    </Link>
    <PriceTag>{poundFormat(product?.price)}</PriceTag>
    <TitleContainer>
      <span>{product?.name}</span>

      <Link
        href={{
          pathname: '/update',
          query: {
            id: product?.id
          }
        }}
      >
        Edit
      </Link>
    </TitleContainer>
  </ItemContainer>
)

export default Product
