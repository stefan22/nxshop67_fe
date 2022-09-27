import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import HeaderSl from './styles/HeaderSl'
import Nav from './Nav'
import Image from 'next/image'
import shop from '@/assets/images/shop76.jpg'

const Bar = styled.div`
  width: 100%;
  height: 80px;
  vertical-align: middle;
  margin-right: 5vw;
  margin-top: 3px;
  border-bottom: 10px solid var(--grey);
  display: flex;
  padding: 0;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
`

const LogoBoxSl = styled.div`
  display: flex;
  width: 159px;
  margin-right: 5vw;
  box-shadow: 0 0 0 3px rgba(101, 101, 117, 0.87);
  height: 44px;
  background: #fc1010;
  outline: 1px solid #e11212;
  object-fit: contain;
  cursor: pointer;
  transform: translate(30px, 13px) rotate(-2deg) perspective(64px)
    skewX(-4deg);
`

const Header = () => {
  return (
    <HeaderSl>
      <Bar>
        <LogoBoxSl>
          <Link href={'/'} passHref>
            <a>
              <Image
                src={shop}
                width={256}
                height={73}
                alt={'logo'}
              />
            </a>
          </Link>
        </LogoBoxSl>
        <Nav />
      </Bar>
    </HeaderSl>
  )
}

export default Header
