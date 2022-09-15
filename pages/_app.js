// @ts-check
import { ApolloProvider } from '@apollo/client'
import Layout from '@/components/Layout'
import routeNProgress from '@/lib/nProgress/routNProgress'
import withData from '@/lib/withData'
// styles
import '@/styles/reset.css'
import '@/lib/nProgress/nprogress.css'

const App = ({ Component, pageProps, apollo }) => {
  // on route changes with NProgress, show the loading bar
  routeNProgress()
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
  // exposes the query to the user
  pageProps.query = ctx.query
  // exposes apollo client to the user
  return { pageProps }
}

export default withData(App)
