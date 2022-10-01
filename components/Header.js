import React from 'react'
import Link from 'next/link'
import HeaderSl from './styles/HeaderSl'
import Nav from './Nav'
import Navrap from '@/cstyles/Navrap'
import Image from 'next/image'
import shop from '@/assets/shop67.png'

const Header = () => {
  return (
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
}

export default Header
