import styled from 'styled-components'

const OrderStyles = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid var(--gray);
  box-shadow: var(--bs);
  padding: 2rem;
  h3,
  h5 {
    width: 100%;
    max-inline-size: initial;
    display: flex;
    justify-content: center;
    span {
      color: var(--satred);
      margin-left: 10px;
      display: flex;
    }
  }
  h5 > span {
    color: var(--darkblue);
  }
  & > p {
    display: grid;
    grid-template-columns: 2fr 4fr;
    margin: 0;
    border-bottom: 1px solid var(--offWhite);
    span {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }
`

const OrderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  h4 {
    text-align: center;
  }
  p > span {
    display: flex;
    margin-left: 0.5rem;
  }
`

const OrderItemStyles = styled.li`
  box-shadow: var(--bs5);
  list-style: none;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid var(--lightred);
  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    justify-content: flex-start;
    height: 70px;
    img {
      object-fit: contain;
      width: 100%;
      max-height: 70px;
    }
  }
  .order-meta {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 1rem 3rem;
    text-align: center;
    h4 {
      background: var(--darkblue);
      color: var(--white);
      border-radius: 2px;
    }
    & > * {
      margin: 0;
      background: rgba(0, 0, 0, 0.03);
      padding: 1rem 0;
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
    p {
      font-size: var(--fontone);
      color: var(--darkgrey);
      background: var(--offwhite);
      justify-content: center;
    }
  }
`

const OrdersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const OrderUl = styled.ul`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(4, 1fr);
  padding: 0;
  grid-template-columns: repeat(5, 250px);
  grid-gap: 1rem 3rem;
`

const OrderItems = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 3rem 0;
  padding: 0;
`

const OrderContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-bottom: 3rem;
  border-radius: 4px;
  border: 1px solid var(--gray);
  box-shadow: var(--bs);
  padding: 2rem;
  h3,
  h5 {
    width: 100%;
    max-inline-size: initial;
    display: flex;
    justify-content: center;
    span {
      color: var(--satred);
      margin-left: 10px;
      display: flex;
    }
  }
  h5 > span {
    color: var(--darkblue);
  }
  & > p {
    display: grid;
    grid-template-columns: 2fr 4fr;
    margin: 0;
    border-bottom: 1px solid var(--offWhite);
    span {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }
`

const OrderItem = styled.li`
  box-shadow: var(--bs2);
  list-style: none;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid var(--lightred);
  h2 {
    font-size: var(--fontxt);
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding: 0.75rem 0;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    justify-content: flex-start;
    height: 70px;
    img {
      object-fit: contain;
      width: 100%;
      max-height: 70px;
    }
  }
  .order-meta {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 1rem 3rem;
    text-align: center;
    h4 {
      background: var(--darkblue);
      color: var(--white);
      border-radius: 2px;
    }
    & > * {
      margin: 0;
      background: rgba(0, 0, 0, 0.03);
      padding: 1rem 0;
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
    p {
      font-size: var(--fontone);
      color: var(--darkgrey);
      background: var(--offwhite);
      justify-content: center;
    }
  }
`

export {
  OrderStyles,
  OrderItems,
  OrderItem,
  OrderContainer,
  OrderItemStyles,
  OrderUl,
  OrdersWrapper,
  OrderWrapper
}
