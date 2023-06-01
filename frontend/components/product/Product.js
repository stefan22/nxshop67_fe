import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  TitleContainer,
  OnSaleContainer,
  PriceTag,
  ItemContainer
} from './Product.styled'
import { GBPCurrencyFormat as poundFormat } from '../../utils/currencyFormat'
import AddToCart from '../cart/AddToCart'
import { useCurrentUser } from '../../features/current-user'

const Product = ({ product }) => {
  const { user } = useCurrentUser()

  return (
    <ItemContainer animate={{ opacity: 1 }} data-testid="product">
      <OnSaleContainer>ON-SALE!</OnSaleContainer>
      <Link
        passHref
        href={{
          query: { id: `${product?.id}` },
          pathname: `/product/${product?.id}`
        }}
      >
        <picture>
          <Image
            data-testid="product-image"
            layout="intrinsic"
            objectFit="cover"
            loading="lazy"
            width={242}
            height={273}
            src={product?.photo?.image.publicUrlTransformed}
            alt={product?.name}
          />
        </picture>
      </Link>
      <PriceTag>{poundFormat(product?.price)}</PriceTag>
      <TitleContainer>
        <span>{product?.name}</span>
        <AddToCart user={user || null} id={product.id} />
      </TitleContainer>
    </ItemContainer>
  )
}

export default Product
