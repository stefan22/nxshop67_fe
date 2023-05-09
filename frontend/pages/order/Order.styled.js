import styled from 'styled-components'

const OrderStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 2rem;
  border-top: 10px solid red;
  & > p {
    display: grid;
    grid-template-columns: 1fr 5fr;
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
  .order-item {
    border-bottom: 1px solid var(--offWhite);
    display: grid;
    grid-template-columns: 300px 1fr;
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
`

const OrderUl = styled.ul`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(4, 1fr);
  padding: 0;
  grid-template-columns: repeat(5, 250px);
  grid-gap: 1rem 3rem;
`

export { OrderStyles, OrderItemStyles, OrderUl, OrdersWrapper }
