import styled from 'styled-components'

const ModalWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10000;
  display: block;
  ${props => !props.close && `display: none`};
`
const ModalContent = styled.div`
  padding: 4rem 3rem;
  background-color: #fdfdfd;
  border: 2px solid #9d9d9d;
  box-shadow: var(--bs4);
  border-radius: 5px;
  z-index: 100000;
  text-align: center;
  position: relative;
`

const ModalHeading = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 5px;
  padding-bottom: 0.5rem;
`

const ModalClose = styled.button`
  position: absolute;
  color: white;
  right: 5px;
  top: 10px;
  background-color: var(--medgrey);
  border: 0;
  padding: 5px 10px;
  font-size: 1rem;
`

const IconAward = styled.p`
  font-size: 4rem;
  margin: 1rem 0;
  padding: 0;
  svg {
    width: 50px;
    height: auto;
    fill: red;
  }
`

const ButtonBlue = styled.button`
  display: block;
  background-color: var(--lightblue);
  font-size: 1rem;
  border: 0;
  margin: 1rem auto 0;
  border-radius: 4px;
  box-shadow: var(--bs);
  a {
    color: var(--white);
    cursor: pointer;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const ButtonRed = styled.button`
  display: block;
  background-color: var(--ored);
  font-size: 1rem;
  border: 0;
  margin: 1rem auto 0;
  border-radius: 4px;
  box-shadow: var(--bs);
  a {
    color: var(--white);
    cursor: pointer;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export {
  ModalWrapper,
  ModalContent,
  ModalHeading,
  ModalClose,
  IconAward,
  ButtonBlue,
  ButtonRed
}
