import Head from 'next/head'
import Link from 'next/link'
import Contactus from './ContactUs.styles'
import SkeleLoader from '../../components/loader'
import { Main } from '../../styles/SharedStyles'
import { StyledBtn } from '../../styles/SharedStyles'

const ContactUs = () => {
  return (
    <Contactus>
      <Main>
        <Head>
          <title>NXShop67 - Contact-us</title>
        </Head>
        <h1>Contact-us</h1>
        <p>Lorem suum suum</p>
        <StyledBtn href="/" name="home" primary={false} className="okay" />
        {/*<SkeleLoader />*/}
      </Main>
    </Contactus>
  )
}
export default ContactUs
