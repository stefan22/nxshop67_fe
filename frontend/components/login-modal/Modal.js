import { useEffect } from 'react'
import { launchFireworksFromSidelines } from '../../utils'
import {
  ModalWrapper,
  ModalContent,
  ModalHeading,
  IconAward,
  ModalClose,
  ButtonBlue,
  ButtonRed
} from './Modal.styled'
import { Astronaut } from '../../utils'
import Link from 'next/link'

const Modal = ({ setClose, close }) => {
  const closeModal = () => {
    setClose(!close)
  }

  useEffect(() => {
    window.addEventListener('keyup', event => {
      if (event.key === 'Escape') {
        closeModal()
      }
    })
  })

  return (
    <ModalWrapper close={close}>
      <ModalContent>
        <ModalClose onClick={closeModal}>X</ModalClose>
        <IconAward>
          {' '}
          <Astronaut />{' '}
        </IconAward>
        <ModalHeading>You must Signin before Adding items to your Cart!</ModalHeading>

        <ButtonBlue onClick={launchFireworksFromSidelines}>
          <Link href="/signin">
            <a className="btn btnprimary">Click here to Signin now</a>
          </Link>
        </ButtonBlue>

        <ButtonRed onClick={launchFireworksFromSidelines}>
          <Link href="/signup">
            <a className="btn btnprimary">To Signup click here!</a>
          </Link>
        </ButtonRed>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
