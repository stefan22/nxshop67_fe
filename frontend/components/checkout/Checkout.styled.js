import styled from 'styled-components'

const CheckoutError = styled.p`
  display: ${props => (props.ckerror ? 'block' : 'none')};
  font-size: 13px;
  justify-content: center;
  top: -94px;
  left: 0;
  margin-left: 0;
  width: 100%;
`

const CheckoutFormStyles = styled.form`
  margin-left: 1rem;
  display: grid;
  grid-gap: 1rem;
`

export { CheckoutError, CheckoutFormStyles }
