import gql from 'graphql-tag'

const singleProductQuery = gql`
  query singleProductQuery($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      photo {
        image {
          filename
          publicUrlTransformed
        }
        altText
      }
    }
  }
`

export default singleProductQuery
