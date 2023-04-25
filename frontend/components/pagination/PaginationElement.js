import React from 'react'
import { PaginationStyled } from './Pagination.styled'
import Head from 'next/head'
import Link from 'next/link'
const PaginationElement = ({ currentPage, totalPages, totalCount }) => (
  <PaginationStyled animate={{ opacity: 1 }}>
    <Head>
      <title>
        Shop67 - Page {currentPage} of {totalPages}
      </title>
    </Head>

    <Link href={`/products/${currentPage - 1}`}>
      <a aria-disabled={currentPage <= 1}>⇐ Prev</a>
    </Link>

    <p>
      Page {currentPage} of {totalPages}
    </p>
    <p>Total items: {totalCount}</p>

    <Link href={`/products/${currentPage + 1}`}>
      <a aria-disabled={currentPage >= totalPages}>Next ⇒</a>
    </Link>
  </PaginationStyled>
)

export default PaginationElement
