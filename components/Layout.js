import styled from 'styled-components'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('./Header'), {
  ssr: true
})

const PageWrapperSl = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  min-height: 100%;
  width: 100%;
  padding: 0;
  background-color: var(--offWhite);
`

/* products below header comp */
const InnerWrapperSl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  @media screen and (max-width: 1419px) {
    //width: 100%;
  }
  @media screen and (max-width: 1340px) {
    //padding: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <PageWrapperSl>
      <Head>
        <title>NxShop67</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>

      <DynamicHeader />
      <InnerWrapperSl>{children}</InnerWrapperSl>
    </PageWrapperSl>
  )
}

export default Layout
