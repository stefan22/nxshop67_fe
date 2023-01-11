import React from 'react'
import { ApolloProvider } from '@apollo/client'
import Layout from '../components/Layout'
import routeNProgress from '../lib/nProgress/routeNProgress'
import withApollo from '../lib/withData'
// styles
import '../styles/reset.css'
import '../lib/nProgress/nprogress.css'

// on route changes anim
routeNProgress()

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ApolloProvider>
)

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
