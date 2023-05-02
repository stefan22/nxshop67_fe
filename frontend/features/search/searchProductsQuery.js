import gql from 'graphql-tag'

const searchProductsQuery = gql`
  query searchProductsQuery($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [{ name_contains_i: $searchTerm }, { description_contains_i: $searchTerm }]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`

export default searchProductsQuery
