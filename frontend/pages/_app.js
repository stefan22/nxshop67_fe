import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'
import routeNProgress from '../components/n-progress'
import withApollo from '../utils/withData'
import Layout from '../components/layout'
import '../styles/reset.css'
import GlobalStyles from '../styles/GlobalStyles'

const App = ({ Component, pageProps, apollo }) => {
  const page = useRouter()

  useEffect(() => {
    routeNProgress()
  }, [])

  return (
    <>
      <Head>
        <title>NxShop67</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ApolloProvider client={apollo}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} key={page.route} />
        </Layout>
      </ApolloProvider>
    </>
  )
}

App.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query

  return {
    DATABASE_URL: process.env.DATABASE_URL,
    pageProps
  }
}

export default withApollo(App)
