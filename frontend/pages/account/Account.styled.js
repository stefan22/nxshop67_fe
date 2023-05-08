import styled from 'styled-components'

const AccountContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem 3rem;
  min-height: 450px;
  margin: 3rem 0;
  padding: 2rem;
  width: 80%;
`
const AccountGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: 1px solid var(--dgray);
  padding: 1rem;
`

const AccountBottom = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  h3 {
    text-align: center;
  }
`
const H1 = styled.h1`
  display: flex;
  font-size: var(--fontlarge);
  svg {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50px;
    margin: 0 5px;
    path {
      fill: var(--yellow);
    }
  }
`

const AccountBtn = styled.button`
  display: flex;
  background: transparent;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  box-shadow: var(--bs4);
  border: 1px solid var(--lightblue);
  background: var(--darkblue);
  a {
    color: var(--white);
    font-weight: 300;
    font-size: var(--fontween);
  }
`

export { AccountContainer, AccountGroup, AccountBtn, AccountBottom, H1 }
