import React from 'react'
import Link from 'next/link'
import { HeaderContainer, Navwrap } from './Header.styled'
import Nav from '../nav'
import Image from 'next/image'

const Header = () => (
  <HeaderContainer data-testid="top-navigation">
    <Navwrap>
      <Link href={'/'} passHref>
        {/*a tags removed console warning*/}
        <a>
          <Image
            layout="intrinsic"
            objectFit="cover"
            data-testid="logo"
            src={
              'https://res.cloudinary.com/dak4fznwo/image/upload/v1675702122/shop67_zhs44u.png'
            }
            width={40}
            height={45}
            alt={'logo'}
            className="image-logo"
          />
        </a>
      </Link>
      <Nav />
    </Navwrap>
  </HeaderContainer>
)

export default Header
