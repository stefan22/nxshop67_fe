import React, { useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import routeNProgress from '../components/nProgress'
import withApollo from '../lib/withData'
import Layout from '@/components/layout'
// styles
import '../styles/reset.css'

let pageProps = {}

const App = ({ Component, pageProps, apollo }) => {
  useEffect(() => {
    routeNProgress()
    return () => routeNProgress
  }, [pageProps])

  return (
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  // eslint-disable-next-line no-console
  console.log('page props ', pageProps)

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}

export default withApollo(App)
