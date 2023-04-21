import { useMutation } from '@apollo/client'
import { signOutMutation } from '../../features/form'
import { useRouter } from 'next/router'
import { currentUserQuery } from '../../features/current-user'

const SignOut = () => {
  const router = useRouter()
  const [signout] = useMutation(signOutMutation, {
    refetchQueries: [{ query: currentUserQuery }]
  })

  const doSignout = async e => {
    e.preventDefault()
    const { data } = await signout()
    // eslint-disable-next-line no-console
    console.log('user signout.. ', data)
    // end session
    if (data?.endSession) return router.push('/')
  }
  return (
    <button type="button" onClick={doSignout}>
      Sign Out
    </button>
  )
}

export default SignOut
