import { useQuery } from '@apollo/client'
import Head from 'next/head'
import Link from 'next/link'
import { paginationQuery } from '../../features/all-products'
import { PaginationStyled } from './Pagination.styled'
import getConfig from 'next/config'

// env set to 5
const { publicRuntimeConfig } = getConfig()
const perPage = parseInt(publicRuntimeConfig.GQL_PER_PAGE) || 2

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
    <PaginationStyled animate={{ opacity: 1 }}>
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
    </PaginationStyled>
  )
}

export default Pagination
