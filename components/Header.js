import React from 'react'
import Link from 'next/link'
import HeaderSl from '@/styles/HeaderSl'
import Nav from './Nav'
import Navrap from '@/styles/Navrap'
import Image from 'next/image'
import shop from '../assets/images/products/shop67.png'

const Header = () => (
  <HeaderSl data-testid="top-navigation">
    <Navrap>
      <Link href={'/'} passHref>
        <a>
          <Image
            data-testid="logo"
            src={shop}
            width={57}
            height={56}
            alt={'logo'}
          />
        </a>
      </Link>
      <Nav />
    </Navrap>
  </HeaderSl>
)

export default Header
