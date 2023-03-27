import gql from 'graphql-tag'

const paginationQuery = gql`
  query paginationQuery {
    _allProductsMeta {
      count
    }
  }
`

export default paginationQuery
