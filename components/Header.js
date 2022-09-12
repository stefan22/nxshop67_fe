import styled from 'styled-components'
import Link from 'next/link'
import HeaderSl from './styles/HeaderSl'
import LogoSl from './styles/LogoSl'
import Nav from './Nav'

const Bar = styled.div`
  width: 100%;
  height: 88px;
  border-bottom: 10px solid var(--grey);
  display: flex;
  padding: 0;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
`

const Header = () => {
  return (
    <HeaderSl>
      <Bar>
        <LogoSl>
          <Link href="/">Shop67</Link>
        </LogoSl>
        <Nav />
      </Bar>
    </HeaderSl>
  )
}

export default Header
