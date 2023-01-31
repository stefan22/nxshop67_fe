import React from 'react'
import Link from 'next/link'
import { HeaderContainer, Navwrap } from './Header.styles'
import Nav from '../Nav'
import Image from 'next/image'
import shop from '@/assets/products/shop67.png'

const Header = () => (
  <HeaderContainer data-testid="top-navigation">
    <Navwrap>
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
    </Navwrap>
  </HeaderContainer>
)

export default Header
