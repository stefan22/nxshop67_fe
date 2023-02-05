import React, { useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import routeNProgress from '../components/n-progress'
import withApollo from '../lib/withData'
import Layout from '@/components/layout'
// styles
import '../styles/reset.css'

const App = ({ Component, pageProps, apollo }) => {
  useEffect(() => {
    routeNProgress()
    return () => routeNProgress
  }, [])

  return (
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  // eslint-disable-next-line no-console
  console.log('page props ', pageProps)

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}

export default withApollo(App)
