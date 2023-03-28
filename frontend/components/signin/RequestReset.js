import React from 'react'
import Link from 'next/link'
import { useForm, requestResetMutation } from '../../features/form'
import { useMutation } from '@apollo/client'
import SignInUpContainer from './SignInUp.styles'

const RequestReset = () => {
  const { input, handleChange, resetForm } = useForm({ email: '' })
  const [reset, { data, loading, error }] = useMutation(requestResetMutation, {
    variables: input
  })

  async function handleSubmit(e) {
    e.preventDefault()
    // eslint-disable-next-line no-console
    console.log(input)
    await reset()
    resetForm(input)
  }

  return (
    <SignInUpContainer>
      <div className="login">
        <header>
          <h1>Password reset request</h1>
          {data?.sendUserPasswordResetLink === null && input.email !== '' ? (
            <p>{`A password reset link has been sent to your inbox.`}</p>
          ) : (
            <p>Email password reset.</p>
          )}
        </header>

        <div className="login__body password__reset">
          <form method="POST" onSubmit={handleSubmit}>
            <fieldset>
              <section className="input-field">
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="current-email"
                    value={input?.email}
                    onChange={handleChange}
                    required
                    name="email"
                  />
                </label>
              </section>

              <div className="buttons-group">
                <section className="submit-button">
                  <div className="other__links">
                    <p>{`Don't have an account?`}</p>&nbsp;
                    <Link href="/signup">Click here.</Link>
                  </div>
                  <button type="submit">Request new password</button>
                </section>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </SignInUpContainer>
  )
}

export default RequestReset
