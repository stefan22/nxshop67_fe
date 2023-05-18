import styled from 'styled-components'

const CartContainer = styled.div`
  padding: 0.75rem 1.35rem 1rem 1rem;
  min-width: 383px;
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
  border: 1px solid var(--itemho);
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
    margin: 0;
    width: 100%;
    list-style: none;
    border-top: 1px solid var(--ghostwhite);
    box-shadow: var(--bs);
    padding: 1rem !important;
    overflow: auto !important;
    background: white;
    grid-gap: 10px;
    outline: none;
    grid-template-rows: repeat(1, auto);
    grid-template-columns: repeat(1, auto);

    li {
      justify-content: flex-start;
      grid-template-rows: repeat(2, max-content);
      min-height: 104px;
      display: flex;
    }
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
  background: var(--lightblue);
  border-radius: 3px;
  padding: 0.25rem !important;
  font-size: var(--fontween);
  box-shadow: var(--bs);
  vertical-align: middle;
  border: 0;
  position: absolute;
  height: 25px;
  top: 17px;
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
    width: 156px !important;
    height: auto !important;
  }
`

const CartItemInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 1rem;
  h3,
  p {
    margin: 0;
    line-height: 24px;
    font-size: var(--fontone);
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    em {
      vertical-align: middle;
    }
    svg {
      padding-top: 1px;
      path {
        stroke: var(--goldengray);
        fill: #cdf1ff;
      }
    }
  }
  h3 {
    color: var(--lightblue);
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
  }
`

const FooterInfo = styled.footer`
  display: flex;
  width: 100%;
  padding: 1.5rem 1rem 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  border-bottom: 1px solid var(--ghostwhite);

  .footer-total {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    span {
      font-size: var(--fontsmall);
      text-align: left;
      margin-right: 1rem;
      display: flex;
      color: var(--gray);
    }
    svg {
      margin-right: 0.25rem;
      path {
        fill: var(--itemho);
      }
      path {
        stroke: var(--ligthblue);
      }
    }

    p {
      margin: 0;
      padding: 0.5rem 0;
      font-weight: 400;
      font-size: var(--fontween);
      color: var(--satred);
    }
  }
  .footer-checkout {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    padding: 1rem 0;
    form {
      margin-left: 0;
    }
    p {
      color: var(--ored);
      position: absolute;
      top: -35px;
      left: 15px;
      margin-left: 1.5rem;
    }

    div.StripeElement {
      border: 1px solid var(--darkblue);
      padding: 5px 10px;
      mix-blend-mode: darken;
      box-shadow: var(--bs4);
      border-radius: 4px;
    }
    button {
      background: var(--ored);
      box-shadow: var(--bs4);
      text-underline: none;
      padding: 10px 20px;
      color: var(--white);
      border: 1px solid var(--satred);
      font-size: var(--fontween);
      border-radius: 4px;
    }
  }
`

const ShopCount = styled.div`
  background: var(--red);
  display: flex;
  align-items: baseline;
  justify-content: center;
  color: white;
  border-radius: 50%;
  font-size: 0.64rem;
  padding: 0.25rem 0.3rem;
  position: absolute !important;
  left: -36px;
  top: -14px;
  outline: 1px solid #f45a5a;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  line-height: 1.15;
  vertical-align: middle;
  perspective: 400px;
  transform-origin: 50% 50%;
  ${props =>
    props.count && `transform: rotate(360deg) scale(1.1);`}//background: ${props =>
    props.count && 'green'};
`

const CartCountContainer = styled.span`
  position: relative;
  .count {
    transition: all 0.4s linear 50ms;
    backface-visibility: hidden;
  }
  ${props => props.count === 0 && `visibility: hidden;`};
`

const DeleteItem = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`
const RemoveItem = styled.span`
  line-height: 1.15;
  cursor: pointer;
  svg {
    path {
      stroke-width: 1px;
      stroke: var(--satred) !important;
    }
  }
`

const AddButton = styled.button`
  background: var(--darkblue);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: 1px solid var(--darkblue);
  box-shadow: var(--bs5);
  transform: skewX(1deg);
  display: flex;
  padding: 0 5px;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  letter-spacing: 0.35px;
  ${props =>
    !props.user &&
    `background: var(--gray);
      width: 52% !important;
      border: none;
      box-shadow: var(--bs);
      cursor: not-allowed;
      &:hover {
        background: var(--gray) !important;
        border-color: var(--gray) !important;
      }
  `}
`

export {
  CartContainer,
  HeadingWrapper,
  Heading,
  CloseButton,
  CartListItem,
  CartItemInfo,
  FooterInfo,
  ShopCount,
  CartCountContainer,
  DeleteItem,
  RemoveItem,
  AddButton
}
