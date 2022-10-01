import React from 'react'
import Image from 'next/image'

const ProductDetails = ({ product }) => {
  return (
    <>
      <Image
        src={product?.photo.image.publicUrlTransformed}
        alt={product?.name}
        width={640}
        height={725}
      />
      <h2>{product?.name}</h2>
      <p>{product?.price}</p>
      <p>{product?.description}</p>
    </>
  )
}

export default ProductDetails
