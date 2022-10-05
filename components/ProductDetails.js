import React from 'react'

const ProductDetails = ({ product }) => {
  return (
    <div data-testid="product-details">
      <picture>
        <img
          src={product?.photo.image.publicUrlTransformed}
          alt={product?.name}
          width={640}
          height={725}
        />
      </picture>
      <h2>{product?.name}</h2>
      <p>{product?.price}</p>
      <p>{product?.description}</p>
    </div>
  )
}

export default ProductDetails
