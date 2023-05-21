import { useEffect, useState } from 'react'
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
import { useCurrentUser } from '../../features/current-user'

const Modal = () => {
  const { user } = useCurrentUser()

  const [close, setClose] = useState(false)
  const closeModal = () => {
    setClose(!close)
  }

  useEffect(() => {
    if (!user) setClose(true)
  }, [user])

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
