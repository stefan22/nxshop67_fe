import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import Router from 'next/router'
import { currentUserQuery } from '../graphql/currentUserQuery'

const signOutMutation = gql`
  mutation signOutMutation {
    endSession
  }
`

const SignOut = () => {
  const [signout] = useMutation(signOutMutation, {
    refetchQueries: [{ query: currentUserQuery }]
  })

  const doSignout = async e => {
    e.preventDefault()
    let { data } = await signout()
    if (data.endSession) return Router.push({ pathname: '/' })
  }

  return (
    <button type="button" onClick={doSignout}>
      Sign Out
    </button>
  )
}

export default SignOut
