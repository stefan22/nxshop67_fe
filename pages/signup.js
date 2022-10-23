import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import useForm from '../lib/useForm'
import SigninSl from '../components/styles/SigninSl'
import SignIn from './signin'
import Link from 'next/link'

const signupMutation = gql`
  mutation signupMutation(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(
      data: { email: $email, name: $name, password: $password }
    ) {
      id
      email
      name
    }
  }
`

const SignUp = () => {
  const { input, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: ''
  })
  const [signup, { data, loading, error }] = useMutation(
    signupMutation,
    {
      variables: input
    }
  )
  const handleSubmit = async e => {
    e.preventDefault()
    // eslint-disable-next-line no-console
    await signup().catch(err => console.log(err))
    resetForm(input)
  }

  if (data?.createUser) {
    return (
      <div
        style={{
          width: '100%',
          flexDirection: 'column',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p>Successfully signed up with {data?.createUser.email}</p>
        <SignIn />
      </div>
    )
  }

  return (
    <SigninSl>
      <div className="login">
        <header>
          <h1>Signup</h1>
          <p>Simple registration process!</p>
        </header>
        <p className="error-message">
          {error?.message ? error.message : ''}
        </p>
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
                  <span>Password Reset</span>
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
    </SigninSl>
  )
}

export default SignUp
