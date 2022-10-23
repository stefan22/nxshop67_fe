import React, { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import SigninSl from '../components/styles/SigninSl'
import useForm from '../lib/useForm'
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

const SignIn = () => {
  const [error, setError] = useState({ message: '' })
  const { input, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  })

  const [signin] = useMutation(signinMutation, {
    variables: input,
    refetchQueries: [{ query: currentUserQuery }]
  })

  const handleSubmit = async e => {
    e.preventDefault()
    let { data } = await signin()

    if (data?.authenticateUserWithPassword.code === 'FAILURE') {
      setError({
        message: data?.authenticateUserWithPassword.message
      })
    } else if (
      data?.authenticateUserWithPassword.code !== 'FAILURE'
    ) {
      await Router.push({ pathname: '/account' })
    }
    resetForm(input)
  }

  return (
    <SigninSl>
      <div className="login">
        <header>
          <h1>Signin</h1>
          <p>Welcome back!</p>
        </header>
        <p className="error-message">{error?.message}</p>

        <div className="login__body">
          <form method="POST" onSubmit={handleSubmit}>
            <fieldset>
              <section className="input-field">
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="current-email"
                    required
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
                    autoComplete="current-password"
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

export default SignIn
