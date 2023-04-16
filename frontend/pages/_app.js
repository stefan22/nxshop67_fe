import React, { useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'
import routeNProgress from '../components/n-progress'
import withApollo from '../utils/withData'
import { CartContextProvider } from '../utils/cartContext'
import Layout from '../components/layout'
import '../styles/reset.css'
import GlobalStyles from '../styles/GlobalStyles'

const App = ({ Component, pageProps, apollo }) => {
  useEffect(() => {
    routeNProgress()
  }, [])

  return (
    <>
      <Head>
        <title>NxShop67</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="nxshop67 site app proj" />
        <link rel="shortcut icon" href="/icon-192.png" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <ApolloProvider client={apollo}>
        <GlobalStyles />
        <CartContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </ApolloProvider>
    </>
  )
}

App.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
    // eslint-disable-next-line no-console
    console.log('pageprops ', pageProps)
  }
  pageProps.query = ctx.query

  return {
    pageProps
  }
}

export default withApollo(App)
