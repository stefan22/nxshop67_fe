import { useMutation } from '@apollo/client'
import Link from 'next/link'
import { useForm, resetMutation } from '../../features/form'
import { SignInUpContainer } from '../signin'
import { useRouter } from 'next/router'
import ErrorMessage from '../../utils/ErrorMessage'
import InputField from '../InputField'
import React from 'react'

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
  const { email, password } = inputs

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

              <InputField
                label="Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <InputField
                label="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />

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
