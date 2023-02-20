import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { ApolloProvider } from '@apollo/client'
import routeNProgress from '../components/n-progress'
import withApollo from '../utils/withData'
import Header from '../components/header'
import Layout from '../components/layout'
import '../styles/reset.css'
import Head from 'next/head'

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

const App = ({ Component, pageProps, apollo }) => {
  const page = useRouter()

  useEffect(() => {
    routeNProgress()
    return () => routeNProgress
  }, [])

  return (
    <>
      <Head>
        <title>NxShop67</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ApolloProvider client={apollo}>
        <Header />
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Layout>
            <Component {...pageProps} key={page.route} />
          </Layout>
        </AnimatePresence>
      </ApolloProvider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  // eslint-disable-next-line no-console
  console.log('page props ', pageProps)

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)

    pageProps.query = ctx.query
    return { pageProps }
  }
}

export default withApollo(App)
