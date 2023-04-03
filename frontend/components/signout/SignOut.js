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
    let { data } = await signout()
    // endSession
    if (data) return router.push('/')
  }

  return (
    <button type="button" onClick={doSignout}>
      Sign Out
    </button>
  )
}

export default SignOut
