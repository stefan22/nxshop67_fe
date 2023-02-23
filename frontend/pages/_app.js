import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import routeNProgress from '../components/n-progress'
import withApollo from '../utils/withData'
import Layout from '../components/layout'
import '../styles/reset.css'
import GlobalStyles from '../styles/GlobalStyles'
import { theme } from '../utils/theme'

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
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} key={page.route} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}

export default withApollo(App)
