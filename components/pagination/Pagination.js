import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Head from 'next/head'
import Link from 'next/link'
import PaginationStyles from './Pagination.styles'
import { perPage } from '../../next.config'

export const paginationQuery = gql`
  query paginationQuery {
    _allProductsMeta {
      count
    }
  }
`
const Pagination = ({ page }) => {
  const {
    error: errorPagination,
    loading: loadingPagination,
    data: dataPagination
  } = useQuery(paginationQuery)

  if (loadingPagination) return <p>Loading...</p>
  // eslint-disable-next-line no-console
  if (errorPagination) return console.log(`[Error:msg]: ${errorPagination}`)

  const { count } = dataPagination._allProductsMeta
  const pageCount = Math.ceil(count / perPage)

  return (
    <PaginationStyles>
      <Head>
        <title>
          Shop67 - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>⇐ Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>Total items: {count}</p>

      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next ⇒</a>
      </Link>
    </PaginationStyles>
  )
}

export default Pagination
