import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import SigninSl from '../components/styles/SigninSl'
import useForm from '../lib/useForm'
import ErrorMessage from '../lib/ErrorMessage'
import { gql } from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { currentUserQuery } from '@/graphql/currentUserQuery'

const signinMutation = gql`
  mutation signinMutation($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`

const Signin = () => {
  const { input, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  })

  const [signin, { data, loading }] = useMutation(signinMutation, {
    variables: input,
    refetchQueries: [{ query: currentUserQuery }]
  })

  const handleSubmit = async e => {
    e.preventDefault()
    let response = await signin()
    await Router.push({ pathname: '/account' })
    resetForm(input)
  }

  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticateWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined

  return (
    <SigninSl>
      <div className="login">
        <header>
          <h1>Signin</h1>
          <p>Welcome Back!</p>
          {error?.message ? error.message : ''}
        </header>
        <div className="login__body">
          <form method="POST" onSubmit={handleSubmit}>
            <ErrorMessage error={error} />
            <fieldset>
              <section className="input-field">
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
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
                    value={input.password}
                    onChange={handleChange}
                  />
                </label>
              </section>
              <div className="buttons-group">
                <section className="submit-button">
                  <button type="submit">Sign in</button>
                </section>
                <section className="login__no-account">
                  <p>Don&apos;t have an account?</p>
                  <Link href="/signup">
                    <button type="button">Sign up</button>
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

export default Signin
