import gql from 'graphql-tag'
export const allProductsQuery = gql`
  query allProductsQuery {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`
