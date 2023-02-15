import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import { currentUserQuery } from '../../hooks/current-user/currentUserQuery'
import SignoutBtn from './Signout.styles'

const signOutMutation = gql`
  mutation signOutMutation {
    endSession
  }
`

const SignOut = () => {
  const router = useRouter()
  const [signout] = useMutation(signOutMutation, {
    refetchQueries: [{ query: currentUserQuery }]
  })

  const doSignout = async e => {
    e.preventDefault()
    let { data } = await signout()
    if (data.endSession) return router.push('/')
  }

  return (
    <SignoutBtn type="button" onClick={doSignout}>
      Sign Out
    </SignoutBtn>
  )
}

export default SignOut
