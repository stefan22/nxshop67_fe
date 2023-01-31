import React from 'react'
import Link from 'next/link'
import HeaderContainer from './Header.styles'
import Nav from '../Nav'
import Navrap from '@/styles/Navrap'
import Image from 'next/image'
import shop from '@/assets/products/shop67.png'

const Header = () => (
  <HeaderContainer data-testid="top-navigation">
    <Navrap>
      <Link href={'/'} passHref>
        <a>
          <Image
            data-testid="logo"
            src={shop}
            width={51}
            height={50}
            alt={'logo'}
          />
        </a>
      </Link>
      <Nav />
    </Navrap>
  </HeaderContainer>
)

export default Header
