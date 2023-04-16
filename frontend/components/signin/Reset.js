import { useMutation } from '@apollo/client'
import Link from 'next/link'
import { useForm, resetMutation } from '../../features/form'
import { SignInUpContainer } from '../signin'
import { useRouter } from 'next/router'
import ErrorMessage from '../../utils/ErrorMessage'

const Reset = ({ token }) => {
  const router = useRouter()
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  })

  const [reset, { data, error }] = useMutation(resetMutation, {
    variables: {
      inputs,
      token
    }
  })

  const resetError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const data = await reset({
        variables: {
          email: inputs?.email,
          password: inputs?.password,
          token
        }
      })
      let isToken = data?.data
      await resetForm(inputs)

      if (isToken?.redeemUserPasswordtoken === null) {
        await router.push({ pathname: '/signin' })
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  return (
    <SignInUpContainer>
      <div className="login">
        <header>
          <h1>Password reset</h1>
          {data?.redeemUserPasswordResetToken === null && (
            <div className="form-message">
              <p className="message-success">
                You have successfully updated your password.
                <Link href="/signin">Click here to signin</Link>
              </p>
            </div>
          )}
        </header>

        <div className="login__body password__reset">
          <form method="POST" onSubmit={handleSubmit}>
            <fieldset>
              {<ErrorMessage error={error || resetError} />}
              <section className="input-field">
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="current-email"
                    value={inputs?.email}
                    onChange={handleChange}
                    required
                    name="email"
                  />
                </label>
              </section>

              <section className="input-field">
                <label htmlFor="password">
                  Password:
                  <input
                    type="password"
                    placeholder="Password"
                    value={inputs?.password}
                    onChange={handleChange}
                    required
                    name="password"
                  />
                </label>
              </section>

              <div className="buttons-group">
                <section className="submit-button">
                  <div className="other__links">
                    <p>{`Don't have an account?`}</p>&nbsp;
                  </div>
                  <button type="submit">Reset password</button>
                </section>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </SignInUpContainer>
  )
}

export default Reset
