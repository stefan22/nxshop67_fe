import Head from 'next/head'
import Carousel from '../components/carousel'
const IndexPage = props => {
  // eslint-disable-next-line no-console
  console.log(props, 'props')

  return (
    <>
      <Head>
        <title>NXShop67 - Home page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Carousel />
    </>
  )
}

export async function getServerSideProps({ req }) {
  const headers = req ? req.headers : {}
  return { props: { headers } }
}
export default IndexPage
