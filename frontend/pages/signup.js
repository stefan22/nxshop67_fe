import React from 'react'
import { useMutation } from '@apollo/client'
import { useForm, signUpMutation } from '../features/form'
import { SignInUpContainer } from '../components/signin'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SignInPage from './signin'

const SignUp = () => {
  const { input, handleChange, resetForm } = useForm()
  const [signup, { data, loading, error }] = useMutation(signUpMutation, {
    variables: input
  })
  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()
    // eslint-disable-next-line no-console
    await signup().catch(err => console.log(err))
    resetForm(input)
  }

  if (data?.createUser) {
    router.push('/signin')
    return (
      <div
        style={{
          width: '100%',
          flexDirection: 'column',
          display: 'flex',
          height: '100%',
          maxWidth: '480px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <SignInPage />
      </div>
    )
  }

  if (loading) return <p>Loading...</p>

  return (
    <SignInUpContainer>
      <div className="login">
        <header>
          <h1>Signup</h1>
          <p>Simple registration process!</p>
        </header>
        <p className="error-message">{error?.message ? error.message : ''}</p>
        <div className="login__body">
          <form method="POST" onSubmit={handleSubmit}>
            <fieldset>
              <section className="input-field">
                <label htmlFor="name">
                  Name:
                  <input
                    type="name"
                    autoComplete="current-name"
                    placeholder="Name"
                    name="name"
                    required
                    value={input.name}
                    onChange={handleChange}
                  />
                </label>
              </section>
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
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    autoComplete="current-password"
                    value={input.password}
                    onChange={handleChange}
                  />
                </label>
              </section>

              <div className="buttons-group">
                <section className="submit-button">
                  <div className="other__links">
                    <p>Password reset?</p>&nbsp;
                    <Link href="/password-reset">Click here.</Link>
                  </div>
                  <button type="submit">Sign up</button>
                </section>

                <section className="login__no-account">
                  <p>Already have an account?</p>
                  <Link href="/signin">
                    <button type="button">Sign in</button>
                  </Link>
                </section>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </SignInUpContainer>
  )
}

export default SignUp
