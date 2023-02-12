import styled from 'styled-components'

const DeleteButton = styled.div`
  padding: 0;
  margin: 0;
  background: transparent;
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5px;
    font-size: var(--fontsmall);
    letter-spacing: 0.25px;
    background: var(--satred);
    box-shadow: var(--bs5);
    font-weight: 300;
    height: 43px;
    transform: translateY(-1px) perspective(200px);
    border-bottom: 1px solid var(--satred);
    border-right: 1px solid var(--satred);
    border-top: 1px solid var(--satred);
    transition: all 0.3s linear 0ms;
    cursor: pointer;
    margin: 0;
    &:hover {
      background: var(--grey);
      overflow: hidden;
      border: 1px solid var(--grey);
    }
  }
`

export default DeleteButton
