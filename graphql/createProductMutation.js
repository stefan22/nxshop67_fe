import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

const createProductMutation = gql`
  mutation createProductMutation(
    $name: String!
    $description: String!
    $price: Int!
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "in-stock"
      }
    ) {
      id
      name
      description
      price
    }
  }
`

const useCreateProduct = () => {
  const [
    createProduct,
    { loading: createProductLoading, error: createProductError }
  ] = useMutation(createProductMutation)

  return [
    createProduct,
    createProductLoading,
    createProductError
  ]
}

export default useCreateProduct
