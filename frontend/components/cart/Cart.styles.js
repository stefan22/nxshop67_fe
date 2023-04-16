import styled from 'styled-components'

const CartContainer = styled.div`
  padding: 0.75rem 1.35rem 1rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  background: #f5f5f5;
  border: 1px solid #cccccc;
  overflow: initial !important;
  ${props => props.close && `right: -20%`};

  header {
    display: flex;
    border-bottom: 5px solid var(--black);
    margin-bottom: 2rem;
    padding-top: 0;
    margin-top: 0;
    padding-bottom: 2rem;

    h3 {
      margin-top: 0;
      padding-top: 0;
      font-size: var(--fontheading);
    }
  }

  ul {
    display: grid;
    width: 100%;
    padding: 1rem !important;
    overflow: auto !important;
    background: white;
    grid-gap: 10px;
    outline: none;
    box-shadow: none;
    border: none;
    grid-template-rows: repeat(1, auto);
    grid-template-columns: repeat(1, auto);

    li {
      justify-content: flex-start;
      grid-template-rows: repeat(2, max-content);
      min-height: 104px;
      display: flex;
      text-align: left;
    }
  }

  footer {
    border-top: 10px double var(--black);
    margin-top: 2rem;
    padding-top: 2rem;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`

const Heading = styled.h3`
  background: var(--red);
  color: white;
  display: inline-block;
  padding: 4px 5px;
  transform: skew(-3deg);
  margin: 0;
  font-size: 4rem;
`

const CloseButton = styled.button`
  background: var(--grey);
  color: white !important;
  padding: 0.2rem 0.5rem !important;
  font-size: 1.2rem;
  border: 0;
  position: absolute;
  z-index: 2;
  left: 20px;
`

const CartListItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`

export { CartContainer, Heading, CloseButton, CartListItem }
