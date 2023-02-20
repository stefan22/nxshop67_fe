import Head from 'next/head'
import Link from 'next/link'
import Carousel from '../components/carousel'

const IndexPage = () => {
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

export default IndexPage
