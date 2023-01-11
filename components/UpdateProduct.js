import { useRouter } from 'next/router'
import { useSingleProduct } from '../hooks/single-product'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

// const productUpdateMutation = gql`
//   mutation productUpdateMutation(
//     $id: ID!
//     $name: String
//     $description: String
//     $price: Int
//   ) {
//     updateProduct(
//       id: $id
//       data: {
//         id: $id
//         name: $name
//         description: $description
//         price: $price
//       }
//     ) {
//       id
//       name
//       description
//       price
//     }
//   }
// `

const UpdateProduct = () => {
  const router = useRouter()
  const { id } = router.query
  const { singleProd, singleProdLoading, singleProdError } =
    useSingleProduct(id)

  if (singleProdLoading) return <p>Loading...</p>
  if (singleProdError) return <p>{singleProdError}</p>

  const { Product } = singleProd

  // const [updateProduct, { data, error, loading }] = useMutation(
  //   productUpdateMutation
  // )

  //  console.log(updateProduct, data, error, loading)

  return (
    <div className="product-update">
      {!singleProdLoading && (
        <>
          <p>NAME: {Product.name}</p>
          <p>DESC: {Product.description}</p>
          <p>PRICE: {Product.price}</p>
          <p>IMG SRC: {Product.photo.image.publicUrlTransformed}</p>
        </>
      )}
    </div>
  )
}

export default UpdateProduct
