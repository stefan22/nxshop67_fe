import React from 'react'
import Link from 'next/link'
import ItemSl from './styles/ItemSl'
import PriceTag from './styles/PriceTag'
import TitleSl from './styles/TitleSl'
import OnSaleSl from './styles/OnSaleSl'
import { GBPCurrencyFormat as poundFormat } from '../lib/currencyFormat'

const Product = ({ product }) => (
  <ItemSl data-testid="product">
    <OnSaleSl>ON-SALE!</OnSaleSl>
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
    <TitleSl>
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
    </TitleSl>
  </ItemSl>
)

export default Product
