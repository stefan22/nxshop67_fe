/* eslint-disable no-console */
import React from 'react'
import { useMutation } from '@apollo/client'
import { useForm } from '../../features/form'
import { SignInUpContainer } from '../signin'

const Reset = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token
  })
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs
  })
  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined
  console.log(error)

  async function handleSubmit(e) {
    e.preventDefault() // stop the form from submitting
    console.log(inputs)
    const res = await reset().catch(console.error)
    console.log(res)
    console.log({ data, loading, error })
    resetForm()
    // Send the email and password to the graphqlAPI
  }

  return (
    <SignInUpContainer>
      <div className="login">
        <header>
          <h1>Password reset</h1>
          <p>Password reset request</p>
        </header>
        <p className="error-message">{error?.message ? error.message : ''}</p>
        <div className="login__body">
          <form method="POST" onSubmit={handleSubmit}>
            <fieldset>
              {data?.redeemUserPasswordResetToken === null && (
                <p>Success! You can Now sign in</p>
              )}
              <section className="input-field">
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    autoComplete="current-email"
                    placeholder="Email"
                    name="email"
                    required
                    value={input.email}
                    onChange={handleChange}
                  />
                </label>
              </section>

              <section className="input-field">
                <label htmlFor="password">
                  Password:
                  <span>Password Reset</span>
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    name="password"
                    value={inputs?.password}
                    onChange={handleChange}
                  />
                </label>
              </section>

              <div className="buttons-group">
                <section className="submit-button">
                  <button type="submit">Request reset</button>
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
