import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TitleContainer, OnSaleContainer, PriceTag, ItemContainer } from './Product.styles'
import { GBPCurrencyFormat as poundFormat } from '@/lib/currencyFormat'
import { DeleteProduct } from '@/components/delete-product'

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
      <DeleteProduct btnName="Delete" id={product?.id} />
    </TitleContainer>
  </ItemContainer>
)

export default Product
