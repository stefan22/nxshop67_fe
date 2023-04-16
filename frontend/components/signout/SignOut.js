import { useMutation } from '@apollo/client'
import { signOutMutation } from '../../features/form'
import { useRouter } from 'next/router'
import { currentUserQuery, useCurrentUser } from '../../features/current-user'

const SignOut = () => {
  const router = useRouter()
  const { user } = useCurrentUser()
  const [signout] = useMutation(signOutMutation, {
    refetchQueries: [{ query: currentUserQuery }]
  })

  const doSignout = async e => {
    e.preventDefault()
    // eslint-disable-next-line no-console
    console.log('user signout.. ', user)
    // end session
    await signout()
    return router.push('/')
  }

  return (
    <button type="button" onClick={doSignout}>
      Sign Out
    </button>
  )
}

export default SignOut
