import Link from 'next/link'
import ItemSl from './styles/ItemSl'
import PriceTag from './styles/PriceTag'
import TitleSl from './styles/TitleSl'
import OnSaleSl from './styles/OnSaleSl'
import { GBPCurrencyFormat as poundFormat } from '../lib/currencyFormat'

const Product = ({ product }) => {
  return (
    <ItemSl>
      <h2>{product?.name}</h2>
      <h3 className="heading_H3">{product?.description}</h3>
      <OnSaleSl>ON-SALE!</OnSaleSl>
      <picture>
        <source srcSet={product?.photo?.image.publicUrlTransformed} />
        <img
          src={product?.photo?.image.publicUrlTransformed}
          alt={product?.name}
        />
      </picture>

      <TitleSl>
        <Link href={`/product/${product?.id}`}>{product?.name}</Link>
      </TitleSl>
      <PriceTag>{poundFormat(product?.price)}</PriceTag>
    </ItemSl>
  )
}

export default Product
