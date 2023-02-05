import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from '../header'
import GlobalStyles from '../../styles/GlobalStyles'
import { PageWrapperSl, InnerWrapperSl } from './Layout.styles'

export const Layout = ({ children }) => (
  <PageWrapperSl>
    <GlobalStyles />
    <Head>
      <title>NxShop67</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <InnerWrapperSl>{children}</InnerWrapperSl>
  </PageWrapperSl>
)

Layout.propTypes = {
  children: PropTypes.any
}
