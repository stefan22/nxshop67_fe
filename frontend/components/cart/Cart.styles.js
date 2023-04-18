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
    border-bottom: 1px solid var(--logray);
    padding-top: 0;
    margin-top: 0;
    padding-bottom: 0.5rem;

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

const HeadingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(42px, auto);
  width: 100%;
  margin-bottom: 2rem;
  header {
    margin: 0 0 0 50px;
    grid-column: 1 / span 3;
    grid-row: 1;
  }
`

const Heading = styled.h3`
  color: var(--black);
  width: 100%;
  display: flex;
  font-size: 3rem;
  font-weight: 400;
  transform: scale(1.2);
  font-variant-caps: all-petite-caps;
  justify-content: center;
  align-items: center;
  margin: 0;
  svg {
    display: flex;
    margin: 0 10px;
    height: 30px;
    font-size: 0.94rem;
  }
`

const CloseButton = styled.button`
  background: var(--darkblue);
  padding: 0.25rem 0.5rem !important;
  font-size: 1.25rem;
  vertical-align: middle;
  border: 0;
  position: absolute;
  z-index: 2;
  height: 30px;
  top: 15px;
  left: 20px;
  svg {
    path {
      fill: white;
      stroke: white;
    }
  }
`

const CartListItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px dotted var(--grey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
    width: 100px !important;
    height: auto !important;
  }
`

const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 10px;
  h3,
  p {
    margin: 0;
    svg {
      path {
        stroke: var(--lightblue);
        fill: #fffacd;
      }
    }
  }
  h3 {
    color: var(--lightblue);
    font-size: 1.15rem;
  }
`

export { CartContainer, HeadingWrapper, Heading, CloseButton, CartListItem, CartItemInfo }
