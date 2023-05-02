import Carousel from '../components/carousel'
import { SkeleLoader, withLoading } from '../components/loader'
import Search from '../components/search'

const Home = () => {
  return (
    <>
      <Carousel />
      <Search />
    </>
  )
}

export async function getServerSideProps({ req }) {
  const headers = req ? req.headers : {}
  return { props: { headers } }
}

export default withLoading(Home, SkeleLoader)
