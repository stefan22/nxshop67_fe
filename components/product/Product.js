import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TitleContainer, OnSaleContainer, PriceTag, ItemContainer } from './Product.styles'
import { GBPCurrencyFormat as poundFormat } from '@/lib/currencyFormat'

const Product = ({ product }) => (
  <ItemContainer data-testid="product">
    <OnSaleContainer>ON-SALE!</OnSaleContainer>
    <Link href={`/product/${product?.id}`}>
      <picture>
        <Image
          layout="intrinsic"
          objectFit="cover"
          loading="lazy"
          width={267}
          height={294}
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
        Edit &#x23F5;
      </Link>
    </TitleContainer>
  </ItemContainer>
)

export default Product
