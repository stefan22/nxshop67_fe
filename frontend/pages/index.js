import Carousel from '../components/carousel'
import { SkeleLoader, withLoading } from '../components/loader'

export async function getServerSideProps({ req }) {
  const headers = req ? req.headers : {}
  return { props: { headers } }
}

export default withLoading(Carousel, SkeleLoader)
