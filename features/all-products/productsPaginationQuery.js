import gql from 'graphql-tag'
export const productsPaginationQuery = gql`
  query productsPaginationQuery($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
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
