import React from 'react'
import { ApolloProvider } from '@apollo/client'
import Layout from '@/components/Layout'
import routeNProgress from '@/lib/nProgress/routeNProgress'
import withData from '@/lib/withData'
// styles
import '@/styles/reset.css'
import '@/lib/nProgress/nprogress.css'

// on route changes anim
routeNProgress()

const App = ({ Component, pageProps, apollo }) => {
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

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}

export default withData(App)
