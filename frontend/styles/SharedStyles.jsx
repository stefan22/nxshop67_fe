import styled from 'styled-components'
import Link from 'next/link'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`

const Button = styled.button`
  font-size: var(--fontxt);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--white);
  margin: 0 0 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  background: ${props => (props.primary ? 'var(--red)' : 'var(--yellow)')};
`

const StyledLink = ({ href, name }) => (
  <Link href={href} passHref legacyBehavior>
    <StyledA>{name}</StyledA>
  </Link>
)

const StyledBtn = ({ href, name, className }) => (
  <Link href={href} passHref legacyBehavior>
    <Button primary className={className}>
      {name}
    </Button>
  </Link>
)

const Cards = () => {
  return (
    <FlexContainer>
      <Card>
        <StyledLink href="/about" name="About Page &rarr;" />
      </Card>
    </FlexContainer>
  )
}

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
  a {
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`

const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  border: 1px solid var(--offWhite);
  thead {
    font-size: 10px;
  }
  td,
  th {
    border-bottom: 1px solid var(--offWhite);
    border-right: 1px solid var(--offWhite);
    padding: 10px 5px;
    position: relative;
    &:last-child {
      border-right: none;
      width: 150px;
      button {
        width: 100%;
      }
    }
  }
  tr {
    &:hover {
      background: var(--offWhite);
    }
  }
`

export { Card, StyledBtn, Container, Main, Title, Description }
